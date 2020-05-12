import React from 'react';
import { View, ViewPropTypes, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import * as Animatable from 'react-native-animatable';
import T from 'prop-types';
import { colors } from '@styles';

import s from './styles';
import { Marker as CustomMarker, Spinner, Text } from '../../index';
import { uri } from '../mockData';
import { createAddDelta } from '../../../utils/helpers/map';
import styles from '../../../styles';

const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.0121;

const addDelta = createAddDelta(LATITUDE_DELTA, LONGITUDE_DELTA);

const renderCluster = ({ pointCount, coordinate, clusterId }, onPress) => ( // eslint-disable-line
  <Marker
    identifier={`cluster-${clusterId}`}
    coordinate={coordinate}
    onPress={onPress}
  >
    <View>
      <Animatable.View style={s.clusterBorder}>
        <View style={s.clusterContainer}>
          <Text style={s.clusterText}>
            {pointCount}
          </Text>
        </View>
      </Animatable.View>
    </View>
  </Marker>
);

const renderMarker = (_initialRegion, onPressMarker) => ({ title, id, location, address }) =>  ( // eslint-disable-line
  <CustomMarker
    onCalloutPress={(loc) => onPressMarker(id, loc)}
    title={title}
    description={address}
    key={id || Math.random()}
    coordinate={location}
    uri={uri}
    openCallout={false}
  />
);

const Map = ({
  containerStyle,
  data,
  style,
  onPressMarker,
  _currentLocation,
  _opacity,
  _isLoading,
  _initialRegion,
  _onMapReady,
  location,
  markerTitle,
  ...props
}) => (
  <View style={styles.fillAll}>
    <Animated.View style={[
      s.root,
      containerStyle,
      { opacity: _opacity }
    ]}
    >
      {!_isLoading && !!_initialRegion && (
        <ClusteredMapView
          {...props}
          data={data}
          loadingEnabled
          extent={1024}
          style={[s.map, style]}
          renderCluster={renderCluster}
          maxZoom={15}
          renderMarker={renderMarker(_initialRegion, onPressMarker)}
          showsScale
          showsCompass
          initialRegion={location ? addDelta(location) : addDelta(_initialRegion)}
          onMapReady={_onMapReady}
        >
          {!!_currentLocation && (
            <MapView.Marker
              pinColor="#1c31d5"
              coordinate={addDelta(_currentLocation)}
              title="Your Location"
            >
              <View style={[s.myPostition, styles.shadow]} />
            </MapView.Marker>
          )}
          {!!location && (
            <MapView.Marker
              pinColor="#1c31d5"
              coordinate={location}
              title={markerTitle}
            />
          )}
        </ClusteredMapView>
      )}
    </Animated.View>
    {(_isLoading || !_initialRegion) && (
      <View style={s.spinner}>
        <Spinner />
      </View>
    )}
  </View>
);


Map.propTypes = {
  containerStyle: ViewPropTypes.style,
  data: T.arrayOf(T.object),
  style: ViewPropTypes.style,
  onPressMarker: T.func,
  _isLoading: T.bool,
  _currentLocation: T.object,
  _opacity: T.object,
  _initialRegion: T.object,
  _onMapReady: T.func,
  location: T.object,
  markerTitle: T.string
};

export default Map;
