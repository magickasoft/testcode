import R from 'ramda';
import { Navigation } from 'react-native-navigation';
import { pure, hoistStatics } from 'recompose';

import screensConfig from './screenConfig';

const registerComponent = (screenName, component, wrap) => {
  Navigation.registerComponent(screenName, () => wrap(component));
};

export const registerComponents = (routes, config) => {
  const wrap = R.pathOr((arg) => arg, ['wrapper'], config);
  new Map(routes).forEach((value, key) => registerComponent(key, value, wrap));
};

export const createScreen = (Screen, screenName) => {
  Screen.options = screensConfig[screenName]; // eslint-disable-line

  return hoistStatics(pure)(Screen);
};


export const showModal = (name, params = {}) => Navigation.showModal({
  stack: {
    children: [{
      component: {
        name,
        ...params
      }
    }]
  }
});

const createChild = (el) => ({
  component: {
    id: el.name,
    ...el
  }
});

export const createNavigation = (children, sideMenu, options) => {
  Navigation.setRoot({
    root: {
      // sideMenu: {
      //   id: 'sideMenu',
      //   center: {
      bottomTabs: {
        children: children.map((el) => ({
          stack: {
            children:
              R.is(Array, el) ? R.map(createChild, el) : [createChild(el)],
            options: {
              bottomTab: {
                icon: R.is(Array, el) ? el[0].icon : el.icon,
                testID: R.is(Array, el) ? el[0].name : el.name,
                text: R.is(Array, el) ? el[0].text : el.text,
                badge: R.is(Array, el) ? el[0].badge : el.badge
              }
            }
          }
        })),
        options: options.bottomTabs
      }
      //   },
      //   ...sideMenu,
      //   options,
      // },
      //
    }
  });
};

export const mergeOptions = (screenName, options) => {
  Navigation.mergeOptions(screenName, { ...options });
};

export const setBadge = (screenName, dialogs = []) => {
  const unreadDialogs = dialogs.filter((obj) => obj.unreadMessages > 0).length;
  mergeOptions(screenName, {
    bottomTab: { badge: (unreadDialogs > 0 ? unreadDialogs : '').toString() }
  });
};
