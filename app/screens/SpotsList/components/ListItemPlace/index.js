import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import { pure, compose } from 'recompose';
import FastImage from 'react-native-fast-image';
import { withTheme, withLocale } from '@utils/enhancers';
import { places, math, images, map } from '@utils/helpers';
import { Text, BookmarkButton, PriceCategory, Rating } from '@components';
import { dimensions } from '@styles';
import style from './style';

const PLACEHOLDER_PLACE = require('../../../../assets/images/image_placeholder.png');

const ListItem = ({
  itemIndex,
  id,
  address,
  category_id: categoryId,
  rating,
  title,
  files,
  reviewsTotalCount,
  onPress,
  location,
  currentLocation,
  // itemHeight,
  price_category: priceCategory,
  isAddedToBookmark,
  changeBookmarkStatus,
  short_message: shortMessage,
  theme: { s, colors }
}) => {
  const image = images.getImagesUrls(files, '', 'previewUrl')[0];
  const imageSource = image ? { uri: image } : PLACEHOLDER_PLACE;
  const distance = map.getDistanceMileFeetString(location, currentLocation);

  return (
    <TouchableOpacity
      onPress={() => onPress(id, itemIndex)}
    >
      <View
        style={[
          s.container,
          itemIndex === 0 && s.itemFirst
        ]}
      >
        <FastImage
          source={imageSource}
          style={s.image}
        />
        {!!distance && (
          <View style={s.distance}>
            <Text style={s.distanceText}>{distance}</Text>
          </View>
        )}
        {!!shortMessage && (
          <View style={s.points}>
            <Text style={s.pointsText}>{shortMessage}</Text>
          </View>
        )}
        <View style={s.rightContainer}>
          <View style={s.rightTopContainer}>
            <View style={s.titleAndBookmark}>
              <Text
                type="title"
                numberOfLines={2}
                style={s.title}
              >
                {title}
              </Text>
              <View style={s.bookmarkContainer}>
                <BookmarkButton
                  style={s.bookmarkButton}
                  fill={isAddedToBookmark}
                  onPress={() => changeBookmarkStatus(id, isAddedToBookmark ? 0 : 1)}
                />
              </View>
            </View>
            <View style={s.priceAndCategory}>
              <PriceCategory priceCategory={priceCategory} />
              <Text style={s.category}> • {places.categoryNameFromId(categoryId)}</Text>
            </View>
            <Text
              numberOfLines={2}
              type="reviews"
              color={colors.darkGrey}
              style={s.address}
            >
              {address.split(',')[0]}
            </Text>
          </View>
          <View style={s.rateContainer}>
            <Rating
              size={dimensions.indent * 2}
              rating={math.toRound(Number(rating), 1)}
            />
            <Text type="reviews" style={s.reviews}>{`(${reviewsTotalCount})`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  itemIndex: T.number,
  id: T.number,
  address: T.string,
  title: T.string,
  files: T.array,
  rating: T.number,
  onPress: T.func,
  theme: T.object,
  currentLocation: T.object,
  location: T.object,
  // itemHeight: T.number,
  category_id: T.number,
  reviewsTotalCount: T.number,
  price_category: T.number,
  isAddedToBookmark: T.bool,
  changeBookmarkStatus: T.func,
  short_message: T.string
};

export default compose(
  withLocale(),
  pure,
  withTheme(style),
)(ListItem);
