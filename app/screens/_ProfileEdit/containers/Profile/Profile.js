import React from 'react';
import { ScrollView, View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';
import { parallax } from '@constants';
import { Image, Gallery, Text, Button } from '@components';
import s from './style';

// eslint-disable-next-line
const mockImg = 'data:image/png;base64,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'; // eslint-disable-line

const mockImagesUrls = [
  'https://image.shutterstock.com/image-photo/studio-shot-young-man-looking-260nw-372072697.jpg',
  'https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUuE1HUig4TSNU5RqmAkGdlVCymN-WEVUGSXTm5rQA230L9la',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXahcKzJheYoAI9n-U3od3bfhj_LKhofGs-ONsU4GLVzwihkX', // eslint-disable-line
];

const getFrom = (profile) => (name) => R.pathOr('', [name], profile);

const Details = ({
  imagesUrls = mockImagesUrls,
  setGalleryIndex,
  // galleryIndex,
  onShare,
  onEditInfo,
  currentProfile
}) => {
  const getFromProfile = getFrom(currentProfile);

  return (
    <ScrollView>
      <Image
        uri={getFromProfile('photo')}
        prefix="_big"
        containerStyle={s.imageContainer}
        removeName="_mid"
      />
      <Gallery
        images={imagesUrls}
        openImage={setGalleryIndex}
        // isLoading={isLoading}
        itemStyle={s.itemStyle}
        width={parallax.GALLERY_IMAGE_WIDTH}
        height={parallax.GALLERY_IMAGE_HEIGHT}
      />
      <View style={s.content}>
        <Text type="h1">{`${getFromProfile('fullName')}, ${getFromProfile('age')}`}</Text>
        <Text type="h1">MALE</Text>
        <Text type="h1">STRAIGHT</Text>
        <Text type="label" style={s.aboutMe}>
          {'I am a great person and this is about me ...\n' +
          'I live in a beautiful world.'}
        </Text>
      </View>
      <View style={s.buttonContainer}>
        <Button
          title="Edit info"
          titleStyle={s.button}
          containerStyle={[s.containerButton]}
          onPress={onEditInfo}
        />
        <Button
          title="Share profile"
          titleStyle={s.button}
          containerStyle={[s.containerButton]}
          onPress={onShare}
        />
      </View>
    </ScrollView>
  );
};

Details.propTypes = {
  currentProfile: T.object,
  galleryIndex: T.number,
  imagesUrls: T.array,
  onEditInfo: T.func,
  onShare: T.func,
  setGalleryIndex: T.func
};

export default Details;
