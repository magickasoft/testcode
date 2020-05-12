import React from 'react';
import T from 'prop-types';
import Animated from 'react-native-reanimated';
import {
  Map,
  Container,
  CustomHeader,
  FlatList,
  BackBtn
} from '@components';
import { screens } from '@constants';
import { createScreen } from '../../navigation';
import { EventListItem } from './components';
import { ITEM_HEIGHT } from './components/EventListItem/style';

const renderItem = (onGoToEvent, currentLocation) =>
  ({ item, index, itemHeight }) => ( // eslint-disable-line
    <EventListItem
      item={item}
      onGoToEvent={onGoToEvent}
      itemHeight={itemHeight}
      index={index}
      currentLocation={currentLocation}
    />
  );

const MapScreen = ({
  eventId,
  eventsLocations,
  initialLocation,
  isLoading,
  onGoToEvent,
  currentLocation,
  theme: { s, colors }
}) => {
  const data = eventsLocations
    .filter((o) => o.place_location)
    .map((o) => ({ ...o, location: o.place_location }));

  return (
    <Container style={s.root}>
      <Map
        initialRegion={initialLocation}
        initCurrentPosition={!eventId}
        data={data}
        onPressMarker={onGoToEvent}
      />
      <Animated.View style={s.content}>
        <CustomHeader
          containerStyle={s.containerStyle}
          leftComponent={<BackBtn withoutLabel />}
          backgroundColor={colors.transparent}
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
            data={data}
            style={s.container}
            contentContainerStyle={s.contentContainerStyle}
            keyExtractor={(item, index) => `${item}-${index}`}
            ListFooterComponent={null}
            renderItem={renderItem(onGoToEvent, currentLocation)}
          />
        </Animated.View>
      </Animated.View>
    </Container>
  );
};

MapScreen.propTypes = {
  currentLocation: T.object,
  eventId: T.number,
  eventsLocations: T.array,
  initialLocation: T.object,
  isLoading: T.bool,
  onGoToEvent: T.func,
  theme: T.object
};

export default createScreen(MapScreen, screens.MapEvents);
