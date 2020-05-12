import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import { validURL } from '@utils/helpers/string';
import I18n from 'react-native-i18n';

import { Swipeable, Text } from '@components';
import { colors } from '@styles';
import s from './styles';

const itemWidth = 100;

const AlbumPreview = ({
  item: {
    id,
    title,
    description,
    thumbImage,
    totalImages,
  },
  item,
  itemHeight,
  toAlbum,
  onSwipeablePress,
  isMyAlbums,
}) => {
  const items = [{
    text: I18n.t('swipeable.edit'),
    color: colors.green,
    icon: {
      type: 'MaterialCommunityIcons',
      name: 'pencil',
      color: colors.white,
      size: 30,
    },
  }, {
    text: I18n.t('swipeable.remove'),
    color: '#dd2c00',
    icon: {
      type: 'MaterialCommunityIcons',
      name: 'delete',
      color: colors.white,
      size: 30,
    },
  }];

  const Component = isMyAlbums ? Swipeable : React.Fragment;
  const componentProps = isMyAlbums ? {
    items,
    itemWidth,
    onItemPress: onSwipeablePress(item),
  } : {};
  console.log('thumbImage::: ', thumbImage);
  return (
    <Component {...componentProps}>
      <RectButton
        onPress={toAlbum(id)}
        style={s.itemWrapper}
      >
        <View style={[s.dataWrapper, { height: itemHeight }]}>
          <View>
            {validURL(thumbImage) && (
              <FastImage
                source={{
                  uri: thumbImage,
                  priority: FastImage.priority.high,
                }}
                style={s.image}
              />
            )}
          </View>
          <View style={s.nameWrapper}>
            <Text style={s.h1} ellipsizeMode="tail" numberOfLines={1}>
              {title.trim()}
            </Text>
            <Text style={s.p2} ellipsizeMode="tail" numberOfLines={1}>
              {description}
            </Text>
            <Text style={s.p2} ellipsizeMode="tail" numberOfLines={1}>
              {totalImages} {I18n.t(`albums.photo${totalImages === 1 ? '' : 's'}`)}
            </Text>
          </View>
        </View>
      </RectButton>
    </Component>
  );
};

AlbumPreview.propTypes = {
  item: T.shape({
    id: T.number,
    title: T.string,
    description: T.string,
    thumbImage: T.string,
    totalImages: T.number,
  }),
  itemHeight: T.number,
  toAlbum: T.func,
  onSwipeablePress: T.func,
  isMyAlbums: T.bool,
};

export default AlbumPreview;
