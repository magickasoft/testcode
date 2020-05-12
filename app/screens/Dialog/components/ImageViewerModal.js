import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { fontWeights, colors, dimensions } from '../../../styles';
import { Touchable, Icon, Text } from '../../../components';
import { platform } from '../../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    paddingVertical: dimensions.indent,
    marginTop: platform.ios ? dimensions.statusBarHeight : 0,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 2000,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: dimensions.indent,
    top: dimensions.halfIndent,
  },
  backButtonText: {
    fontWeight: fontWeights.bold,
    color: colors.white,
    marginLeft: 5,
  },
  indexIndicator: {
    flex: 1,
    fontWeight: fontWeights.bold,
    color: colors.white,
    textAlign: 'center',
  },
});

const icons = {
  close: {
    name: 'back',
    size: 26,
    color: colors.white,
  },
};

const _renderHeader = (currentIndex, images, onCancel) => (
  <View style={styles.headerContainer}>
    <Touchable onPress={onCancel} style={styles.closeButton}>
      <Icon {...icons.close} />
      <Text style={styles.backButtonText}>{I18n.t('messages.image_back')}</Text>
    </Touchable>
    <Text style={styles.indexIndicator}>
      {currentIndex + 1} {I18n.t('messages.image_of')} {images.length}
    </Text>
  </View>
);

const ImageViewerModal = ({ viewImageIndex, images, hideImage }) => (
  <Modal
    visible={viewImageIndex !== -1}
  >
    <ImageViewer
      imageUrls={images}
      index={viewImageIndex}
      onCancel={hideImage}
      enableSwipeDown
      saveToLocalByLongPress={false}
      renderIndicator={() => null}
      renderHeader={currentIndex =>
        _renderHeader(
          currentIndex,
          images,
          hideImage,
        )}
    />
  </Modal>
);

ImageViewerModal.propTypes = {
  viewImageIndex: PropTypes.number,
  images: PropTypes.array,
  hideImage: PropTypes.func,
};

export default ImageViewerModal;
