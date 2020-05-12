import {
  compose,
  lifecycle,
  withState,
  defaultProps,
  setPropTypes,
  withHandlers
} from 'recompose';
import { InteractionManager, Animated } from 'react-native';
import T from 'prop-types';

const enhance = compose(
  setPropTypes({
    delay: T.number
  }),
  defaultProps({
    delay: 200
  }),
  withState('_isLoadingUI', '_toggleLoadingUI', true),
  withState('_opacity', '_setOpacity', () => new Animated.Value(0)),
  withHandlers({
    _onMapReady: (props) => () => {
      Animated.timing(props._opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    }
  }),
  lifecycle({
    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
          this.props._toggleLoadingUI(false);
        }, this.props.delay);
      });
    }
  })
);

export default enhance;
