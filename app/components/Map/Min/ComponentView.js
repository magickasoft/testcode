import React from 'react';
import { ViewPropTypes, Animated, View } from 'react-native';
import { pure } from 'recompose';
import MapView from 'react-native-maps';
import T from 'prop-types';
import { Rect } from 'react-native-svg';
import MapViewDirections from 'react-native-maps-directions';
import Config from 'react-native-config';

import { uri } from '../mockData';
import s from './styles';
import { Marker as CustomMarker } from '../../index';
import { createAddDelta } from '../../../utils/helpers/map';
import ContentLoader from '../../ContentLoader';
import colors from '../../../styles/colors';

const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.0121;

const addDelta = createAddDelta(LATITUDE_DELTA, LONGITUDE_DELTA);

const Min = ({
  containerStyle,
  initialRegion,
  style,
  height,
  _isLoading,
  _opacity,
  _opacityLoading,
  _onMapReady,
  data = [],
  _currentLocation,
  setRefMap,
  onDirectionReady,
  ...props
}) => (
  <View style={[s.container, { height }]}>
    {_isLoading && (
      <View style={[s.spinner, { height }]}>
        <ContentLoader height={height} >
          <Rect
            fill={colors.lightestGrey}
            x="0"
            y="0"
            rx="0"
            ry="0"
            width={800}
            height={height}
          />
        </ContentLoader>
      </View>
    )}
    <Animated.View style={[
      s.container,
      containerStyle,
      { opacity: _opacity, height }
    ]}
    >
      {!_isLoading && (
      <MapView
        ref={setRefMap}
        {...props}
        data={data}
        onMapReady={_onMapReady}
        initialRegion={addDelta(initialRegion)}
        style={[s.map, style]}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
        showsMyLocationButton={false}
        showsPointsOfInterest={false}
        showsCompass={false}
        showsScale={false}
        showsBuildings={false}
        showsTraffic={false}
        showsIndoors={false}
        zoomControlEnabled={false}
        moveOnMarkerPress={false}
        cacheEnabled
        liteMode
        maxZoomLevel={15}
      >
        {!!_currentLocation && (
          <MapViewDirections
            origin={_currentLocation}
            destination={initialRegion}
            apikey={Config.DIRECTION_API_KEY}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={onDirectionReady}
            strokeColor="#0098ED"
            strokeWidth={4}
          />
        )}
        {!!_currentLocation && (
          <MapView.Marker
            coordinate={addDelta(_currentLocation)}
          >
            <View style={s.myPosition} />
          </MapView.Marker>
        )}
        <CustomMarker
          id={0}
          key={0}
          coordinate={addDelta(initialRegion)}
          uri={uri}
          openCallout={false}
        />
      </MapView>
      )}
    </Animated.View>
  </View>
);

Min.propTypes = {
  initialRegion: T.object,
  data: T.array,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  height: T.number.isRequired,
  _onMapReady: T.func,
  _isLoading: T.bool,
  _opacity: T.object,
  _opacityLoading: T.object,
  _currentLocation: T.object,
  setRefMap: T.func,
  onDirectionReady: T.func
};

export default pure(Min);
