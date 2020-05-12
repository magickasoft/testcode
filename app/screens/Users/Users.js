import React from 'react';
import R from 'ramda';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { RefreshControl, View } from 'react-native';

import { ListItem, ListItemLoader } from './components';
import { Search, FlatList, Container, CustomHeader, BackBtn } from '../../components';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';

import { dimensions } from '../../styles';

const renderUser = onGoToChat => ({ item, itemHeight }) => ( // eslint-disable-line
  <ListItem
    itemHeight={itemHeight}
    onPress={onGoToChat}
    profile_id={R.pathOr('', ['id'], item)}
    photo={R.pathOr('', ['photo'], item)}
    fullName={R.pathOr('', ['fullName'], item) || I18n.t('messages.no_name_user')}
    lastonline_ts={R.prop('lastonline_ts', item)}
    vip_until={R.prop('vip_until', item)}
    vipSettings={R.prop('vipSettings', item)}
  />
);

const ITEM_HEIGHT = dimensions.indent * 8.5;

const Users = ({
  onGoToChat,
  onChangeSearch,
  users,
  isLoading,
  onRefresh,
  onEndReached,
  theme: {
    s,
  },
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{
        text: 'USERS',
      }}
    />
    <View style={s.containerSearch}>
      <Search
        onChangeText={onChangeSearch}
      />
    </View>
    <FlatList
      itemHeight={ITEM_HEIGHT}
      ListItemLoader={ListItemLoader}
      renderItem={renderUser(onGoToChat)}
      listEmptyText="No users"
      data={users}
      refreshing={isLoading.users}
      onEndReached={onEndReached}
      refreshControl={
        <RefreshControl
          refreshing={isLoading.usersRefetch}
          onRefresh={onRefresh}
        />
      }
      initialNumToRender={10}
      ItemSeparatorComponent={null}
    />
  </Container>
);

Users.propTypes = {
  onGoToChat: T.func,
  onChangeSearch: T.func,
  users: T.array,
  onRefresh: T.func,
  onEndReached: T.func,
  isLoading: T.shape({
    users: T.bool,
    usersRefetch: T.bool,
  }),
  theme: T.object,
};

export default createScreen(Users, screens.Users);
