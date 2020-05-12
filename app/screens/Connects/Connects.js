import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { History, Visitors } from './containers';
import { StatusBar, Container, Icon, Text, Coins, CopilotStep, Badge } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const Connects = ({
  theme,
  displayCopilot,
  setIndex,
  index,
  balance = 0
}) => {
  const routes = [
    {
      key: 'timeline',
      title: I18n.t('timeline'),
      icon: { name: 'clockBack' },
      badge: 0,
      copilot: displayCopilot && {
        text: I18n.t('copilot.visited_places'),
        order: 2,
        name: 'timeline'
      }
    },
    {
      key: 'views',
      title: I18n.t('views'),
      icon: { name: 'eye' },
      badge: 0,
      copilot: displayCopilot && {
        text: I18n.t('copilot.profile_visitors'),
        order: 1,
        name: 'views'
      }
    }
  ];
  // eslint-disable-next-line react/prop-types
  const renderIcon = ({ route, color }) => (
    <Icon {...route.icon} size={30} color={color} style={theme.s.icon} />
  );

  // eslint-disable-next-line react/prop-types
  const renderLabel = ({ route, color }) => (
    <CopilotStep stepProps={route.copilot}>
      <Text style={[theme.s.label, { color }]}>{route.title}</Text>
    </CopilotStep>
  );

  // eslint-disable-next-line react/prop-types
  const renderBadge = ({ route }) => <Badge value={route.badge} />;

  const renderTabBar = (props) => (
    <View style={theme.s.row}>
      <TabBar
        {...props}
        activeColor="#0e56e8"
        inactiveColor="#c6cad3"
        scrollEnabled
        renderBadge={renderBadge}
        renderIcon={renderIcon}
        renderLabel={renderLabel}
        indicatorStyle={theme.s.indicatorStyle}
        style={theme.s.tabBarStyle}
        tabStyle={theme.s.tabStyle}
      />
      <View style={theme.s.balance}>
        <CopilotStep
          stepProps={displayCopilot && {
            text: I18n.t('copilot.coins'),
            order: 3,
            name: 'coin'
          }}
        >
          <Coins balance={balance} />
        </CopilotStep>
      </View>
    </View>
  );
  const renderScene = SceneMap({ timeline: History, views: Visitors });

  return (
    <Container>
      <StatusBar />
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </Container>
  );
};

Connects.propTypes = {
  theme: T.object,
  displayCopilot: T.bool,
  setIndex: T.func,
  index: T.number,
  balance: T.number,
};

export default createScreen(Connects, screens.Connects);
