/* eslint-disable */
import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RNSwipeable from 'react-native-gesture-handler/Swipeable';
import PropTypes from 'prop-types';

import { styles } from './styles';
import Icon from '../IconVector';
import Text from '../Text';

class Swipeable extends Component {
  pressHandler = (index) => {
    this._swipeableRow.close();
    this.props.onItemPress(index);
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  renderRightAction = ({ text, color, icon }, x, progress, index) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View
        style={[styles.rightActionContainer, { transform: [{ translateX: trans }] }]}
        key={index}
      >
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={() => this.pressHandler(index)}
        >
          {!!icon && <Icon {...icon} containerStyle={{ backgoundColor: '#000'}} />}
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = progress => {
    const { items, itemWidth } = this.props;
    return (
      <View style={[styles.rightActionsContainer, { width: items.length * itemWidth }]}>
        {items.map((item, index) =>
          this.renderRightAction(item, (items.length - index) * itemWidth, progress, index))}
      </View>
    );
  }
  render() {
    const { children } = this.props;
    return (
      <RNSwipeable
        ref={this.updateRef}
        friction={2}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}
      >
        {children}
      </RNSwipeable>
    );
  }
}

Swipeable.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemWidth: PropTypes.number.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default Swipeable;
