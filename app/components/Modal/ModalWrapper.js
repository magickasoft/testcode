import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import { toggleStatusBar, deviceHeight, deviceWidth } from '@utils/helpers/ui';
import { modalStyles as styles } from './styles';

export default class ModalWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number])
  };

  static defaultProps = {};

  componentDidUpdate({ isVisible: oldVisible }) {
    toggleStatusBar(oldVisible, this.props.isVisible);
  }

  render() {
    const {
      onClose, style, children, ...rest
    } = this.props;

    return (
      <NativeModal
        backdropColor="#000"
        backdropOpacity={0.55}
        style={[styles.modal, style]}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        {...rest}
      >
        {children}
      </NativeModal>
    );
  }
}
