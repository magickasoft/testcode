import R from 'ramda';
import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button';
import Text from '../Text';
import SeparatorVertical from '../SeparatorVertical';
import styles from '../../styles';
import s from './styles';

const Dialog = ({
  cancelButtonProps,
  cancelTitle = 'CANCEL',
  cancelTitleStyle,
  children,
  isVisible,
  message,
  onCancel,
  onSubmit,
  submitButtonProps,
  submitTitle = 'OK',
  submitTitleStyle
}) => (
  <Modal
    style={s.modal}
    animationIn="fadeIn"
    animationOut="fadeOut"
    isVisible={isVisible}
  >
    <View style={s.container}>
      {!!children && children}
      {!!message && (
        <View>
          <Text style={s.text}>{message}</Text>
        </View>
      )}
      {R.all(R.is(Function), [onCancel, onSubmit]) ? (
        <View style={styles.rowAligned}>
          <View style={styles.fillAll}>
            <Button
              onPress={onCancel}
              title={cancelTitle}
              titleStyle={[s.cancelTitle, cancelTitleStyle]}
              {...cancelButtonProps}
            />
          </View>
          <SeparatorVertical />
          <View style={styles.fillAll}>
            <Button
              onPress={onSubmit}
              title={submitTitle}
              titleStyle={submitTitleStyle}
              {...submitButtonProps}
            />
          </View>
        </View>
      ) : (
        <Button
          onPress={onSubmit}
          title={submitTitle}
          titleStyle={submitTitleStyle}
          {...submitButtonProps}
        />
      )}
    </View>
  </Modal>
);

Dialog.propTypes = {
  cancelButtonProps: T.object,
  cancelTitle: T.string,
  cancelTitleStyle: Text.propTypes.style,
  children: T.node,
  isVisible: T.bool,
  message: T.string,
  onCancel: T.func,
  onSubmit: T.func,
  submitButtonProps: T.object,
  submitTitle: T.string,
  submitTitleStyle: Text.propTypes.style
};

export default Dialog;
