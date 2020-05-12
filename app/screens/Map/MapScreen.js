import React from 'react';
import T from 'prop-types';
import Animated from 'react-native-reanimated';

import {
  Map,
  Container,
  Search,
  Modal,
  Filter,
  ButtonRound,
  FlatList,
  CustomHeader,
  BackBtn
} from '../../components';
import { dimensions, scalingUtils } from '../../styles';
import { screens } from '../../constants';
import { PlaceListItem } from './components';
import { createScreen } from '../../navigation';
import { ITEM_HEIGHT } from './components/PlaceListItem/style';

const icons = (colors) => ({
  filter: {
    name: 'filter',
    size: scalingUtils.scale(30),
    color: colors.white
  }
});

const renderItem = (onGoToReview, currentLocation) =>
  ({ item, index, itemHeight }) => ( // eslint-disable-line
    <PlaceListItem
      item={item}
      onGoToReview={onGoToReview}
      itemHeight={itemHeight}
      index={index}
      currentLocation={currentLocation}
    />
  );

const MapScreen = ({
  id,
  placesLocations,
  initialLocation,
  isLoading,
  onChangeSearch,
  onGoToReview,
  filters,
  initFilters,
  isVisibleFilterModal,
  toggleVisibleFilterModal,
  onChangeFilters,
  onOpenFilter,
  currentLocation,
  location,
  markerTitle,
  theme: {
    s,
    colors
  }
}) => (
  <Container style={s.root}>
    <Modal
      withoutHeader
      isVisible={isVisibleFilterModal}
      onClose={toggleVisibleFilterModal}
      contentStyles={s.modalContent}
      type="fullScreen"
    >
      <Filter
        onClose={toggleVisibleFilterModal}
        onSuccess={onChangeFilters}
        filters={filters}
        initFilters={initFilters}
      />
    </Modal>
    <Map
      initialRegion={initialLocation}
      initCurrentPosition={!id}
      data={placesLocations}
      onPressMarker={onGoToReview}
      location={location}
      markerTitle={markerTitle}
    />
    <Animated.View style={s.content}>
      <CustomHeader
        containerStyle={s.containerStyle}
        leftComponent={<BackBtn withoutLabel />}
        backgroundColor={colors.transparent}
        centerComponent={
          <Search
            containerStyle={s.search}
            onChangeText={onChangeSearch}
          />
        }
        leftContainerStyle={s.cornerStyle}
        rightContainerStyle={s.cornerStyle}
      />
      <Animated.View>
        <FlatList
          isGesture
          horizontal
          itemHeight={ITEM_HEIGHT}
          refreshing={isLoading}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={placesLocations}
          style={s.container}
          contentContainerStyle={s.contentContainerStyle}
          keyExtractor={(item, index) => `${item}-${index}`}
          ListFooterComponent={null}
          renderItem={renderItem(onGoToReview, currentLocation)}
        />
      </Animated.View>
    </Animated.View>
    <ButtonRound
      reanimated={false}
      size={dimensions.indent * 3.5}
      containerStyle={s.button}
      icon={icons(colors).filter}
      onPress={onOpenFilter}
    />
  </Container>
);

MapScreen.propTypes = {
  id: T.number,
  placesLocations: T.array,
  initialLocation: T.object,
  onChangeSearch: T.func,
  onGoToReview: T.func,
  isLoading: T.bool,
  filters: T.object,
  initFilters: T.object,
  isVisibleFilterModal: T.bool,
  toggleVisibleFilterModal: T.func,
  onChangeFilters: T.func,
  onOpenFilter: T.func,
  theme: T.object,
  currentLocation: T.object,
  location: T.object,
  markerTitle: T.string
};

export default createScreen(MapScreen, screens.Map);
