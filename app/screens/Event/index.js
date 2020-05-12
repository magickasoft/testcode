import {
  compose,
  hoistStatics,
  withProps,
  branch,
  withHandlers,
  pure,
  withState,
  withPropsOnChange,
  lifecycle
} from 'recompose';
import { InteractionManager } from 'react-native';
import R from 'ramda';
import { withAnimation, withTheme, withToggle } from '@utils/enhancers';
import { parallax, screens } from '@constants';

import { eventsHocs, eventsOperations } from '../../modules/events';
import { myProfileHocs } from '../../modules/myProfile';
import s from './style';
import Event from './Event';

const enhance = compose(
  eventsHocs.queryGetEvent({ fetchPolicy: 'cache-and-network' }),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  eventsHocs.mutationChangeEventGoingStatus(),
  withState('calendars', 'setCalendars', []),
  withState('flatListRef', 'setFlatListRef', null),
  withState('viewRef', 'setViewRef', null),
  withState('isLoadToId', 'setLoadToId', false),
  withToggle('isOptionsModalVisible', 'setVisibleOptionsModal', 'toggleVisibleOptionsModal', false),
  withProps((props) => ({
    data: R.pathOr({}, ['getEvent', 'getEvent'], props),
    myProfile: R.path(['currentProfile', 'currentProfile'], props),
    loading: {
      data: R.path(['getEvent', 'loading'], props),
      myProfile: R.path(['currentProfile', 'loading'], props)
    }
  })),
  withPropsOnChange(
    ['loading'],
    ({
      loading, loadToId, data, flatListRef, setLoadToId, isLoadToId
    }) => {
      if (!loading && loadToId && !R.isEmpty(data) && !isLoadToId) {
        InteractionManager.runAfterInteractions(() => {
          if (flatListRef && flatListRef.getNode()) {
            flatListRef.getNode().scrollToIndex({
              index: data.length - 1,
              viewOffset: -parallax.ITEM_HEIGHT / 2
            });
          }
          setLoadToId(true);
        });
      }
    }
  ),
  withHandlers({
    onGoToMapEvents: ({ data: { id: eventId, category_id: categoryId }, navigator }) => () => {
      navigator.push(screens.MapEvents, {
        passProps: { eventId, categoryId }
      });
    },
    onChangeViewRef: (props) => (ref) => {
      if (ref) {
        InteractionManager.runAfterInteractions(() => {
          setTimeout(() => props.setViewRef(ref), 100);
        });
      }
    },
    onGoToProfile: (props) => (id) => {
      if (props.myProfile.id !== id) {
        props.navigator.push(screens.Profile, {
          passProps: {
            id
          }
        });
      }
    },
    onChangeEventGoingStatus: (props) => (value) => () => {
      eventsOperations.updateEvent({
        mutate: props.changeEventGoingStatus,
        variables: {
          eventId: props.data.id,
          status: value
        }
      });
    }
  }),
  withProps(({ myProfile, data: { profile = { } } = { profile: { } } }) => ({
    isMyEvent: myProfile.id === profile.id
  })),
  branch(
    R.prop('isMyEvent'),
    compose(
      eventsHocs.mutationDeleteEvent(),
      withHandlers({
        onOpenEditEvent: (props) => () => {
          props.navigator.push(screens.CreateEditEvent, {
            passProps: { eventId: props.data.id }
          });
        },
        onDeleteEvent: (props) => () => {
          eventsOperations.deleteEvent({
            mutate: props.deleteEvent,
            variables: {
              id: props.data.id
            },
            navigator: props.navigator
          });
        }
      }),
    )
  ),
  withTheme(s),
  withAnimation(),
  pure,
  lifecycle({
    componentDidUpdate(prevProps) {
      const { loading, flatListRef } = this.props;
      if (prevProps.loading.data !== loading.data && !loading.data) {
        const scroll = flatListRef && flatListRef.getNode();
        if (scroll) {
          scroll.scrollToOffset({ offset: 1, animated: true });
          this.forceUpdate();
        }
      }
    }
  })
);

export default hoistStatics(enhance)(Event);
