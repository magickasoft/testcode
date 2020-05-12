import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withProps,
  withPropsOnChange,
  lifecycle
} from 'recompose';
import Share from 'react-native-share';
import R from 'ramda';
import { InteractionManager } from 'react-native';
import I18n from 'react-native-i18n';

import { placeHocs, placeOperations } from '@modules/place';
import { reviewsHocs, reviewsOperations } from '@modules/reviews';
import { commonHocs, commonOperations } from '@modules/common';
import { myProfileHocs } from '@modules/myProfile';
import {
  withUploadPhoto,
  withTheme,
  withSetter,
  withToggle,
  withActionSheet,
  withCopilot,
  withPhotoSourceSelect,
  withAnimation
} from '@utils/enhancers';
import { screens, report, parallax } from '@constants';

import SpotReview from './SpotReview';
import { getImages } from '../../utils/helpers/images';
import s from './style';

const enhance = compose(
  placeHocs.queryGetPlace({ fetchPolicy: 'cache-and-network' }),
  placeHocs.mutationAttachFileToPlace(),
  reviewsHocs.mutationUpdateLikeForPlaceReview(),
  reviewsHocs.queryGetReviewsForPlace({
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  }),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  commonHocs.mutationReport(),

  withSetter('galleryIndex', null),
  withState('actionSheetRef', 'setActionSheetRef', null),
  withState('currentReview', 'setCurrentReview', null),
  withState('flatListRef', 'setFlatListRef', null),
  withState('viewRef', 'setViewRef', null),
  withState('isLoadToId', 'setLoadToId', false),
  withToggle('visibleButtons', 'toggleVisibleButtons', 'onVisibleButtons', false),
  withProps(({ getPlace, getReviewsForPlace }) => ({
    place: {
      id: R.pathOr(null, ['place', 'id'], getPlace),
      location: R.pathOr({}, ['place', 'location'], getPlace),
      title: R.pathOr('', ['place', 'title'], getPlace),
      address: R.pathOr('', ['place', 'address'], getPlace),
      rating: +R.pathOr(null, ['place', 'rating'], getPlace),
      categoryId: R.pathOr(null, ['place', 'category_id'], getPlace),
      images: getImages(R.pathOr([], ['place', 'files'], getPlace)),
      description: R.pathOr('No description', ['place', 'description'], getPlace),
      price_category: R.pathOr(1, ['place', 'price_category'], getPlace),
      website: R.pathOr('', ['place', 'website'], getPlace),
      phone: R.pathOr('', ['place', 'phone'], getPlace),
      isAddedToBookmark: R.pathOr(false, ['place', 'isAddedToBookmark'], getPlace),
      tags: R.pathOr([], ['place', 'tags'], getPlace),
      checkInsCount: R.pathOr(0, ['place', 'checkInsCount'], getPlace)
    },
    reviews: {
      data: R.pathOr([], ['reviews', 'reviews'], getReviewsForPlace),
      totalCount: R.pathOr(0, ['reviews', 'totalCount'], getReviewsForPlace),
      fetchMore: R.pathOr(null, ['fetchMore'], getReviewsForPlace)
    },
    isLoading: {
      place: R.pathOr(false, ['loading'], getPlace),
      reviews: R.pathOr(false, ['loading'], getReviewsForPlace),
      reviewsMore: getReviewsForPlace.networkStatus === 3
    }
  })),
  withPropsOnChange(
    ['isLoading'],
    ({
      isLoading, loadToId, reviews, flatListRef, setLoadToId, isLoadToId
    }) => {
      if (!isLoading.reviews && loadToId && !R.isEmpty(reviews) && !isLoadToId) {
        InteractionManager.runAfterInteractions(() => {
          if (flatListRef && flatListRef.getNode()) {
            flatListRef.getNode().scrollToIndex({
              index: reviews.data.length - 1,
              viewOffset: -parallax.ITEM_HEIGHT / 2
            });
          }
          setLoadToId(true);
        });
      }
    }
  ),
  withHandlers({
    onOpenGallery: (props) => (index = 0) => {
      props.setGalleryIndex(index);

      props.navigator.openModal(screens.Gallery, {
        passProps: {
          id: props.id,
          initIndex: index,
          type: 'place'
        }
      });
    },
    onEndReached: (props) => () => {
      const { length } = props.reviews.data;

      if (props.isLoading.reviews || props.reviews.totalCount === length || props.isLoading.reviewsMore) {
        return;
      }

      reviewsOperations.fetchMoreReviews(props);
    },
    onShare: () => () => {
      const shareOptions = {
        title: 'Community A',
        message: 'Join me at Community A ',
        url: 'www.CommunityA.com',
        subject: 'Share Link' //  for email
      };

      Share.open(shareOptions)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onUpdateLike: (props) => (index, review, value, type) => {
      reviewsOperations.updateLikeForPlaceReview({
        mutate: props.updateLikeForPlaceReview,
        variables: {
          review_id: R.prop('id', review),
          value
        },
        review,
        type,
        loadToId: R.pathOr(null, ['loadToId'], props)
      });
    },
    onChangeViewRef: (props) => (ref) => {
      if (ref) {
        InteractionManager.runAfterInteractions(() => {
          setTimeout(() => props.setViewRef(ref), 100);
        });
      }
    },
    onGoToEditReview: (props) => () => {
      props.navigator.push(screens.EditReview, {
        passProps: {
          review: props.currentReview
        }
      });
    },
    report: (props) => () => {
      commonOperations.report({
        mutate: props.report,
        variables: {
          item_id: props.currentReview.id,
          alert_type: report.REPORT_TYPE.ANGRY,
          item_type: report.REPORT_ITEM_TYPE.PLACE_REVIEW,
          note: ''
        }
      });
    }
  }),
  withUploadPhoto((props, data) => {
    placeOperations.attachFileToPlace({
      mutate: props.mutationAttachFileToPlace,
      variables: {
        fileId: R.pathOr(null, ['file', 'id'], data),
        placeId: R.pathOr(null, ['place', 'id'], props)
      },
      place: props.getPlace.place,
      filename: R.pathOr(null, ['file', 'filename'], data),
      currentProfile: props.currentProfile.currentProfile
    });
  }),
  withPhotoSourceSelect(),
  withActionSheet(
    (props) => [
      { name: I18n.t('messages.cancel') },
      {
        name: 'Report',
        handler: props.report
      }
    ],
    {
      cancelButtonIndex: 0
    }
  ),
  withActionSheet(
    (props) => [
      { name: I18n.t('messages.cancel') },
      {
        name: 'Edit Review',
        handler: props.onGoToEditReview
      }
    ],
    {
      cancelButtonIndex: 0
    },
    'openDialogOptionsMy'
  ),
  withHandlers({
    onVisibleButtons: (props) => () => {
      props.onChangeViewRef();
      props.onVisibleButtons();
    },
    openDialogOptions: (props) => (review) => {
      props.setCurrentReview(review);

      const myProfileId = R.path(['currentProfile', 'currentProfile', 'id'], props);
      const profileId = R.path(['mprofile', 'id'], review);

      const fn = myProfileId === profileId ? props.openDialogOptionsMy : props.openDialogOptions;

      fn();
    }
  }),
  withTheme(s),
  withAnimation(),
  withCopilot(screens.SpotReview, ({ flatListRef }, { name }) => {
    if (name === 'check-in') {
      const scroll = flatListRef.getNode();
      if (scroll) {
        scroll.scrollToOffset({ offset: 300, animated: false });
      }
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { isLoading, flatListRef } = this.props;
      if (prevProps.isLoading.place !== isLoading.place && !isLoading.place) {
        const scroll = flatListRef && flatListRef.getNode();
        if (scroll) {
          scroll.scrollToOffset({ offset: 1, animated: true });
          this.forceUpdate();
        }
      }
    }
  })
);

export default hoistStatics(enhance)(SpotReview);
