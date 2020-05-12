/* eslint-disable */
import React from 'react';
import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';
import { permissions } from '../../services';
import LocationSettings from './LocationSettings';
import {
  withTheme,
} from '../../utils/enhancers';
// import { screens } from '../../constants'
import s from './style';

const enhance = compose(
  withState('isLocationWork', 'setLocationWork', false),
  withHandlers({
    onToggleLocationWork: props => () => {

    },
    onGoToSignSettings: props => async () => {
      await permissions.openSettings();
    },
  }),
  withTheme(s),
  lifecycle({
    componentDidMount(){}
  })
);

export default hoistStatics(enhance)(LocationSettings);
