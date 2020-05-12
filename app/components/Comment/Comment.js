import React, { Fragment } from 'react';
import T from 'prop-types';
import { ViewPropTypes, View } from 'react-native';
import R from 'ramda';
import FastImage from 'react-native-fast-image';
import { Separator } from '@components';
import Rating from '../Rating';
import Text from '../Text';
import Likes from '../Likes';
import Button from '../Button';
import { Avatar } from '../../containers';
import Touchable from '../Touchable';
import { colors, dimensions } from '../../styles';
import Icon from '../IconVector';
import date from '../../utils/helpers/date';
import badge from '../../assets/images/badge.png';

const icons = {
  'three-dots': {
    type: 'Entypo',
    name: 'dots-three-horizontal',
    color: colors.darkGrey,
    size: dimensions.doubleIndent
  }
};

const placeholderAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllTKwcRjVb5g6HBEU6vh1uhAH5UEGPgeRxfANgQau26tPJaEZ'; // eslint-disable-line


const Comment = ({
  item,
  itemHeight,
  onPressDots = () => null,
  onPressAvatar,
  containerStyle,
  onUpdateLike,
  // online,
  _isExpanded,
  _hasExpanded,
  _onToggleExpanded,
  _onLayoutTextCalculations,
  index,
  reviewsCount,
  theme: { s }
}) => {
  const expandedText = !_isExpanded ? {
    numberOfLines: 2,
    ellipsizeMode: 'tail'
  } : {};

  return (
    <Fragment>
      <Text
        onLayout={_onLayoutTextCalculations}
        style={s.textCalculations}
      >
        {R.prop('text', item)}
      </Text>
      <View style={[s.root, containerStyle, { minHeight: itemHeight }]}>
        <Touchable onPress={onPressAvatar}>
          <Avatar
            id={R.path(['mprofile', 'id'], item)}
            size="small"
            containerStyle={s.avatar}
            uri={R.pathOr(placeholderAvatar, ['mprofile', 'photo'], item)}
          />
          {/* {online && <View style={s.onlineIndicator} /> } */}
        </Touchable>
        <View style={s.rightContainer}>
          <View style={s.rightContent}>
            <View style={s.titleContainer}>
              <View style={s.title}>
                <View style={s.nameContainer}>
                  <View style={s.nameContainerSecond}>
                    <View style={s.nameAndBadge}>
                      <Text type="name" style={s.name}>{`${item.mprofile.fullName}`}</Text>
                      {item.isFirst && (
                        <View style={s.badgeContainer}>
                          <Text style={s.badgeText}>1st to review</Text>
                        </View>
                      )}
                      {!!item.sticker && (
                        <FastImage source={badge} style={s.badgeImage} />
                      )}
                    </View>
                    <Text type="date" style={s.date}>{date.toFormatMessage(item.created_ts)}</Text>
                  </View>
                </View>
                <Rating
                  rating={item.overflow_lvl}
                  containerStyle={s.ratingContainer}
                />
              </View>
            </View>
            <View
              style={s.textContainer}
            >
              <Text
                type="regular"
                selectable
                style={s.text}
                {...expandedText}
              >
                {R.prop('text', item)}
              </Text>
              <View style={s.rowSpaceBetween}>
                <Likes
                  isLiked={R.path(['like_statistic', 'your_value'], item)}
                  likeCount={R.path(['like_statistic', 'like_count'], item)}
                  dislikeCount={R.path(['like_statistic', 'dislike_count'], item)}
                  onChange={onUpdateLike}
                />
                <View style={s.row}>
                  {_hasExpanded && (
                    <Button
                      containerStyle={s.buttonMore}
                      onPress={_onToggleExpanded}
                      type="link"
                      title={_isExpanded ? 'less' : 'more'}
                    />)
                  }
                  <Icon
                    {...icons['three-dots']}
                    onPress={() => onPressDots(item)}
                    containerStyle={s.dotsIconStyle}
                  />
                </View>
              </View>
            </View>
          </View>
          {index + 1 < reviewsCount && (
            <Separator marginTop={5} />
          )}
        </View>
      </View>
    </Fragment>
  );
};

Comment.propTypes = {
  containerStyle: ViewPropTypes.style,
  onPressDots: T.func,
  onPressAvatar: T.func,
  key: T.number,
  onUpdateLike: T.func,
  onPressMore: T.func,
  // online: T.bool,
  itemHeight: T.number,
  item: T.shape({
    id: T.number,
    like_statistic: T.shape({
      like_count: T.number,
      dislike_count: T.number,
      your_value: T.number
    }),
    created_ts: T.oneOfType([T.number]),
    mprofile: T.object,
    text: T.string
  }),
  _hasExpanded: T.bool,
  _isExpanded: T.bool,
  _onToggleExpanded: T.func,
  _onLayoutTextCalculations: T.func,
  index: T.number,
  reviewsCount: T.number,
  theme: T.object,
};

export default Comment;
