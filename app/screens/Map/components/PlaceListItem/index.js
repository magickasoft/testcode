import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { pure } from 'recompose';
import R from 'ramda';

import { math, places } from '@utils/helpers';
import { Touchable, Image, Text, Rating, PriceCategory } from '../../../../components';
import s from './style';
import { getImagesUrls } from '../../../../utils/helpers/images';

const PlaceListItem = ({ onGoToReview, item, itemHeight }) => (
  <Touchable
    style={[s.itemContainer, { height: itemHeight }]}
    onPress={() => onGoToReview(R.pathOr(null, ['id'], item))}
  >
    <Image
      containerStyle={s.imgContainer}
      resizeMode="cover"
      uri={getImagesUrls(item.files)[0]}
      prefix="_thumb"
    />
    <View style={s.content}>
      <View style={s.contentHeader}>
        <Text style={s.title} numberOfLines={1}>{R.pathOr(null, ['title'], item)}</Text>
      </View>
      <View style={s.contentCenter}>
        <Text type="reviews" style={s.reviews}>
          {places.categoryNameFromId(item.category_id)}
        </Text>
      </View>
      <View style={s.contentFooter}>
        <Rating
          reviews={R.pathOr(null, ['reviewsTotalCount'], item)}
          rating={math.toRound(Number(R.pathOr(null, ['rating'], item)), 1)}
        />
        <View style={s.priceAndReviewsContainer}>
          <Text type="reviews" style={s.reviews}>({R.prop('reviewsTotalCount', item)}) • </Text>
          <PriceCategory type="reviews" priceCategory={item.price_category} />
        </View>
      </View>
    </View>
  </Touchable>
);

PlaceListItem.propTypes = {
  item: T.object,
  itemHeight: T.number,
  onGoToReview: T.func
};


export default pure(PlaceListItem);
