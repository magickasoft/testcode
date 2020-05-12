import { Navigation } from 'react-native-navigation';
import theme from '../services/theme';

const animations = {
  setRoot: {
    alpha: {
      from: 0,
      to: 1,
      duration: 200,
    },
  },
  _push: {
    topBar: {
      id: 'TEST',
      alpha: {
        from: 0,
        to: 1,
        duration: 200,
        interpolation: 'accelerate',
      },
    },
    bottomTabs: {
      y: {
        from: 1000,
        to: 0,
        duration: 200,
        interpolation: 'decelerate',
      },
      alpha: {
        from: 0,
        to: 1,
        duration: 200,
        interpolation: 'decelerate',
      },
    },
    content: {
      y: {
        from: 1000,
        to: 0,
        duration: 200,
        interpolation: 'accelerate',
      },
      alpha: {
        from: 0,
        to: 1,
        duration: 200,
        interpolation: 'accelerate',
      },
    },
  },
  _pop: {
    topBar: {
      id: 'topBar',
      alpha: {
        from: 1,
        to: 0,
        duration: 200,
        interpolation: 'accelerate',
      },
    },
    bottomTabs: {
      y: {
        from: 0,
        to: 100,
        duration: 200,
        interpolation: 'decelerate',
      },
      alpha: {
        from: 1,
        to: 0,
        duration: 200,
        interpolation: 'decelerate',
      },
    },
    content: {
      y: {
        from: 0,
        to: 1000,
        duration: 200,
        interpolation: 'decelerate',
      },
      alpha: {
        from: 1,
        to: 0,
        duration: 200,
        interpolation: 'decelerate',
      },
    },
  },
};

const setDefaultOptions = () => {
  const colors = theme.get();

  Navigation.setDefaultOptions({
    bottomTab: {
      iconInsets: { top: 5, bottom: -5 },
      iconColor: colors.textInert,
      textColor: colors.textInert,
      selectedIconColor: colors.activePrimary,
      selectedTextColor: colors.activePrimary,
      fontSize: 10,
      selectedFontSize: 10,
      fontFamily: 'Roboto-Regular',
    },
    _animations: {
      push: {
        waitForRender: false,
      },
      pop: {
        waitForRender: true,
      },
    },
    animations,
  });
};

export default setDefaultOptions;
