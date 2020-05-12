import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import R from 'ramda';

import Profile from './Profile';
import { screens } from '../../../../constants';
import { colors } from '../../../../styles';
import { withSetter } from '../../../../utils/enhancers';
import { myProfileHocs } from '../../../../modules/myProfile';

const mapStateToProps = ({ user }) => ({
  idProfile: user.idProfile,
});

const enhance = compose(
  connect(mapStateToProps),
  withSetter('galleryIndex', null),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  withProps(props => ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
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
        passProps: { isLink: true },
      });
    },
  }),
);

export default hoistStatics(enhance)(Profile);
