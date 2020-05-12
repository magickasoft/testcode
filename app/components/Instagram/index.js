import React from 'react';
import T from 'prop-types';
import InstagramLogin from 'react-native-instagram-login';

import { instagram } from '@services';

const Instagram = ({
  refInstagram,
  ...props
}) => (
  <InstagramLogin
    ref={refInstagram}
    clientId={instagram.getConfig().clientId}
    responseType="code"
    redirectUrl="https://www.communitya.com/api/security/blank-auth?authclient=instagram"
    scopes={['public_content', 'follower_list']}
    // onLoginSuccess={(token) => this.setState({ token })}
    // onLoginFailure={(data) => console.log(data)}
    {...props}
  />
);

Instagram.propTypes = {
  refInstagram: T.oneOfType([T.object, T.func])
};

export default Instagram;
