import { compose, withState, withHandlers } from 'recompose';
import { LayoutAnimation } from 'react-native';
import { likeTypes, likeValues } from '../../constants/like';
import { withAnimated, withAnimatedValue } from '../../utils/animation';
import delay from '../../utils/delay';
import Likes from './Likes';

const enhance = compose(
  withState('type', 'setType', ''),
  withState('isTextReasonVisible', 'setTextReasonVisible', false),
  withState('isReasonButtonsVisible', 'setReasonButtonsVisible', true),

  withAnimatedValue('translateY', 46),
  withAnimated('onAnimate', 'translateY', 'timing', 100),

  withHandlers({
    onCloseReason: (props) => () => {
      props.onAnimate(46, () => props.setType(''), true);
    }
  }),

  withHandlers({
    onChangeLike: (props) => () => {
      if (props.isLiked === likeValues.like) {
        props.onChange(likeValues.none, likeTypes.like);
      } else {
        props.onAnimate(0, props.setType(likeTypes.like), true);
        props.onChange(likeValues.like, likeTypes.like);
      }
    },
    onChangeDislike: (props) => () => {
      if (props.isLiked === likeValues.dislike) {
        props.onChange(likeValues.none, likeTypes.dislike);
      } else {
        props.onAnimate(0, props.setType(likeTypes.dislike), true);
        props.onChange(likeValues.dislike, likeTypes.dislike);
      }
    },
    onClickReason: (props) => async (value) => {
      console.log('Reason:', value);

      props.setReasonButtonsVisible(false);
      LayoutAnimation.easeInEaseOut();
      props.setTextReasonVisible(true);
      await delay(1000);
      props.onCloseReason();
      await delay(300);
      props.setTextReasonVisible(false);
      props.setReasonButtonsVisible(true);
    }
  }),
);

export default enhance(Likes);
