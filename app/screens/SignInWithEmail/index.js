import {
  compose,
  hoistStatics, lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { InteractionManager } from 'react-native';

import SignInWithEmail from './SignInWithEmail';
import { appOperations } from '../../store/app';
import { authOperations } from '../../store/auth';

import {
  withSetter,
  withErrorHandler,
  checkReadyForSubmit,
  withRefs,
  withLoadingModal,
  withTheme,
} from '../../utils/enhancers';
import { errorsList, screens } from '../../constants';
import {
  isEmpty,
} from '../../utils/helpers/stringValidator';
import { errOperations } from '../../store/error';
import s from './style';

const mapStateToProps = ({ error, auth, user }) => ({
  error: error.auth || error.user,
  isLoading: auth.isLoading || user.isLoading,
});

const mapStateToDispatch = {
  ...appOperations,
  ...authOperations,
  ...errOperations,
};

const enhance = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withLoadingModal.stateProp('isLoading'),
  withSetter('email', '', isEmpty),
  withSetter('password', '', isEmpty, null, true),
  checkReadyForSubmit(['email', 'password']),
  withRefs(),
  withErrorHandler(errorsList),
  withHandlers({
    onSubmit: ({
      signInWithEmailAndPassword,
      email,
      password,
      navigator,
    }) => () => {
      signInWithEmailAndPassword(email, password, navigator);
    },
    onForgotPassword: props => () => {
      props.navigator.push(screens.ForgotPassword);
    },
    onGoToSignUp: props => () => {
      props.navigator.push(screens.SignUp);
    },
  }),
  withTheme(s),
  lifecycle({
    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.props.getRef('email').focus();
      });
    },
  })
);

export default hoistStatics(enhance)(SignInWithEmail);
