import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './style';
import {
  Card,
  Touchable,
  Popover,
  FlatList,
  Image,
  Text,
} from '../../../../components';
import styles from '../../../../styles';
import { Avatar } from '../../../../containers';
import { mockData } from '../../mockData';

// eslint-disable-next-line
const ListItem = ({ item, onPress }) => (
  <Card style={s.item}>
    <Touchable onPress={onPress}>
      <Image
        uri={item.uri}
        containerStyle={s.image}
      />
    </Touchable>
    <View style={s.content}>
      <Popover
        title={item.title}
        placement="bottom"
        contentStyle={s.popover}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Popover>
    </View>
    <Avatar
      uri={item.avatar}
      containerStyle={s.avatarContainer}
    />
  </Card>
);

// eslint-disable-next-line
const _renderItem = onGoToReview => ({ item }) =>
  <ListItem onPress={onGoToReview} item={item} />;

const NearbyBusinesses = ({
  data = mockData,
  onGoToReview,
}) => (
  <View style={styles.fillAll}>
    <FlatList
      data={data}
      style={styles.fillAll}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem(onGoToReview)}
      ItemSeparatorComponent={null}
      listEmptyText="No data"
    />
  </View>
);

NearbyBusinesses.propTypes = {
  onGoToReview: T.func,
  data: T.array,
};

export default NearbyBusinesses;
