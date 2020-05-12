import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import { HeaderProfileSelector } from '@containers';
import { Container, Tab } from '@components';
import { screens } from '@constants';
import { createScreen } from '@navigation';

import {
  FriendsList,
  IncomingRequests,
  OutgoingRequests,
} from './tabs';

const People = ({
  theme: {
    s,
  },
  navigator,
}) => {
  const routes = [{
    title: I18n.t('people.friends'),
  }, {
    title: I18n.t('people.incoming'),
  }, {
    title: I18n.t('people.outgoing'),
  }];
  return (
    <Container style={s.root}>
      <HeaderProfileSelector
        backButton
        profiles
        containerStyle={s.withoutBorder}
      />
      <Tab
        styleContainerTopBottom={s.tabBar}
        routes={routes}
      >
        <FriendsList navigator={navigator} />
        <IncomingRequests navigator={navigator} />
        <OutgoingRequests navigator={navigator} />
      </Tab>
    </Container>
  );
};

People.propTypes = {
  theme: T.object,
  navigator: T.object,
};

export default createScreen(People, screens.People);
