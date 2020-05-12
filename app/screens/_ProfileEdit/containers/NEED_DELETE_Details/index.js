/* eslint-disable */
import {
    compose,
    hoistStatics,
    withHandlers,
} from 'recompose';
import ViewScreen from './ViewScreen';
import { screens } from '../../../../constants';
import { connect } from "react-redux";
import { userOperations } from "../../../../store/user";
import { withLoadingModal,  } from "../../../../utils/enhancers";
import { errOperations } from "../../../../store/error";
import { colors } from '../../../../styles'
import withAlert from '../../../../utils/enhancers/withAlert'

const mapStateToProps = ({ user, error }) => ({
  isLoading: user.isLoading,
  error: error.user,
  messageLinked: user.messageLinked,
});

const enhance = compose(
  connect(mapStateToProps, { ...errOperations, ...userOperations }),
  withLoadingModal.stateProp('isLoading'),
  withAlert(({
    error, errResetAll, messageLinked, userSetMessageLinked,
  }) => ({
    isVisible: messageLinked,
    message: messageLinked,
    onChangeVisible: userSetMessageLinked(null),
    delay: 600,
    type: 'success',
  })),
  withHandlers({
    onGoToReview: props => () => {
      props.navigator.push({
        screen: screens.SpotReview,
        title: 'title',
        backButtonTitle: '',
      });
    },
    onLinkFacebook: props => () => props.linkFacebook(),
    onLinkGoogle: props => () => props.linkGoogle(),
    onGoToSignUpEmail: props => () => {
      props.navigator.push(screens.SignUp, {
        navBarTextColor: colors.black,
        navBarButtonColor: colors.black,
        title: 'Link email',
        passProps: { isLink: true }
      });
    },
  }),
);

export default hoistStatics(enhance)(ViewScreen);
