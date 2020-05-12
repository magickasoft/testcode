import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import T from 'prop-types';
import { getContext } from 'recompose';
import I18n from 'react-native-i18n';

import { Text } from '@components';
import { screens } from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  sentText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

const AlbumAccess = ({ isSentMessage, albumId, navigator }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        navigator.push(screens.Album, {
          passProps: { albumId },
        });
      }}
      style={styles.button}
    >
      <Text style={isSentMessage ? styles.sentText : styles.text}>{I18n.t('messages.open_album')}</Text>
    </TouchableOpacity>
  </View>
);

AlbumAccess.propTypes = {
  isSentMessage: T.bool,
  albumId: T.number,
  navigator: T.object,
};

export default getContext({ navigator: T.object })(AlbumAccess);
