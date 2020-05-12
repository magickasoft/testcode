import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {
  StatusBar,
  Container,
  Text,
  CopilotStep,
  Badge,
  Icon
} from '@components';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import { Events } from './containers';

// eslint-disable-next-line
const renderIcon = ({ s }) => ({ route, color }) => (
  <Icon
    {...route.icon}
    size={24}
    style={[s.icon, { color }]}
  />
);


// eslint-disable-next-line
const renderLabel = ({ s }) => ({ route, color }) => (
  <CopilotStep stepProps={route.copilot}>
    <Text style={[s.label, { color }]}>{route.title}</Text>
  </CopilotStep>
);

// eslint-disable-next-line
const renderBadge = ({ route }) => <Badge value={route.badge} />;

const EventsList = ({
  theme: { s },
  displayCopilot,
  setIndex,
  index,
  toCreateEvent,
  onGoToMapEvents
}) => {
  const routes = [
    {
      key: 'eventsList',
      title: I18n.t('eventsList'),
      badge: 0,
      copilot: displayCopilot && {
        text: I18n.t('copilot.eventsList'),
        order: 1,
        name: 'eventsList'
      }
    },
    {
      key: 'myEvents',
      title: I18n.t('myEvents'),
      badge: 0,
      copilot: displayCopilot && {
        text: I18n.t('copilot.myEvents'),
        order: 2,
        name: 'myEvents'
      }
    }
  ];

  const renderTabBar = (props) => (
    <View style={s.row}>
      <View style={[s.tabBtn, s.left]}>
        <Icon
          onPress={onGoToMapEvents}
          name="mapPin"
          size={38}
          color="#0e56e8"
          style={s.icon}
        />
      </View>
      <TabBar
        {...props}
        activeColor="#0e56e8"
        inactiveColor="#c6cad3"
        scrollEnabled
        // renderIcon={renderIcon({ s })}
        renderBadge={renderBadge}
        renderLabel={renderLabel({ s })}
        indicatorStyle={s.indicator}
        style={s.tabBar}
        tabStyle={s.tab}
      />
      <View style={[s.tabBtn, s.right]}>
        <Icon
          onPress={toCreateEvent}
          name="addCart"
          size={38}
          color="#0e56e8"
          style={s.icon}
        />
      </View>
    </View>
  );

  const renderScene = SceneMap({
    eventsList: (props) => <Events {...props} />,
    myEvents: (props) => <Events isMyEvents {...props} />
  });

  return (
    <Container>
      <StatusBar />
      <TabView
        lazy
        removeClippedSubviews
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </Container>
  );
};

EventsList.propTypes = {
  displayCopilot: T.bool,
  index: T.number,
  onGoToMapEvents: T.func,
  setIndex: T.func,
  theme: T.object,
  toCreateEvent: T.func
};

export default createScreen(EventsList, screens.EventsList);
