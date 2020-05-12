import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Touchable } from '../../../components';

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    margin: 3,
    height: 100,
    width: 150,
  },
});

const ImageView = ({ currentMessage, onShowImage }) => (
  <Touchable onPress={() => onShowImage(currentMessage.image)}>
    <FastImage
      style={styles.image}
      source={{
        uri: currentMessage.image,
        priority: FastImage.priority.normal,
      }}
    />
  </Touchable>
);

ImageView.propTypes = {
  currentMessage: PropTypes.object.isRequired,
  onShowImage: PropTypes.func.isRequired,
};


export default ImageView;
