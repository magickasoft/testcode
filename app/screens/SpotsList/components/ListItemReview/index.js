import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { pure, compose } from 'recompose';
import R from 'ramda';

import style from './style';
import {
  Card,
  Touchable,
  Image,
  Text,
} from '../../../../components';
import { withTheme } from '../../../../utils/enhancers';
import { getImagesUrls } from '../../../../utils/helpers/images';

const PLACEHOLDER_PLACE = require('../../../../assets/images/image_placeholder.png');

const ListItemReview = ({
  id,
  place = {},
  mprofile,
  text,
  onPress,
  itemHeight,
  theme: {
    s,
    colors,
  },
}) => (
  <Card style={{ height: itemHeight }}>
    <Touchable onPress={() => onPress(R.pathOr(null, ['id'], place), id)}>
      <Image
        defaultSource={PLACEHOLDER_PLACE}
        uri={getImagesUrls(R.pathOr([], ['files'], place))[0]}
        containerStyle={s.image}
      />
    </Touchable>
    <View style={s.content}>
      <View style={s.title}>
        <Text
          type="title"
          numberOfLines={1}
        >
          {R.pathOr('No name', ['title'], place)}
        </Text>
      </View>
      <View style={s.subTitle}>
        <Text
          numberOfLines={1}
          type="point"
        >
          {`${R.prop(['fullName'], mprofile)}`}
        </Text>
      </View>
      <Text
        numberOfLines={2}
        type="reviews"
        color={colors.darkGrey}
      >
        {text}
      </Text>
    </View>
  </Card>
);

ListItemReview.propTypes = {
  place: T.object,
  mprofile: T.object,
  text: T.string,
  onPress: T.func,
  theme: T.object,
  itemHeight: T.number,
  id: T.number,
};

export default compose(
  pure,
  withTheme(style)
)(ListItemReview);
