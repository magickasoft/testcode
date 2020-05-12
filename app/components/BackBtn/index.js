import React, { Component } from 'react';
import T from 'prop-types';
import { compose, getContext, hoistStatics } from 'recompose';
import { StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Icon } from 'components';
import I18n from 'react-native-i18n';
import { platform } from '@constants';

const touchableArea = { top: 8, right: 8, bottom: 8, left: 8 };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  text: {
    fontSize: 17
  }
});

class Back extends Component {
  static propTypes = {
    backAction: T.func,
    backType: T.string,
    color: T.string,
    containerStyle: T.oneOfType([T.array, T.object]),
    handlePress: T.func,
    navigator: T.object,
    withoutLabel: T.bool
  };

  static defaultProps = {
    backAction: () => {},
    color: '#000',
    backType: 'pop',
    withoutLabel: false
  };

  handlePress = () => {
    const { handlePress } = this.props;
    if (handlePress) {
      handlePress();
    }
    Keyboard.dismiss();
    return this.goBack();
  };

  goBack = async () => {
    const { backAction, navigator, backType } = this.props;
    if (backAction) { backAction(); }
    if (backType === 'pop') {
      navigator.pop();
    } else if (backType === 'dismissAllModals') {
      Keyboard.dismiss();
      await Navigation.dismissAllModals();
    } else if (backType === 'dismissModal') {
      navigator.dismissModal();
    }
  };

  render() {
    const { containerStyle, color, withoutLabel } = this.props;

    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={[styles.container, containerStyle]}
        hitSlop={touchableArea}
      >
        <Icon size={21} name="back" color={color} />
        {platform.ios && !withoutLabel && (
          <Text style={[styles.text, { color }]}>
            {I18n.t('back')}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

const enhance = compose(
  getContext({ navigator: T.object })
);

export default hoistStatics(enhance)(Back);
