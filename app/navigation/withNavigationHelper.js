import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { Navigation as N } from 'react-native-navigation';
import { withContext, compose } from 'recompose';
import R from 'ramda';

import { screens } from '../constants';
import styles from '../styles';
import RootSpinner from '../components/RootSpinner';

const lazyScreens = {
  [screens.Connects]: true,
  [screens.SpotsList]: true,
  [screens.DialogsList]: true,
  [screens.EventsList]: true,
  [screens.Other]: true,
};

const withNavigation = Component => (
  class Wrapper extends React.Component {
    static propTypes = {
      componentId: T.string,
    };

    constructor(props) {
      super(props);

      this.state = {
        isCurrentScreen: false,
        wasVisible: !lazyScreens[props.componentId],
        // wasVisible: true,
      };

      N.events().bindComponent(this);
    }

    _changeCurrentScreen = (isCurrentScreen) => {
      this.setState({
        ...this.state,
        isCurrentScreen,
        wasVisible: true,
      });
    };

    componentDidAppear = () => {
      this._changeCurrentScreen(true);
    };

    componentDidDisappear = () => {
      this._changeCurrentScreen(false);
    };

    push = (screen, config = {}) => {
      // const id = `${screen}${JSON.stringify(R.pathOr({}, ['passProps'], config))}`;

      const params = {
        component: {
          name: screen,
          // id,
          ...config,
        },
      };

      N.push(this.props.componentId, params);
    };

    pop = async (options) => {
      await N.pop(this.props.componentId, options);
    };

    popToRoot = () => {
      N.popToRoot(this.props.componentId);
    };
    popTo = componentId => {
      N.popTo(componentId);
    };
    mergeOptions = options => {
      N.mergeOptions(this.props.componentId, options);
    };
    mergeOptionsForAll = options => {
      R.forEachObjIndexed(key => {
        N.mergeOptions(key, options);
      }, screens);
    };
    dismissModal = async options => {
      await N.dismissModal(this.props.componentId, options);
    };
    openModal = async (name, config = {}) => {
      await N.showModal({
        stack: {
          children: [{
            component: {
              name,
              ...config,
            },
          }],
        },
      });
    };
    //
    render() {
      return (
        <View style={styles.fillAll}>
          {
            this.state.wasVisible && (
              <Component
                navigator={{
                  // methods
                  push: this.push,
                  pop: this.pop,
                  popToRoot: this.popToRoot,
                  popTo: this.popTo,
                  mergeOptions: this.mergeOptions,
                  mergeOptionsForAll: this.mergeOptionsForAll,
                  dismissModal: this.dismissModal,
                  openModal: this.openModal,

                  // props
                  isCurrentScreen: this.state.isCurrentScreen,
                  wasVisible: this.state.wasVisible,
                }}
                {...this.props}
              />
            )
          }
          {!this.state.wasVisible && <RootSpinner />}
        </View>
      );
    }
  }
);

export default compose(
  withNavigation,
  withContext(
    {
      navigator: T.object,
      componentId: T.string,
    },
    props => ({
      navigator: props.navigator,
      componentId: props.componentId,
    })
  )
);
