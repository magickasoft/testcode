import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import I18n from 'react-native-i18n';
import { isIphoneX } from '@utils/helpers/ui';
import { DismissKeyboardView, Icon } from '@components';
import ModalWrapper from './ModalWrapper';
import { optionsModalStyle as styles } from './styles';

function OptionsModal({
  onClose, options, style, closeLabel, ...rest
}) {
  const renderOptions = (opts) => (
    <View style={styles.wrapper}>
      {opts.map((option, index) => {
        const handler = () => {
          onClose();
          option.onPress();
        };
        return (
          <TouchableWithoutFeedback onPress={handler} key={option.label}>
            <View style={[styles.row, (index + 1) === opts.length && styles.rowLast]}>
              {option.icon && <Icon name={option.icon} size={26} color="#373737" />}
              <Text style={[styles.label, styles.flex, !option.icon && styles.labelWithoutIcon]}>
                {option.label}
              </Text>
              {!option.chevronHide && <Icon name="chevron" width={9} height={13} />}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );

  return (
    <ModalWrapper onClose={onClose} {...rest}>
      <DismissKeyboardView
        style={[styles.container, { height: 96 + (options.length * 56) + (isIphoneX() ? 16 : 0) }]}
      >
        {renderOptions(options)}

        <TouchableWithoutFeedback onPress={onClose}>
          <View style={[styles.wrapper, styles.cancel]}>
            <Text style={styles.label}>{closeLabel}</Text>
          </View>
        </TouchableWithoutFeedback>
      </DismissKeyboardView>
    </ModalWrapper>
  );
}

OptionsModal.propTypes = {
  closeLabel: PropTypes.string,
  onClose: PropTypes.func,
  options: PropTypes.array.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number])
};

OptionsModal.defaultProps = {
  closeLabel: I18n.t('modal.label.close'),
  onClose: () => {}
};

export default OptionsModal;
