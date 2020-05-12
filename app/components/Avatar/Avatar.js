import React, { PureComponent } from 'react';
import T from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { platform } from '@constants';
import styles from './style';

export default class Avatar extends PureComponent {
  static propTypes = {
    avatarStyle: T.oneOfType([T.array, T.object, T.number]),
    containerStyle: T.oneOfType([T.array, T.object, T.number]),
    onPress: T.func,
    resizeMode: T.string,
    source: T.oneOfType([T.object, T.number]).isRequired,
    withoutCache: T.bool
  };

  static defaultProps = {
    avatarStyle: {},
    containerStyle: {},
    resizeMode: 'contain',
    withoutCache: false,
    onPress: () => {}
  };

  renderAvatar = () => {
    const {
      containerStyle,
      avatarStyle,
      withoutCache,
      ...props
    } = this.props;
    const Component = withoutCache ? Image : FastImage;
    return (
      <Component
        style={[styles.avatar, avatarStyle]}
        resizeMethod={platform.ios ? 'auto' : 'resize'}
        {...props}
      />
    );
  };

  render() {
    const { containerStyle, onPress } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}
      >
        {this.renderAvatar()}
      </TouchableOpacity>
    );
  }
}
