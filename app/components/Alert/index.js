import { compose, setPropTypes, withPropsOnChange, withState, withHandlers, defaultProps } from 'recompose';
import { Easing, Animated } from 'react-native';
import T from 'prop-types';
import Alert from './Alert';

const { Value, timing } = Animated;

const TRANS_SHOW = 0;
const TRANS_HIDE = -150;

const enhance = compose(
  defaultProps({
    delay: 3500
  }),
  setPropTypes({
    onChangeVisible: T.func.isRequired,
    isVisible: T.bool.isRequired,
    delay: T.number
  }),
  withState('_transY', '_setTransY', (props) => new Value(props.isVisible ? TRANS_SHOW : TRANS_HIDE)),
  withHandlers({
    _anim: (props) => (toValue) => {
      timing(props._transY, {
        duration: 400,
        toValue,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      }).start();
    }
  }),
  withHandlers({
    _onClose: (props) => () => {
      props._anim(TRANS_HIDE);
      props.onChangeVisible();
    }
  }),
  withPropsOnChange(['isVisible'], ({ isVisible, delay, _onClose, _anim }) => {
    isVisible ? _anim(TRANS_SHOW) : _anim(TRANS_HIDE);

    if (isVisible && delay) {
      setTimeout(() => {
        _onClose();
      }, delay);
    }
    if (!isVisible) {
      _onClose();
    }
  }),
);

export default enhance(Alert);
