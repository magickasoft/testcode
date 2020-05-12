import T from 'prop-types';
import React from 'react';
import { pure } from 'recompose';
// import { View } from 'react-native';
// import Svg, { Circle, Polygon } from 'react-native-svg';
import { Marker } from 'react-native-maps';

// import { colors } from '../../styles';

// import s from './styles';
// import { Avatar } from '../../containers';

// const HEIGHT = 60;
// const WIDTH = 50;

const ComponentView = ({
  // fill = colors.backgroundPrimary,
  // scale = 1,
  onChangeRef,
  onPressMarker,
  key,
  ...props
}) => (
  <Marker
    pinColor="#1c31d5"
    onPress={onPressMarker}
    ref={onChangeRef}
    {...props}
  />
  /* <View style={[s.container, { height: height * 1.1, width: width * 1.4 }]}>
        <View style={[s.marker, { height, width }]}>
          <Svg
            viewBox="0 0 100 120"
            style={{ height, width }}
          >
            <Circle cx="50" cy="50" r="49" fill={fill} />
            <Polygon
              points="5,65 95,65 50,120"
              fill={fill}
            />
          </Svg>
          <View style={[s.avatarContainer, { bottom: height - width }]}>
            <Avatar
              size={40}
              uri={uri}
            />
          </View>
        </View>
      </View>
    </Marker> */
);

ComponentView.propTypes = {
  fill: T.string,
  key: T.string,
  onChangeRef: T.func,
  onPressMarker: T.func,
  scale: T.number
};

export default pure(ComponentView);
