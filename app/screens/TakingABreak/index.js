import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { commonHocs, commonOperations } from '../../modules/common';
import { authOperations } from '../../store/auth';
import TakingABreak from './TakingABreak';

const enhance = compose(
  connect(null, authOperations),
  commonHocs.mutationRequestGDPRData(),
  withHandlers({
    onSignOut: props => () => {
      Alert.alert(
        'Want to sign out now?',
        'We\'ll be here when you want to come back!',
        [
          { text: 'Cancel' },
          {
            text: 'Log Out',
            onPress: props.signOut,
            style: 'destructive',
          },
        ],
      );
    },
    goToScreen: props => (screen) => () => {
      props.navigator.push(screen);
    },
    onRequestGDPRData: ({ requestGDPRData }) => () =>
      commonOperations.requestGDPRData({ mutate: requestGDPRData }),
  }),
);

export default hoistStatics(enhance)(TakingABreak);
