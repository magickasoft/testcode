import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import FastImage from 'react-native-fast-image';
import { validURL } from '@utils/helpers/string';
import I18n from 'react-native-i18n';

import { Container, FlatList, Icon, Touchable, CustomHeader, BackBtn } from '../../components';
import { screens } from '@constants';
import { createScreen } from '@navigation';

// eslint-disable-next-line
const _renderItem = ({theme: { s }, onOpenGallery, onOpenImageOptions, isMyAlbum, openPhotoUploader }) => ({ item, index }) => (
  <View style={s.item}>
    {item.isPlusButton ? (
      <View style={[s.image, s.footerContainer]}>
        <Icon name="addCart" onPress={openPhotoUploader} size={50} />
      </View>
    ) : (
      <Touchable
        onPress={onOpenGallery(index)}
        onLongPress={isMyAlbum ? onOpenImageOptions(item) : () => {}}
      >
        {validURL(item.file) && (
          <FastImage
            source={{
              uri: item.file,
              priority: FastImage.priority.high
            }}
            style={s.image}
          />
        )}
      </Touchable>
    )}
  </View>
);

const Album = ({
  album,
  theme: { s },
  theme,
  isMyAlbum,
  openPhotoUploader,
  onOpenGallery,
  onOpenImageOptions,
  onOpenEditAlbum
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: album.title }}
      rightComponent={isMyAlbum && {
        icon: 'edit', color: '#000', onPress: onOpenEditAlbum
      }}
    />
    <FlatList
      data={isMyAlbum ? [
        ...album.images,
        { isPlusButton: true, id: 'add-button' }
      ] : album.images}
      numColumns={2}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem({
        theme,
        onOpenGallery,
        isMyAlbum,
        onOpenImageOptions,
        openPhotoUploader
      })}
      ItemSeparatorComponent={null}
      listEmptyText={I18n.t('albums.no_photos')}
    />
  </Container>
);

Album.propTypes = {
  album: T.object,
  isMyAlbum: T.bool,
  onOpenEditAlbum: T.any,
  onOpenGallery: T.func,
  onOpenImageOptions: T.any,
  openPhotoUploader: T.any,
  theme: T.object
};

export default createScreen(Album, screens.Album);
