import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import T from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import { getContext } from 'recompose';
import I18n from 'react-native-i18n';

import { screens } from '../../../constants';

const styles = StyleSheet.create({
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

class MapViewComponent extends React.Component {
  openMap = () => {
    const { navigator, currentMessage } = this.props;
    navigator.push(screens.Map, {
      title: 'chat',
      passProps: {
        location: currentMessage.location,
        markerTitle: I18n.t('messages.location_marker_title').replace('{name}', currentMessage.user.name),
      },
    });
  }

  render() {
    const { currentMessage, containerStyle, mapViewStyle } = this.props;
    if (currentMessage.location) {
      return (
        <TouchableOpacity
          style={[containerStyle]}
          onPress={this.openMap}
        >
          <MapView
            style={[styles.mapView, mapViewStyle]}
            region={{
              latitude: currentMessage.location.latitude,
              longitude: currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: currentMessage.location.latitude,
                longitude: currentMessage.location.longitude,
              }}
            />
          </MapView>
        </TouchableOpacity>
      );
    }
    return null;
  }
}

MapViewComponent.propTypes = {
  navigator: T.object,
  currentMessage: T.object,
  containerStyle: T.object,
  mapViewStyle: T.object,
};

export default getContext({ navigator: T.object })(MapViewComponent);
