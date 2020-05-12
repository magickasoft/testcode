import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import { permission as resPermission } from '@constants';
import { geolocation, permissions } from '@services';
import { withTheme } from '@utils/enhancers';

import AllowLocation from './AllowLocation';
import { appOperations } from '../../store/app';
import s from './style';

const enhance = compose(
  connect(null, appOperations),
  withHandlers({
    back: props => async () => {
      props.navigator.dismissModal();

      if (props.initApp) {
        props.appSignedInInit(true);
      }
    },
  }),
  withHandlers({
    onDone: props => async () => { // eslint-disable-line consistent-return
      try {
        const res = await permissions.ask('location', { type: 'always' });

        if (res !== resPermission.authorized) {
          return null;
        }

        await geolocation.start();
      } catch (e) {
        //
      }

      props.back();
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(AllowLocation);
