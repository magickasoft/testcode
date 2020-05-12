import { Keyboard, Animated, Platform } from 'react-native';
import {
  withState,
  compose,
  withHandlers,
  lifecycle
} from 'recompose';

import { toUpperFirst } from '../helpers/string';

const ios = Platform.OS === 'ios';

const KEYBOARD_SHOW = ios ? 'keyboardWillShow' : 'keyboardDidShow';
const KEYBOARD_HIDE = ios ? 'keyboardWillHide' : 'keyboardDidHide';

/**
 * @param stateName T.string
 * @param initValue T.number
 * @param secondValue T.number
 * @returns props { stateName }
 *
  example usage   withAnimatedLogo('translateImage', 0, -27 * dimensions.indent),
 */


export default (stateName, initValue, secondValue) => compose(
  withState(
    stateName,
    `set${toUpperFirst(stateName)}`,
    new Animated.Value(initValue)
  ),
  withHandlers({
    onAnimateImage: (props) => (toValue) => {
      Animated.timing(props[stateName], {
        duration: 300,
        toValue,
        useNativeDriver: true
      }).start();
    }
  }),
  lifecycle({
    componentDidMount() {
      const { onAnimateImage } = this.props;
      this.keyboardShowSub = Keyboard.addListener(KEYBOARD_SHOW, () => onAnimateImage(secondValue));
      this.keyboardHideSub = Keyboard.addListener(KEYBOARD_HIDE, () => onAnimateImage(initValue));
    },
    componentWillUnmount() {
      this.keyboardShowSub.remove();
      this.keyboardHideSub.remove();
    }
  }),
);
