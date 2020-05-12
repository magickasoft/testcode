import React from 'react';
import {
  branch,
  compose,
  hoistStatics,
  withProps,
  withHandlers,
  defaultProps,
  withState
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';

import MapScreen from './MapScreen';
import { placeHocs } from '../../modules/place';
import { withSetter, withTheme, withCurrentLocation, withToggle } from '../../utils/enhancers';
import { screens } from '../../constants';
import s from './style';
import { persistOperations } from '../../store/persist';

const defValues = {
  loading: false,
  error: null
};

const mapStateToProps = ({ persist }) => ({
  initFilters: persist.initFilters.map,
  filters: persist.filters.map
});

const enhance = compose(
  connect(mapStateToProps, persistOperations),
  defaultProps({
    limit: 150
  }),
  branch(R.prop('id'), placeHocs.queryGetPlace()),
  withSetter('search'),
  withToggle('isVisibleFilterModal', 'setVisibleFilterModal', 'toggleVisibleFilterModal', false),
  withState('drawerRef', 'setDrawerRef', React.createRef()),
  withCurrentLocation,
  withProps(({ getPlace = defValues }) => ({
    initialLocation: R.pathOr(null, ['place', 'location'], getPlace)
  })),
  placeHocs.queryGetPlaceList({ fetchPolicy: 'network-only' }),
  withProps(({ getPlace = defValues, getPlaceList = defValues }) => ({
    isLoading: getPlace.loading || getPlaceList.loading,
    error: getPlace.error || getPlaceList.error,
    placesLocations: R.pathOr([], ['placeList', 'places'], getPlaceList)
  })),
  withHandlers({
    onGoToReview: (props) => (id) => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id }
      });
    },
    onChangeFilters: (props) => async (filters) => {
      props.toggleVisibleFilterModal();
      props.persistMergeFilter({ map: filters });
    },
    onOpenFilter: (props) => () => {
      props.toggleVisibleFilterModal();
    }
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(MapScreen);
