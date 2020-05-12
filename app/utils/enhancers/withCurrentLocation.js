import {
  compose,
  withState,
  lifecycle,
} from 'recompose';
import R from 'ramda';

import { geolocation } from '../../services';

const enhance = compose(
  withState('currentLocation', 'setCurrentLocation', null),
  lifecycle({
    componentDidMount() {
      geolocation.onLocation(position => {
        if (!!position && position.coords) {
          const location = R.pick(['longitude', 'latitude'], position.coords);

          this.props.setCurrentLocation(location);
        }
      });
    },
  }),
);

export default enhance;
