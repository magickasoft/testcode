/* eslint-disable */
import {
  compose,
  withProps,
  withHandlers,
  hoistStatics,
  branch,
  withState,
  lifecycle,
} from 'recompose';
import R from 'ramda';
import Share from 'react-native-share';

import Gallery from './Gallery';
import { placeHocs, placeOperations } from '../../modules/place';
import { getImages } from '../../utils/helpers/images';
import withActionSheet from '../../utils/enhancers/withActionSheet';
import I18n from 'react-native-i18n';
import { commonHocs, commonOperations } from '../../modules/common';
import { REPORT_ITEM_TYPE, REPORT_TYPE } from '../../constants/report';
import { albumsHocs, albumsOperations } from '../../modules/albums';

const galleryHoc = branch(
  R.propEq('type', 'place'),
  compose(
    placeHocs.queryGetPlace(),
    placeHocs.mutationSendPlaceImageLike(),
    withProps(({ getPlace }) => ({
      images: getImages(R.pathOr([], ['place', 'files'], getPlace)),
    })),
    withHandlers({
      updateLike: props => (currentIndex, value) => {
        const currentImage = props.images[currentIndex];

        placeOperations.sendPlaceImageLike({
          mutate: props.sendPlaceImageLike,
          variables: {
            fileId: currentImage.id,
            value,
          },
          item: currentImage,
        });
      },
    }),
  ),
  compose(
    albumsHocs.mutationLikeAlbumImage(),
    albumsHocs.queryGetAlbumFull(),
    albumsHocs.mutationAddViewToAlbumImage(),
    withProps((props) => {
      const album = R.path(['getAlbumFull', 'album'], props);
      return {
        images: R.pipe(
          R.propOr([], 'images'),
          R.map(image => ({
            ...image,
            filename: image.file,
            mprofile: album.mprofile,
            ts: image.created_ts,
            views: image.views,
          }))
        )(album),
      }
    }),
    withHandlers({
      updateLike: props => (currentIndex, value) => {
        const currentImage = props.images[currentIndex];
        albumsOperations.likeAlbumImage({
          mutate: props.likeAlbumImage,
          variables: {
            imageId: currentImage.id,
            value,
          }
        });
      },
      addViewToIndex: props => index => {
        const image = props.images[index];
        if (image) {
          albumsOperations.addViewToAlbumImage({
            mutate: props.addViewToAlbumImage,
            variables: { imageId: image.id },
          });
        }
      }
    }),
  ),
);

const enhance = compose(
  galleryHoc,
  withState('currentIndex', 'setCurrentIndex', props => props.initIndex),
  lifecycle({
    componentDidMount() {
      const { addViewToIndex, initIndex } = this.props;
      if (addViewToIndex && !R.isNil(initIndex)) {
        addViewToIndex(initIndex);
      }
    }
  }),
  commonHocs.mutationReport(),
  withHandlers({
    onShare: props => async (currentIndex) => {
      try {
        let shareOptions = {
          title: 'Community A',
          message: 'Join me at Community A ',
          url: R.pathOr(null, ['images', currentIndex, 'filename'], props),
          subject: 'Share Link' //  for email
        };

        await Share.open(shareOptions)

      } catch (e) {

      }
    },
    report: props => () => {
      const currentImage = props.images[props.currentIndex];

      commonOperations.report({
        mutate: props.report,
        variables: {
          item_id: currentImage.id,
          alert_type: REPORT_TYPE.ANGRY,
          item_type: REPORT_ITEM_TYPE.PLACE_REVIEW_IMAGE,
          note: ''
        },
      });
    },
  }),
  withActionSheet(props => [{
    name: I18n.t('messages.cancel'),
  }, {
    name: 'Report',
    handler: props.report,
  }], {
    cancelButtonIndex: 0,
  }),
);

export default hoistStatics(enhance)(Gallery);
