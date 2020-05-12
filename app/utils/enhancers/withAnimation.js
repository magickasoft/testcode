import { compose, withState, withProps, lifecycle } from 'recompose';
import Animated from 'react-native-reanimated';
import { nativeEvent, transform } from '@utils/animation';
import { dimensions } from '@styles';
import { parallax } from '@constants';
import { interpolateColor, createAnimatedColor } from '../colors';

const { Value, interpolate, Extrapolate } = Animated;

const withAnimation = ({ colorHeader } = {}) => compose(
  withState('translateYHeader', 'setTranslateYHeader', new Value(0)),
  withProps(({ translateYHeader, theme: { colors } }) => ({
    animation: {
      translateYHeader,
      onScroll: nativeEvent.y(translateYHeader),
      animatedTitle: transform.translateY(
        interpolate(translateYHeader, {
          inputRange: [0, parallax.TRANSLATE - dimensions.statusBarHeight],
          outputRange: [-dimensions.statusBarHeight, -parallax.TRANSLATE],
          extrapolate: Extrapolate.CLAMP
        }),
      ),
      animatedButton: transform.translateY(
        interpolate(translateYHeader, {
          inputRange: [0, parallax.TRANSLATE + dimensions.verticalIndent * 3],
          outputRange: [parallax.TRANSLATE, 0],
          extrapolate: Extrapolate.CLAMP
        }),
      ),
      opacityTitle: interpolate(translateYHeader, {
        inputRange: [0, parallax.TRANSLATE - 20, parallax.TRANSLATE],
        outputRange: [1, 0.7, 0],
        extrapolate: Extrapolate.CLAMP
      }),
      opacityTitleSecond: interpolate(translateYHeader, {
        inputRange: [parallax.TRANSLATE, parallax.TRANSLATE + 1],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
      }),
      opacityImage: interpolate(translateYHeader, {
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
      }),
      colorTitle: interpolateColor(translateYHeader, {
        inputRange: [0, parallax.TRANSLATE - dimensions.appBarHeight / 2],
        outputRange: [colors.black, colors.backgroundSecondary]
      }),
      colorHeader: createAnimatedColor(
        colorHeader || colors.activePrimary,
        interpolate(translateYHeader, {
          inputRange: [parallax.TRANSLATE, parallax.TRANSLATE + 1],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP
        })
      ),
      scaleImage: interpolate(translateYHeader, {
        inputRange: [-400, 0],
        outputRange: [4, 1],
        extrapolate: Extrapolate.CLAMP
      })
    }
  })),
  lifecycle({
    componentWillUnmount() {
      const { setTranslateYHeader } = this.props;
      setTranslateYHeader(new Value(0));
    }
  }),
);

export default withAnimation;
