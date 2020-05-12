import { withHandlers } from 'recompose';
import { Animated } from 'react-native';

export default (handlerName, propName, type, duration) => withHandlers({
  [handlerName]: props => (
    toValue,
    callBack,
    useNativeDriver = true,
  ) => {
    Animated[type](
      props[propName],
      {
        toValue,
        duration,
        useNativeDriver,
      }
    ).start(callBack);
  },
});
