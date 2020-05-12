import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import {
  Container,
  FlatList,
  Button,
  CustomHeader,
  BackBtn,
} from '../../components';
import { dimensions } from '@styles';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import AlbumPreview from './AlbumPreview';

const ITEM_HEIGHT = dimensions.indent * 8.5;

const renderAlbumPreview = (handlers) => (props) => (
  <AlbumPreview
    {...handlers}
    {...props}
  />
);

const AlbumsList = ({
  albums,
  toAlbum,
  onSwipeablePress,
  onCreateAlbum,
  theme: {
    s,
  },
  isMyAlbums,
  profile,
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{
        text: I18n.t('albums.albums_list_title').replace('{fullName}', profile.fullName),
      }}
    />
    <FlatList
      data={albums}
      renderItem={renderAlbumPreview({
        toAlbum,
        onSwipeablePress,
        isMyAlbums,
      })}
      itemHeight={ITEM_HEIGHT}
      listEmptyText={I18n.t('albums.no_albums')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
      ListFooterComponent={isMyAlbums && (
        <Button
          title={I18n.t('albums.create_your_album')}
          onPress={onCreateAlbum}
          titleStyle={s.wideBtn}
          containerStyle={s.wrapperWideBtn}
        />
      )}
    />
  </Container>
);
AlbumsList.propTypes = {
  albums: T.array,
  toAlbum: T.func,
  onSwipeablePress: T.func,
  theme: T.object,
  onCreateAlbum: T.func,
  isMyAlbums: T.bool,
  profile: T.object,
};

export default createScreen(AlbumsList, screens.AlbumsList);
