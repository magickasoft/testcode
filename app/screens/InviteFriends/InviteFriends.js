import React from 'react';
import T from 'prop-types';

import { Tab, Container, CustomHeader, BackBtn } from '../../components';
import { Sms, Email } from './containers';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const routes = [{
  title: 'SMS',
}, {
  title: 'Mail',
}];

const InviteFriends = ({
  data,
  theme: {
    s,
  },
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{
        text: 'Invite Friends',
      }}
    />
    <Tab
      name="InviteFriends"
      routes={routes}
    >
      <Sms data={data} />
      <Email data={data} />
    </Tab>
  </Container>
);

InviteFriends.propTypes = {
  theme: T.object,
  data: T.array,
};

export default createScreen(InviteFriends, screens.InviteFriends);
