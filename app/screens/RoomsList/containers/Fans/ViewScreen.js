import React from 'react';
import I18n from 'react-native-i18n';
import { View } from 'react-native';
import T from 'prop-types';
import s from './style';
import {
  Card,
  Touchable,
  Popover,
  Tab,
  Image,
  FlatList,
  Text,
} from '../../../../components';
import styles from '../../../../styles';
import { mockData } from '../../mockData';
import { Avatar } from '../../../../containers';

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

const routes = [{
  key: '0',
  title: I18n.t('my_favs'),
}, {
  key: '1',
  title: I18n.t('favorited_me'),
}];

// eslint-disable-next-line
const _renderItem = onGoToReview => ({ item }) =>
  <ListItem onPress={onGoToReview} item={item} />;

const NearbyBusinesses = ({
  data = mockData,
  onGoToReview,
}) => (
  <View style={styles.fillAll}>
    <Tab
      routes={routes}
      type="simple"
    >
      <FlatList
        data={data}
        style={styles.fillAll}
        contentContainerStyle={s.contentContainerStyle}
        renderItem={_renderItem(onGoToReview)}
        ItemSeparatorComponent={null}
        listEmptyText="No patients"
      />
      <FlatList
        data={data}
        style={styles.fillAll}
        contentContainerStyle={s.contentContainerStyle}
        renderItem={_renderItem(onGoToReview)}
        ItemSeparatorComponent={null}
        listEmptyText="No patients"
      />
    </Tab>
  </View>
);

NearbyBusinesses.propTypes = {
  onGoToReview: T.func,
  data: T.array,
};

export default NearbyBusinesses;
