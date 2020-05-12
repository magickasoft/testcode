import React from 'react';
import T from 'prop-types';
import R from 'ramda';
import { StyleSheet, View } from 'react-native';
import { date } from '@utils/helpers';
import {
  Touchable,
  Text,
  FlatList,
  Container,
  CustomHeader,
  BackBtn
} from '@components';
import { dimensions, colors } from '@styles';
import { createScreen } from '@navigation';
import { screens, ALBUM_STATUS_NAMES, ALBUM_REQUEST_VALUE } from '@constants';

const s = StyleSheet.create({
  content: {
    paddingVertical: dimensions.doubleIndent,
    backgroundColor: colors.transparent,
  },
  item: {
    paddingHorizontal: dimensions.indent * 1.4,
    paddingVertical: dimensions.indent * 0.7,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C8C7CC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
  },
  small: {
    fontSize: 12,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
});

const getRequestValueText = R.propOr('No value', R.__, ALBUM_STATUS_NAMES);
const timeValues = [
  ALBUM_REQUEST_VALUE.ALLOW_1_DAY,
  ALBUM_REQUEST_VALUE.ALLOW_1_WEEK,
  ALBUM_REQUEST_VALUE.ALLOW_1_MONTH,
];

// eslint-disable-next-line react/prop-types
const renderItem = openActions => ({ item: { profile, album, ...request } }) => (
  <Touchable
    key={request.id}
    onPress={openActions(request.id)}
    style={s.item}
  >
    <View>
      <Text style={s.title}>{album.title}</Text>
      <Text style={s.small}>{profile.fullName}</Text>
    </View>
    <View style={s.rightContainer}>
      <Text type="label">{getRequestValueText(request.value)}</Text>
      {timeValues.includes(request.value) && request.date_until && (
        <Text style={s.small}>till {date.toFormat(new Date(request.date_until), 'MMM d')}</Text>
      )}
    </View>
  </Touchable>
);

const AlbumAccess = ({
  albumsRequests,
  openActions,
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn color={colors.white} />}
      backgroundColor={colors.purple}
      centerComponent={{
        style: { color: colors.white },
        text: 'Albums access',
      }}
    />
    <FlatList
      data={albumsRequests}
      contentContainerStyle={s.content}
      renderItem={renderItem(openActions)}
      ItemSeparatorComponent={null}
      keyExtractor={R.prop('id')}
      listEmptyText="No album access requests"
      initialNumToRender={10}
    />
  </Container>
);

AlbumAccess.propTypes = {
  openActions: T.func,
  albumsRequests: T.array,
};

export default createScreen(AlbumAccess, screens.AlbumAccess);
