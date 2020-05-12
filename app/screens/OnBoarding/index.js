import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

import { appOperations } from '../../store/app';
import { authOperations } from '../../store/auth';

import {
  withRefs,
  withLoadingModal,
  withTheme,
} from '../../utils/enhancers';
import { screens } from '../../constants';
import OnBoarding from './OnBoarding';
import s from './style';

const mapStateToProps = ({ auth, user }) => ({
  isLoading: auth.isLoading || user.isLoading,
});

const mapStateToDispatch = {
  ...appOperations,
  ...authOperations,
};

const enhance = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withLoadingModal.stateProp('isLoading'),
  withRefs(),
  withHandlers({
    onSignInWithFacebook: props => () => {
      props.signInWithFacebook();
    },
    onSignInWithGoogle: props => () => {
      props.signInWithGoogle();
    },
    onGoToSignUp: props => () => {
      props.navigator.push(screens.SignUp);
    },
    onGoToSignInWithEmail: props => () => {
      props.navigator.push(screens.SignInWithEmail);
    },
    onOpenPrivacyPolicy: props => () => {
      props.navigator.push(screens.AppInformation, {
        passProps: {
          displayType: 'privacyPolicy',
        },
      });
    },
    onOpenTermOfUse: props => () => {
      props.navigator.push(screens.AppInformation, {
        passProps: {
          displayType: 'termsOfService',
        },
      });
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(OnBoarding);
