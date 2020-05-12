/* eslint-disable */
import {
  compose,
  getContext,
  withHandlers,
} from 'recompose';
import T from 'prop-types';
import { connect } from 'react-redux';

import { screens } from '../../constants';
import Avatar from './Avatar';

const mapStateToProps = ({ error, auth, user }) => ({
  currentIdProfile: user.idProfile,
});

const enhance = compose(
  connect(mapStateToProps),
  getContext({ navigator: T.object }),
  withHandlers({
    onPress: ({ onPress, id, navigator, currentIdProfile}) => () => {
      if(!onPress && id) {
        navigator.push(
          currentIdProfile === id ? screens.MyProfile : screens.Profile,
          { passProps: { id }}
          );
      } else {
        onPress && onPress();
      }
    },
  }),
);

export default enhance(Avatar);
