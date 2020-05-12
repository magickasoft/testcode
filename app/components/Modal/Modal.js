import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import { iPhoneHeaderPadding, deviceHeight } from '@utils/helpers/ui';
import { DismissKeyboardView, Icon } from '@components';
import { platform } from '@constants';
import ModalWrapper from './ModalWrapper';
import { modalStyles as styles } from './styles';

function Modal({
  onClose, label, title, titleStyles, contentStyles, children, type, allowView,
  headerContent, leftButton, closeTextStyle, gesturesEnabled, withoutHeader, ...rest
}) {
  let heightStyle = platform.android ? { flex: 1 } : { height: deviceHeight - iPhoneHeaderPadding };
  heightStyle = type === 'fullScreen' ? heightStyle : null;
  const Component = allowView ? View : DismissKeyboardView;

  const modalProps = gesturesEnabled
    ? {
      ...rest, onSwipeComplete: onClose, swipeDirection: 'down', swipeThreshold: 80, scrollOffsetMax: 100
    }
    : { ...rest };

  const renderRoundedRectangle = () => (
    <View style={styles.containerSwipe}>
      <View style={styles.roundedRectangle} />
    </View>
  );

  return (
    <ModalWrapper {...modalProps}>
      <Component style={[styles.container, contentStyles, heightStyle]}>
        {!withoutHeader && (
          <View style={styles.header}>
            {headerContent
              ? headerContent()
              : (
                <Fragment>
                  {leftButton || null}
                  <Text style={[styles.defaultText, titleStyles]}>{title}</Text>
                  <TouchableOpacity onPress={onClose}>
                    <Icon name="close" size={26} color="#373737" />
                    {/* <Text style={[styles.closeText, closeTextStyle || {}]}>{label}</Text> */}
                  </TouchableOpacity>
                </Fragment>
              )
            }
          </View>
        )}
        {children}
        {gesturesEnabled && renderRoundedRectangle()}
      </Component>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  withoutHeader: PropTypes.bool,
  allowView: PropTypes.bool,
  children: PropTypes.node,
  closeTextStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  contentStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  gesturesEnabled: PropTypes.bool,
  headerContent: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  label: PropTypes.string,
  leftButton: PropTypes.node,
  onClose: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  titleStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  type: PropTypes.oneOf(['dynamicHeight', 'fullScreen'])
};

Modal.defaultProps = {
  withoutHeader: false,
  gesturesEnabled: false,
  label: I18n.t('modal.label.close'),
  title: '',
  type: 'dynamicHeight',
  allowView: false
};

export default Modal;
