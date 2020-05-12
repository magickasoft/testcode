/* eslint-disable */
import {
  compose,
  hoistStatics,
  withState,
  withHandlers,
  withProps,
  defaultProps,
} from 'recompose';
import R from 'ramda';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { withSetter, withTheme } from '@utils/enhancers';
import { screens } from '@constants';
import { reviewsHocs, reviewsOperations } from '@modules/reviews';
import { placeHocs } from '@modules/place';
import { myProfileHocs } from '@modules/myProfile';
import { images } from '@utils/helpers';

import SpotsPoll from './SpotsPoll';
import s from './style';

const polls = [{
    _id: 0,
    question: 'Is the neighborhood LGBTQ+-safe?',
  }, {
    _id: 1,
    question: 'Is it a good place for a same sex date?',
  }, {
    _id: 2,
    question: 'Did you feel rushed out?',
}];

const mapStateToProps = ({ error, auth, user }) => ({
  idProfile: user.idProfile,
});

const enhance = compose(
  connect(mapStateToProps),
  defaultProps({
    polls: polls,
  }),

  placeHocs.queryGetPlace(),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  withProps(props =>  ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
  })),
  reviewsHocs.mutationSendPlaceReview(),

  withState('answers', 'setTabsState', []),
  withState('rating', 'setRating', props => props.rate),
  withSetter('comment', ''),

  withProps(({ getPlace }) =>
    R.pick(['place', 'loading', 'error', 'fetchMore'], getPlace)),
  withProps(({ place }) => ({
    poolImages: images.getImagesUrlsCount(R.propOr([], 'files', place), 3),
  })),

  withHandlers({
    onAnswer: ({ setTabsState, answers }) => answer => {
      setTabsState([...answers, answer]);
    },
    onSubmit: ({
       navigator,
       rating,
       sendPlaceReview,
       place,
       comment,
       answers,
       currentProfile,
       idSpotReview,
       ...props
     }) => () => {
      const id = R.pathOr(null, ['id'], place);

      const review = {
        place_id: id,
        text: comment,
        overflow_lvl: rating,
        lvl1: answers[0],
        lvl2: answers[1],
        lvl3: answers[2],
        lvl4: answers[3],
        lvl5: answers[4],
      };

      reviewsOperations.sendPlaceReview({
        mutate: sendPlaceReview,
        variables: review,
        optimistic: {
          place,
          currentProfile,
        },
        loadToId: R.pathOr(null, ['loadToId'], props),
      });

      Keyboard.dismiss();

      navigator.push(screens.SpotsPollSubmitted, {
        passProps: { id, idSpotReview, review }
      });
    },
    onChangeRating: ({ setRating }) => rating => {
      setRating(rating);
    },
  }),
  withTheme(s)
);

export default hoistStatics(enhance)(SpotsPoll);
