import {
  compose,
  withProps,
  defaultProps,
  withState,
  lifecycle,
  withHandlers
} from 'recompose';
import R from 'ramda';

import { dimensions } from '@styles';
import ComponentView from './ComponentView';
import { geolocation } from '../../../services';
import withLoadingMap from '../withLoadingMap';

const enhance = compose(
  withLoadingMap,
  defaultProps({
    isLoading: false
  }),
  withProps(({ isLoading }) => ({
    _isLoading: isLoading
  })),
  withState('refMap', 'setRefMap', null),
  withState('_currentLocation', '_setCurrentLocation', null),
  withHandlers({
    onDirectionReady: ({ refMap }) => (result) => {
      console.log(`Distance: ${result.distance} km`);
      console.log(`Duration: ${result.duration} min.`);

      refMap && refMap.fitToCoordinates(result.coordinates, {
        edgePadding: {
          right: (dimensions.windowWidth / 20),
          bottom: (dimensions.windowHeight / 20),
          left: (dimensions.windowWidth / 20),
          top: (dimensions.windowHeight / 20)
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      const { _setCurrentLocation } = this.props;
      const position = await geolocation.getCurrentPosition();

      if (position && position.coords) {
        const location = R.pick(['longitude', 'latitude'], position.coords);
        _setCurrentLocation(location);
      }
    }
  }),
);

export default enhance(ComponentView);
