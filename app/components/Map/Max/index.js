/* eslint-disable */
import {
  compose,
  withState,
  defaultProps,
  withHandlers,
  lifecycle,
  withProps,
} from 'recompose';
import R from 'ramda';

import ComponentView from './ComponentView';
import { geolocation } from '../../../services';
import withLoadingMap from "../withLoadingMap";

const enhance = compose(
  withLoadingMap,
  defaultProps({
    initCurrentPosition: false,
    isLoading: false,
  }),
  withState('_currentLocation', '_setCurrentLocation', null),
  withHandlers({
    _onGetCurrentLocation: props => async () => {
      const position = await geolocation.getCurrentPosition();

      if(position && position.coords) {
        const location = R.pick(['longitude', 'latitude'], position.coords);
        props._setCurrentLocation(location);
      }

      geolocation.onLocation(position => {
        if(position && position.coords) {
          const location = R.pick(['longitude', 'latitude'], position.coords);
          props._setCurrentLocation(location);
        }
      })
    }
  }),
  withProps(({
    initCurrentPosition, _currentLocation, initialRegion, _isLoadingUI, isLoading
  }) => ({
    _initialRegion: initCurrentPosition ? _currentLocation : initialRegion,
    _isLoading: _isLoadingUI || isLoading
  })),
  lifecycle({
    componentDidMount() {
      this.props._onGetCurrentLocation();
    },
  }),
);

export default enhance(ComponentView);
