import I18n from 'react-native-i18n';

import { tokens, theme } from '@services';

import { IconTab } from '../../components/IconVector';
import { screens, tokens as constTokens } from '../../constants';
import { createNavigation } from '../utils';
import setDefaultOptions from '../setDefaultOptions';


const signIn = ({
  tabConfigs = {},
  currentTabIndex = 1,
} = {}) => {
  const func = async () => {
    const profileId = await tokens.get(constTokens.ID_PROFILE);
    const colors = theme.get();

    setDefaultOptions();

    const options = {
      statusBar: {
        visible: false,
        style: 'dark',
      },
      sideMenu: {
        right: {
          width: 200,
          shouldStretchDrawer: false,
          animationVelocity: 1500,
        },
        animationType: 'parallax',
      },
      bottomTabs: {
        currentTabId: screens.SpotsList,
        testID: screens.SpotsList,
        bottomTabs: {
          visible: true,
          animate: false,
          titleDisplayMode: 'alwaysShow',
          currentTabIndex,
          backgroundColor: colors.bottomTabs,
        },
      },
    };

    const [
      connects,
      spots,
      messages,
      events,
      settings,
    ] = await Promise.all([
      IconTab.getImageSource('home', 28),
      IconTab.getImageSource('pinSqr', 28),
      IconTab.getImageSource('comment', 28),
      IconTab.getImageSource('event', 28),
      IconTab.getImageSource('settings', 28),
    ]);

    const dialogs = {
      dialogs: [{
        name: screens.DialogsList,
        icon: messages,
        text: I18n.t('tabs.chat'),
      }],
    };

    const people = {
      people: [{
        name: screens.People,
        icon: messages,
        text: I18n.t('tabs.people'),
      }],
    };

    const tabs = {
      connects: [{
        name: screens.Connects,
        icon: connects,
        text: I18n.t('tabs.activity'),
      }],
      spots: [{
        name: screens.SpotsList,
        icon: spots,
        text: I18n.t('tabs.spots'),
      }],
      ...[5, 907].includes(profileId) ? people : dialogs,
      events: [{
        name: screens.EventsList,
        icon: events,
        text: I18n.t('tabs.events'),
      }],
      other: [{
        name: screens.Other,
        icon: settings,
        text: I18n.t('tabs.settings'),
      }],
    };

    Object.keys(tabConfigs).forEach(key => {
      const tab = tabs[key];
      if (tab) {
        tab.push(tabConfigs[key]);
      }
    });

    const sideMenu = {
      right: {
        component: {
          id: screens.Drawer,
          name: screens.Drawer,
        },
      },
    };

    createNavigation(Object.values(tabs), sideMenu, options);
  };

  func().done();
};

export default signIn;
