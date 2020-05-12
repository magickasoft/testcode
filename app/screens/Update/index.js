import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';

import Update from './Update';
import codePush, { messages } from '../../services/codePush';
import { appOperations } from '../../store/app';
import { withToggle } from '../../utils/enhancers';

const enhance = compose(
  connect(null, (dispatch) => ({
    appInit: value => dispatch(appOperations.appInit(value)),
  })),
  withToggle('restartAllowed', 'setRestartAllowed', 'toggleAllowRestart', true),
  withState('progress', 'setProgress', null),
  withState('syncMessage', 'setSyncMessage', null),
  withState('error', 'setError', null),

  withHandlers({
    statusDidChange: props => async syncStatus => {
      props.setSyncMessage(messages[syncStatus]);
    },
    downloadDidProgress: props => progress => {
      props.setProgress(progress);
    },
    onSkip: props => () => {
      props.appInit(true);
    },
  }),
  withHandlers({
    syncImmediate: props => () => {
      codePush.syncImmediate(
        props.statusDidChange,
        props.downloadDidProgress
      );
    },
    sync: props => () => {
      codePush.sync(
        props.statusDidChange,
        props.downloadDidProgress
      );
    },
  }),
  withPropsOnChange(['restartAllowed'], props => {
    codePush.toggleAllowRestart(props.restartAllowed);
  }),
);

export default hoistStatics(enhance)(Update);

