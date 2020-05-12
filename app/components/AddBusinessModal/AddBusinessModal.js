import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';
import { throttledAction } from '@utils/helpers/ui';
import { Button, Modal } from '@components';
import s from './styles';

const types = ['owner', 'worker'];

const AddBusinessModal = ({ onPress, ...props }) => {
  const renderButton = (type, index) => (
    <Button
      key={index}
      title={I18n.t(`addBusiness.button.${type}`)}
      titleStyle={s.titleBtn}
      containerStyle={s.containerBtn}
      onPress={throttledAction(onPress(type))}
    />
  );

  return (
    <Modal
      withoutHeader
      gesturesEnabled
      contentStyles={s.modalContent}
      onBackdropPress={props.onClose}
      {...props}
    >
      <View style={s.infoView}>
        <Text style={s.infoLabel}>
          {I18n.t('addBusiness.label.add')}
        </Text>
        <Text style={s.infoDescription}>
          {I18n.t('addBusiness.text.relationship')}
        </Text>
        {types.map(renderButton)}
      </View>
    </Modal>
  );
};

AddBusinessModal.propTypes = {
  onClose: PropTypes.func,
  onPress: PropTypes.func
};

export default AddBusinessModal;
