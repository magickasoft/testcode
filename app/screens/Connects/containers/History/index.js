import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  getContext
} from 'recompose';
import R from 'ramda';
import T from 'prop-types';

import { placeHocs, placeOperations } from '@modules/place';
import { screens, ckeckIn } from '@constants';

import History from './History';

const enhance = compose(
  getContext({ navigator: T.object }),
  placeHocs.mutationSetStayHistory(),
  placeHocs.queryPlaceHistory({ fetchPolicy: 'network-only' }),
  withProps(({ placeHistory }) => ({
    history: (R.pathOr([], ['placeVisitsHistory'], placeHistory))
      .map((el, index) => ({ ...el, index })),
    isLoading: {
      history: R.pathOr(false, ['loading'], placeHistory),
      historyRefetch: placeHistory.networkStatus === 4
    }
  })),
  withHandlers({
    onRefresh: (props) => () => {
      props.placeHistory.refetch();
    },
    onCheckIn: ({ setStayHistory }) => (item) => {
      placeOperations.setStayHistory({
        mutate: setStayHistory,
        variables: {
          id: R.prop('place_id', item),
          date_visit: R.prop('date', item),
          value: ckeckIn.I_WAS_HERE
        },
        item
      });
    },
    onHideItem: (props) => (item) => {
      props.navigator.openModal(screens.ModalHideLocationItem, {
        passProps: { item }
      });
    }
  }),
);

export default hoistStatics(enhance)(History);
