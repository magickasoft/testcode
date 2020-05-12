import T from 'prop-types';
import { branch, compose, getContext, hoistStatics, withHandlers, withProps } from 'recompose';
import R from 'ramda';
import { withTheme } from '@utils/enhancers';
import { myProfileHocs } from '@modules/myProfile';
import { eventsHocs, eventsOperations } from '@modules/events';
import { screens } from '@constants';
import Events from './Events';
import s from './style';

const enhance = compose(
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  withProps((props) => ({
    isMyEvents: !!props.isMyEvents
  })),
  getContext({ navigator: T.object }),
  branch(
    R.propEq('isMyEvents', true),
    compose(
      eventsHocs.queryGetMyEvents({ fetchPolicy: 'cache-and-network' }),
      withProps(({ myEvents }) => R.pick(
        ['myEvents', 'loading', 'error', 'fetchMore', 'refetch', 'networkStatus'],
        myEvents
      )),
      withProps(({ myEvents, networkStatus }) => ({
        data: R.pathOr([], ['events'], myEvents),
        totalCount: R.pathOr([], ['totalCount'], myEvents),
        loadingRefetch: networkStatus === 4
      })),
    ),
    compose(
      eventsHocs.queryGetEventsList({ fetchPolicy: 'cache-and-network' }),
      withProps(({ getEventsList }) => R.pick(
        ['getEventsList', 'loading', 'error', 'fetchMore', 'refetch', 'networkStatus'],
        getEventsList
      )),
      withProps(({ getEventsList, networkStatus }) => ({
        data: R.pathOr([], ['events'], getEventsList),
        totalCount: R.pathOr([], ['totalCount'], getEventsList),
        loadingRefetch: networkStatus === 4
      })),
    ),
  ),
  withHandlers({
    onEndReached: (props) => () => {
      const dataLength = props.data.length;
      if (props.loading || props.totalCount === dataLength) return;
      eventsOperations.fetchMoreEvents({
        ...props, type: props.isMyEvents ? 'myEvents' : 'getEventsList',
      });
    },
    onRefresh: (props) => () => {
      props.refetch();
    },
    toEvent: (props) => (id) => () => {
      if (id) {
        props.navigator.push(screens.Event, {
          passProps: { eventId: id }
        });
      }
    },
    toCreateEvent: (props) => () => {
      props.navigator.push(screens.CreateEditEvent);
    }
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(Events);
