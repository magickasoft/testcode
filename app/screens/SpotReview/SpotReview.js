import React from 'react';
import R from 'ramda';
import { RefreshControl, View, ActivityIndicator } from 'react-native';
import I18n from 'react-native-i18n';
import {
  Comment,
  FlatList,
  IconVector,
  Container,
  Header,
  Text
} from '@components';
import styles, { dimensions } from '@styles';
import { platform, screens } from '@constants';
import { createScreen } from '@navigation';
import { Content, MenuButtons } from './components';
import { PropType } from './types';

const getIcons = (s, colors) => ({
  share: {
    type: 'EvilIcons',
    name: 'share-apple',
    size: dimensions.indent * 3.5,
    containerStyle: s.buttonShare
  },
  plus: {
    type: 'Feather',
    name: 'plus',
    color: colors.orange,
    size: dimensions.verticalIndent * 3.5
  },
  plusWhite: {
    type: 'Feather',
    name: 'plus',
    color: colors.white,
    size: dimensions.verticalIndent * 3.5
  }
});

const isItemFirst = (index) => R.equals(index, 0);

// const getRightComponent = (onShare, color, icons) => (
//   <IconVector
//     isAnimated
//     {...icons.share}
//     color={color}
//     onPress={onShare}
//   />
// );

const renderItem = handlers => props => ( // eslint-disable-line
  <Comment
    containerStyle={handlers.s.commentContainer}
    {...props}
    {...handlers}
  />
);

const SpotReview = ({
  itemIndex, // TODO: remove this in feature
  place,
  loadToId,
  openPhotoUploader,

  // header
  // onShare,

  // reviews
  reviews,
  onEndReached,
  onUpdateLike,

  isLoading,

  // gallery
  onOpenGallery,
  // buttons action sheet
  openDialogOptions,

  // refs
  onChangeViewRef,
  setFlatListRef,
  animation: {
    onScroll,
    opacityTitle,
    opacityTitleSecond,
    opacityImage,
    scaleImage,
    colorTitle,
    colorHeader
  },
  theme: {
    colors,
    s
  },
  displayCopilot
}) => {
  // const icons = getIcons(s, colors);
  return (
    <Container>
      <View
        style={[
          styles.fillAll,
          { backgroundColor: colors.transparent }
        ]}
        ref={onChangeViewRef}
      >
        <Header
          rounded
          backgroundColor={colorHeader}
          statusBarColor={colorHeader}
          color={colors.black}
          colorTitle={colors.white}
          titleStyle={{ opacity: opacityTitleSecond }}
          title={place.title}
          drawUnderNavBar
          shadow={false}
          absolute
          // rightComponent={getRightComponent(onShare, colors.white, icons)}
          rightContainerStyle={s.rightContainerStyle}
        />
        <FlatList
          flatListRef={setFlatListRef}
          onScroll={onScroll}
          data={reviews.data}
          renderItem={renderItem({
            onPressDots: openDialogOptions,
            onUpdateLike,
            s,
            reviewsCount: reviews.data.length
          })}
          ListHeaderComponent={
            <Content
              displayCopilot={displayCopilot}
              place={place}
              totalCount={reviews.totalCount}
              animation={{
                opacityTitle,
                opacityImage,
                colorTitle,
                scaleImage
              }}
              onAddPhotos={openPhotoUploader}
              isLoading={isLoading.place}
              onOpenGallery={onOpenGallery}
              buttonPlusBlue={isItemFirst(itemIndex)}
              loadToId={loadToId}
            />
          }
          ListEmptyComponent={
            !isLoading.reviews && (
              <View style={s.emptyContainer}>
                <Text style={s.emptyText}>{I18n.t('spots.write_first_review')}</Text>
              </View>
            )
          }
          ListFooterComponent={(isLoading.reviews || isLoading.reviewsMore) && (
            <View style={s.spinnerContainer}>
              <ActivityIndicator animating color={s.spinner.color} />
            </View>
          )}
          ItemSeparatorComponent={null}
          refreshing={isLoading.reviews}
          onEndReached={onEndReached}
          onEndReachedThreshold={platform.ios ? 0 : 0.1}
          scrollEventThrottle={1}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onOpenGallery}
              progressViewOffset={-200}
              style={s.refreshControl}
            />
          }
        />
      </View>
      <MenuButtons
        place={place}
        displayCopilot={displayCopilot}
      />
    </Container>
  );
};

SpotReview.propTypes = PropType;

export default createScreen(SpotReview, screens.SpotReview);
