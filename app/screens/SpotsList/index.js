import {
  compose,
  hoistStatics,
  withProps,
  withHandlers,
  lifecycle,
  withState
} from 'recompose';
import { InteractionManager } from 'react-native';
import R from 'ramda';
import { connect } from 'react-redux';
import { setBadge } from '@navigation';
import SpotsList from './SpotsList';
import { screens } from '../../constants';
import {
  withSetter,
  withToggle,
  withTheme,
  withCopilot
} from '../../utils/enhancers';
import s from './style';
import { withAnimationHeader } from '../../utils/animation';
import { messagesHocs } from '../../modules/messages';
import { NAV_BAR_HEIGHT } from './constants';
import { persistOperations } from '../../store/persist';
import link from '../../utils/link';

const mapStateToProps = ({ persist }) => ({
  initFilters: persist.initFilters.spotList,
  filters: persist.filters.spotList
});

const enhance = compose(
  messagesHocs.queryGetDialogs({ fetchPolicy: 'cache-and-network' }),
  connect(mapStateToProps, persistOperations),
  withState('viewRef', 'setViewRef', null),
  withToggle('isVisibleFilterModal', 'setVisibleFilterModal', 'toggleVisibleFilterModal', false),
  withToggle('isVisibleModal', 'setVisibleModal', 'toggleVisibleModal', false),
  withSetter('search'),
  withProps((props) => ({
    dialogs: R.pathOr([], ['getDialogs', 'dialogList'], props),
    loading: R.path(['getDialogs', 'loading'], props)
  })),
  withHandlers({
    onChangeViewRef: (props) => (ref) => {
      if (ref) {
        InteractionManager.runAfterInteractions(() => {
          setTimeout(() => props.setViewRef(ref), 100);
        });
      }
    },
    onContactAdmins: () => () => {
      link.openEmailWithPhoneInfo();
    },
    onSuggestAFeature: () => () => {
      link.openEmailWithPhoneInfo();
    },
    onGoToAddBusiness: (props) => (type) => () => {
      props.navigator.push(screens.AddBusiness, {
        passProps: { type }
      });
      props.toggleVisibleModal();
    },
    onGoToMap: ({ navigator }) => () => {
      navigator.push(screens.Map);
    },
    onChangeFilters: (props) => (filters) => {
      props.toggleVisibleFilterModal();
      props.persistMergeFilter({
        spotList: filters
      });
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { loading, dialogs } = this.props;
      if (prevProps.loading !== loading && !loading) {
        setBadge(screens.DialogsList, dialogs);
      }
    }
  }),
  withTheme(s),
  withAnimationHeader(NAV_BAR_HEIGHT),
  withCopilot(screens.SpotsList),
);

export default hoistStatics(enhance)(SpotsList);
