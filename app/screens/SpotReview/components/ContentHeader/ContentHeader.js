import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { pure } from 'recompose';
import T from 'prop-types';
import { math, places } from '@utils/helpers';
import { Rating, Text, PriceCategory, BookmarkButton, AnimatedTitle } from '@components';
import { dimensions } from '@styles';

const ContentHeader = ({
  totalCount,
  isLoading,
  title,
  rating,
  opacityTitle,
  colorTitle,
  categoryId,
  price_category: priceCategory,
  isAddedToBookmark,
  changeBookmarkStatus,
  theme: {
    s,
    colors
  }
}) => (
  <Animated.View style={[s.container, { opacity: opacityTitle }]}>
    <View>
      <View style={s.priceAndReviewsContainer}>
        <Text
          type="reviews"
          style={[s.category, s.priceAndCategoryText]}
        >
          {`${places.categoryNameFromId(categoryId)} • `}
        </Text>
        <PriceCategory
          priceCategory={priceCategory}
          style={s.priceAndCategoryText}
        />
      </View>
      <View style={s.titleContainer}>
        <AnimatedTitle
          isLoading={isLoading}
          title={title}
          titleStyle={{ color: colorTitle, paddingVertical: dimensions.indent / 2 }}
        />
      </View>
      <View style={s.rateContainer}>
        <Rating
          size={dimensions.indent * 2}
          rating={math.toRound(rating, 1)}
          isLoading={isLoading}
        />
        <Text
          type="reviews"
          color={colors.darkGrey}
          style={s.reviewsCount}
        >
          ({totalCount})
        </Text>
      </View>
    </View>
    <BookmarkButton
      style={s.bookmarkButton}
      fill={isAddedToBookmark}
      onPress={() => changeBookmarkStatus(isAddedToBookmark ? 0 : 1)}
    />
  </Animated.View>
);

ContentHeader.propTypes = {
  categoryId: T.number,
  changeBookmarkStatus: T.func,
  colorTitle: T.object,
  isAddedToBookmark: T.bool,
  isLoading: T.bool,
  opacityTitle: T.object,
  price_category: T.number,
  rating: T.any,
  theme: T.object,
  title: T.string,
  totalCount: T.number
};

export default pure(ContentHeader);
