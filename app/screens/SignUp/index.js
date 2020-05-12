/* eslint-disable */
import React from 'react';
import {
  compose,
  hoistStatics,
  withHandlers,
  defaultProps,
  withProps,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { InteractionManager } from 'react-native';

import SignUp from './SignUp';
import { authOperations } from '../../store/auth';
import {
  withSetter,
  withErrorHandler,
  checkReadyForSubmit,
  withRefs,
  withLoadingModal,
  withTheme,
} from '../../utils/enhancers';
import { errorsList, screens } from '../../constants'
import {
  isEmpty,
} from "../../utils/helpers/stringValidator";
import { userOperations } from '../../store/user'
import s from '../SignInWithEmail/style';

const mapStateToProps = ({ error, auth, user }) => ({
  ...auth,
  isLoading: auth.isLoading || user.isLoading,
});

const mapStateToDispatch = {
  ...authOperations,
  ...userOperations,
};

const enhance = compose(
  defaultProps({
    isLink: false,
  }),
  connect(mapStateToProps, mapStateToDispatch),
  withLoadingModal.stateProp('isLoading'),
  withSetter('email', '', isEmpty),
  withSetter('password', '', isEmpty),
  checkReadyForSubmit(['email', 'password']),
  withRefs(),
  withErrorHandler(errorsList),
  withHandlers({
    onSignUp: ({ signUpWithEmail, email, password, navigator }) => () => {
      signUpWithEmail({
        email,
        password,
        rules_agree: true,
      }, navigator);
    },
    onLink: ({ linkEmail, email, password, navigator }) => () => {
      linkEmail({
        email,
        password,
      }, navigator);
    },
    onGoToSignIn: props => () => {
      props.navigator.push(screens.SignInWithEmail)
    },
  }),
  withProps(props => ({
    onSubmit: props.isLink ? props.onLink : props.onSignUp,
  })),
  withTheme(s),
  lifecycle({
    componentDidMount(){
      InteractionManager.runAfterInteractions(() => {
          this.props.getRef('email').focus()
      });
    }
  })
);

export default hoistStatics(enhance)(SignUp);
