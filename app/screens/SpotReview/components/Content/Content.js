import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import { pure } from 'recompose';
import {
  BackgroundSlider,
  Map,
  Tab,
  Gallery,
  Text,
  CopilotStep,
  FlatList,
  IconVector,
  Icon
} from '@components';
import { dimensions, colors } from '@styles';
import { parallax } from '@constants';

import { CameraIcon, CheckInIcon } from '../../../../assets/svgs';
import { Route } from '../../mockData';
import ContentHeader from '../ContentHeader';
import websiteImage from '../../../../assets/images/website.png';
import addressImage from '../../../../assets/images/address.png';
import phoneImage from '../../../../assets/images/phone.png';
import Line from './Line';
import { PropType } from './types';

const websiteRegExp = /http(s?):\/\//g;
const getOpenableUrl = (url) => (websiteRegExp.test(url) ? url : `http://${url}`);

const openLink = (link) => {
  Linking.canOpenURL(link)
    .then((supported) => {
      if (!supported) {
        return console.log(`cannot open link: ${link}`);
      }
      return Linking.openURL(link);
    })
    .catch(console.log);
};

const Content = ({
  onGoToMap,
  totalCount,
  onOpenGallery,
  isLoading,
  place: {
    location,
    title,
    address,
    rating,
    images,
    categoryId,
    description,
    price_category: priceCategory,
    phone,
    website,
    isAddedToBookmark,
    tags,
    checkInsCount
    // id,
  },
  onGoToSpotsNotification,
  onAddPhotos,
  animation: {
    opacityTitle,
    opacityImage,
    colorTitle,
    scaleImage
  },
  theme: {
    s
  },
  displayCopilot,
  changeBookmarkStatus,
  goToCheckIns
}) => {
  const routes = [
    { title: I18n.t('spot_review.review') },
    { title: I18n.t('spot_review.about') },
    { title: I18n.t('spot_review.rewards') }
  ];

  const placeInfo = [{
    title: address,
    image: addressImage,
    isLoading
  }, {
    title: website && website.replace(websiteRegExp, ''),
    image: websiteImage,
    onPress: () => openLink(getOpenableUrl(website)),
    isLoading
  }, {
    title: phone,
    image: phoneImage,
    onPress: (number) => openLink(`tel:${number}`),
    isLoading
  }].filter((e) => !!e.title);

  return (
    <View style={s.container}>
      <View style={s.containerBackgroundSlider}>
        <BackgroundSlider
          pickProp="filename"
          height={parallax.BACKGROUND_IMAGE_HEIGHT}
          uris={images}
          containerStyle={{ opacity: opacityTitle }}
          imageStyle={{ opacity: opacityImage }}
          carouselStyle={{ transform: [{ scale: scaleImage }] }}
        />
        <ContentHeader
          totalCount={totalCount}
          isLoading={isLoading}
          title={title}
          rating={rating}
          opacityTitle={opacityTitle}
          colorTitle={colorTitle}
          categoryId={categoryId}
          price_category={priceCategory}
          isAddedToBookmark={isAddedToBookmark}
          changeBookmarkStatus={changeBookmarkStatus}
        />
      </View>
      <View style={s.contentSeparator} />
      <Tab
        routes={routes}
        type="simple"
        displayBottomShadow={false}
        initialLayout={{
          width: dimensions.windowWidth,
          height: parallax.TABS_HEIGHT
        }}
      >
        <Map
          type="min"
          data={[{
            id: 0,
            location,
            title,
            description: address
          }]}
          height={parallax.TABS_HEIGHT}
          initialRegion={location}
          onPress={onGoToMap}
          isLoading={isLoading}
        />
        <View style={s.descriptionContainer}>
          <Text>{description}</Text>
        </View>
        <Route />
      </Tab>
      {checkInsCount > 0 && (
        <View style={s.checkInsListButton}>
          <TouchableOpacity
            style={[s.button, s.buttonCheckIn]}
            onPress={goToCheckIns}
          >
            <View style={s.row}>
              <CheckInIcon color={colors.grey} />
              <Text style={[s.buttonText, s.grey]}>View Check-Ins ({checkInsCount})</Text>
            </View>
            <IconVector
              type="MaterialIcons"
              name="keyboard-arrow-right"
              color={colors.grey}
              size={dimensions.indent * 3}
            />
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        style={s.placeInfoList}
        data={placeInfo}
        ItemSeparatorComponent={null}
        renderItem={({ item }) => <Line {...item} />}
        keyExtractor={(_, i) => `${i}`}
      />
      {tags.length > 0 && (
        <FlatList
          ItemSeparatorComponent={() => <View style={s.tagSeparator} />}
          style={s.tagsContainer}
          horizontal
          data={tags}
          renderItem={({ item }) => (
            <View style={s.tagContainer}>
              <Icon name="tag" size={16} />
              <Text style={s.tagText}>{item}</Text>
            </View>
          )}
          keyExtractor={(_, i) => `${i}`}
        />
      )}
      <View style={s.buttonsContainer}>
        <CopilotStep
          style={s.copilotButtonContainer}
          stepProps={displayCopilot && {
            text: I18n.t('copilot.place_check_in'),
            order: 2,
            name: 'check-in'
          }}
        >
          <TouchableOpacity
            onPress={onGoToSpotsNotification}
            style={s.button}
          >
            <CheckInIcon />
            <Text
              style={[s.buttonText, s.buttonCheckInText]}
            >
              {I18n.t('spots.check_in')}
            </Text>
          </TouchableOpacity>
        </CopilotStep>
        <View style={s.buttonsSeparator} />
        <CopilotStep
          style={s.copilotButtonContainer}
          stepProps={displayCopilot && {
            text: I18n.t('copilot.add_place_photos'),
            order: 3,
            name: 'add-photos'
          }}
        >
          <TouchableOpacity
            style={s.button}
            onPress={onAddPhotos}
          >
            <CameraIcon />
            <Text style={s.buttonText}>{I18n.t('spots.add_photos')}</Text>
          </TouchableOpacity>
        </CopilotStep>
      </View>
      <Gallery
        ListHeaderComponent={() => <View style={s.galleryHeader} />}
        pickProp="filename"
        images={images}
        openImage={onOpenGallery}
        isLoading={isLoading}
        width={parallax.GALLERY_IMAGE_WIDTH}
        height={parallax.GALLERY_IMAGE_HEIGHT}
      />
    </View>
  );
};

Content.propTypes = PropType;

export default pure(Content);
