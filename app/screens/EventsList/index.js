import { compose, hoistStatics, withState, withHandlers } from 'recompose';

import EventsList from './EventsList';
import { withCopilot, withTheme } from '../../utils/enhancers';
import { screens } from '../../constants';
import s from './style';

const enhance = compose(
  withState('index', 'setIndex', 0),
  withHandlers({
    onGoToMapEvents: (props) => () => {
      props.navigator.push(screens.MapEvents, {
        passProps: {}
      });
    },
    toCreateEvent: (props) => () => {
      props.navigator.push(screens.CreateEditEvent);
    }
  }),
  withTheme(s),
  withCopilot(screens.EventsList),
);

export default hoistStatics(enhance)(EventsList);
