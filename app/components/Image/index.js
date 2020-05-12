import Animated, { Easing } from 'react-native-reanimated';
import { compose, withHandlers, defaultProps } from 'recompose';
import Image from './Image';

const enhance = compose(
  defaultProps({
    opacity: new Animated.Value(0)
  }),
  withHandlers({
    onLoad: (props) => () => {
      Animated.timing(props.opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease)
      }).start();
    }
    // onProgress: props => ({nativeEvent: { loaded, total }}) => {
    //   Reactotron.log('onProgress', total / 1000, 'kl' )
    // },
    // onError: props => ({ nativeEvent }) => {
    //   // console.log('IMAGE_LOAD_ERROR', nativeEvent);
    // },
  }),
);

export default enhance(Image);
