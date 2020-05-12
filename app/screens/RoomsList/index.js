import {
  compose,
  hoistStatics,
  withState,
  withHandlers,
} from 'recompose';
import { InteractionManager } from 'react-native';

import RoomsList from './RoomsList';
import withToggle from '../../utils/enhancers/withToggle';
import { screens } from '../../constants';

const INIT_FILTERS = {
  offersDeals: false,
  virtualBusiness: false,
  category1: false,
  category2: false,
  freelancerFriendly: false,
  sortBy: 'N of Reviews',
  ownership: 'Score',
  slider: 0.2,
  category: [1, 2, 3, 4, 5, 6, 7, 8],
};

const enhance = compose(
  withState('filters', 'setFilters', INIT_FILTERS),
  withState('viewRef', 'setViewRef', null),
  withToggle('isVisibleFilter', 'toggleVisibleFilter', 'onToggleVisibleFilter', false),
  withHandlers({
    onChangeViewRef: props => ref => {
      ref && InteractionManager.runAfterInteractions(() => {
        setTimeout(() => props.setViewRef(ref), 100);
      });
    },
    onGoToMap: props => () => {
      props.navigator.push(screens.Map);
    },
  }),
);

export default hoistStatics(enhance)(RoomsList);
