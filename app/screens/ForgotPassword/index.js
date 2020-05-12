import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { InteractionManager } from 'react-native';

import ForgotPassword from './ForgotPassword';
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
import s from '../SignInWithEmail/style';

const mapStateToProps = ({ auth, user }) => ({
  ...auth,
  isLoading: auth.isLoading || user.isLoading,
});

const mapStateToDispatch = {
  ...authOperations,
};

const enhance = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withLoadingModal.stateProp('isLoading'),
  withSetter('email', '', isEmpty),
  checkReadyForSubmit(['email']),
  withRefs(),
  withErrorHandler(errorsList),
  withHandlers({
    onSubmit: ({ restorePassword, email, navigator }) => () => {
      restorePassword({
        email,
      }, navigator);
    },
    onGoToSignIn: props => () => {
      props.navigator.push(screens.SignInWithEmail);
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

export default hoistStatics(enhance)(ForgotPassword);
