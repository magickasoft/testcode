import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import R from 'ramda';
import FastImage from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';

import {
  IconVector,
  Text,
  Container,
  Image,
  CustomHeader,
  BackBtn,
} from '../../components';
import { colors, dimensions } from '../../styles';
import s from './styles';
import data from '../../utils/helpers/date';
import { Avatar } from '../../containers';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';

const icons = {
  close: {
    type: 'Ionicons',
    name: 'ios-arrow-back',
    size: 26,
    color: colors.white,
  },
  thumbUp: {
    type: 'MaterialIcons',
    name: 'thumb-up',
    size: 21,
    style: s.iconMarginLeft,
  },
  dotsThree: {
    type: 'Entypo',
    name: 'dots-three-horizontal',
    size: 21,
    color: colors.white,
    style: s.iconMarginLeft,
  },
  share: {
    type: 'Entypo',
    name: 'share-alternative',
    size: 21,
    color: colors.white,
    style: s.iconMarginLeft,
  },
};

const renderItem = ({ item, index }) => ( // eslint-disable-line
  <ImageZoom
    cropWidth={dimensions.windowWidth}
    cropHeight={dimensions.windowHeight}
    imageWidth={dimensions.windowWidth}
    imageHeight={dimensions.windowHeight}
  >
    <Image
      key={`${item.id}-${index}`}
      uri={item.filename}
      resizeMode={FastImage.resizeMode.contain}
      containerStyle={s.imageContainer}
      style={s.image}
    />
  </ImageZoom>
);

const Gallery = ({
  images,
  currentIndex,
  setCurrentIndex,
  initIndex,
  updateLike,
  onShare,
  openDialogOptions,
  addViewToIndex,
}) => {
  const ts = R.pathOr(null, [currentIndex, 'ts'], images);
  const views = R.path([currentIndex, 'views'], images);
  const likes = R.pathOr(0, [currentIndex, 'likes'], images);
  const isLiked = R.pathOr(null, [currentIndex, 'isLiked'], images);

  const uri = R.pathOr(null, [currentIndex, 'mprofile', 'photo'], images);
  const fullName = R.path([currentIndex, 'mprofile', 'fullName'], images);
  const profileId = R.pathOr('', [currentIndex, 'mprofile', 'id'], images);

  return (
    <Container style={s.root}>
      <CustomHeader
        backgroundColor={colors.transparent}
        leftComponent={<BackBtn color={colors.white} backType="dismissModal" />}
        centerComponent={{
          style: s.indexIndicator,
          text: `${currentIndex + 1} of ${images.length}`,
        }}
      />
      <View style={s.author} >
        <Avatar
          id={profileId}
          uri={uri}
          containerStyle={s.avatar}
        />
        <Text style={s.userName}>{fullName}</Text>
      </View>
      <Carousel
        data={images}
        renderItem={renderItem}
        contentContainerCustomStyle={s.contentContainer}
        firstItem={initIndex}
        sliderWidth={dimensions.windowWidth}
        itemWidth={dimensions.windowWidth}
        autoplay={false}
        onBeforeSnapToItem={setCurrentIndex}
        onSnapToItem={addViewToIndex}
      />
      <View>
        <View style={s.infoContainer}>
          <Text style={s.date}>
            {data.toFormatMessage(ts)} {!R.isNil(views) && ` • ${views} view${views === 1 ? '' : 's'}`}
          </Text>
        </View>
        <View style={s.footerContent}>
          <Text style={s.likeCount}>{`${likes} Like${likes === 1 ? '' : 's'}`}</Text>
          <View style={s.iconsPanel}>
            <IconVector
              onPress={openDialogOptions}
              {...icons.dotsThree}
            />
            <IconVector
              {...icons.share}
              onPress={() => onShare(currentIndex)}
            />
            <IconVector
              {...icons.thumbUp}
              onPress={() => updateLike(currentIndex, isLiked ? 0 : 1)}
              color={isLiked ? colors.activePrimary : colors.white}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

Gallery.propTypes = {
  images: T.array,
  currentIndex: T.number,
  setCurrentIndex: T.func,
  initIndex: T.number,
  onShare: T.func,
  updateLike: T.func,
  openDialogOptions: T.func,
  addViewToIndex: T.func,
};

export default createScreen(Gallery, screens.Gallery);
