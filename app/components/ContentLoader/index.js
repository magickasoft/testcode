/* eslint-disable */
import React from 'react';
import { Animated, Easing, View } from 'react-native';
import T from 'prop-types';
import { Svg, Stop, ClipPath, Defs, G, Rect, LinearGradient } from 'react-native-svg';
import s from './styles';
// TODO: remove LinearGradient
import { dimensions, colors } from '../../styles';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const { Value } = Animated;

class ContentLoader extends React.Component {
  constructor(props){
    super(props);
    this._translateX = new Value(-200);
  };

  componentDidMount(){
    Animated.loop(
      Animated.timing(this._translateX, {
        duration: 1000,
        toValue: this.props.width,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    ).start();
  };

  render() {
    const {
      children,
      width,
      height,
      primaryColor,
      secondaryColor,
      x1,
      y1,
      x2,
      y2,
      backgroundColor,
      ...props
    } = this.props;

    return (
      <View style={{ overflow: 'hidden' }}>
        <AnimatedSvg
          width={width}
          height={height}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={s.gradient}
        >
          <Rect
            x="0"
            y="0"
            height={height}
            width={width}
            fill={primaryColor}
          />
        </AnimatedSvg>
        <AnimatedSvg
          width={width}
          height={height}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={[
            s.gradient,
            {transform: [{ translateX: this._translateX }]}
          ]}
        >
          <Defs>
            <LinearGradient
              id="grad"
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
            >
              <Stop
                offset="0.1"
                stopColor={primaryColor}
                stopOpacity="1"
              />
              <Stop
                offset="0.4"
                stopColor={secondaryColor}
                stopOpacity="1"
              />
              <Stop
                offset="0.7"
                stopColor={primaryColor}
                stopOpacity="1"
              />
            </LinearGradient>
            <ClipPath id="clip">
              <G>{children}</G>
            </ClipPath>
          </Defs>
          <Rect
            x="0"
            y="0"
            height={height}
            width={width}
            fill="url(#grad)"
            clipPath="url(#clip)"
          />
        </AnimatedSvg>
        <AnimatedSvg
          width={width}
          height={height}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        >
          <ClipPath id="clip">
            <G>
              {children}
              <Rect
                x="0"
                y="0"
                height={height}
                width={width}
              />
            </G>
          </ClipPath>
          <Rect
            x="0"
            y="0"
            height={height}
            width={width}
            clipPath="url(#clip)"
            clipRule="evenodd"
            fill={backgroundColor}
          />
        </AnimatedSvg>
      </View>
    );
  }
}

ContentLoader.propTypes = {
  primaryColor: T.string,
  secondaryColor: T.string,
  duration: T.number,
  width: T.number,
  height: T.number,
  x1: T.string,
  y1: T.string,
  x2: T.string,
  y2: T.string,
  backgroundColor: T.string,
};

ContentLoader.defaultProps = {
  primaryColor: '#eeeeee',
  secondaryColor: '#dddddd',
  duration: 2000,
  width: dimensions.windowWidth,
  height: 200,
  x1: '0',
  y1: '0',
  x2: '100%',
  y2: '0',
  backgroundColor: colors.white,
};

export default ContentLoader;
