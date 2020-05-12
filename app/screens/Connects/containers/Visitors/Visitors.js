import React from 'react';
import R from 'ramda';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { RefreshControl } from 'react-native';

import { ListItem, ListItemLoader } from '../../components';
import { FlatList, Container } from '../../../../components';
import { dimensions } from '../../../../styles';

const renderItem = onPress =>({ item, itemHeight }) => ( // eslint-disable-line
  <ListItem
    itemHeight={itemHeight}
    profile_id={R.pathOr('', ['visitor', 'id'], item)}
    photo={R.pathOr('', ['visitor', 'photo'], item)}
    fullName={R.pathOr(I18n.t('messages.no_name_user'), ['visitor', 'fullName'], item)}
    time={R.pathOr(null, ['timestamp'], item)}
    // online
    onPress={onPress}
  />
);

const ITEM_HEIGHT = dimensions.indent * 6;

const Visitors = ({
  visitorsWithProfiles,
  isLoading,
  onRefresh,
  onEndReached,
  onGoToProfile,
  theme: {
    s,
  },
}) => (
  <Container style={s.container}>
    <FlatList
      itemHeight={ITEM_HEIGHT}
      ListItemLoader={ListItemLoader}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={renderItem(onGoToProfile)}
      listEmptyText="Nobody visited your profile"
      data={visitorsWithProfiles}
      refreshing={isLoading.visitors}
      onEndReached={onEndReached}
      keyExtractor={item => R.pathOr(item.id, ['visitor', 'id'], item).toString()}
      refreshControl={
        <RefreshControl
          refreshing={isLoading.visitorsRefetch}
          onRefresh={onRefresh}
        />
      }
      initialNumToRender={10}
    />
  </Container>
);

Visitors.propTypes = {
  visitorsWithProfiles: T.array,
  onRefresh: T.func,
  onEndReached: T.func,
  onGoToProfile: T.func,
  isLoading: T.shape({
    visitors: T.bool,
    visitorsRefetch: T.bool,
  }),
  theme: T.object,
};

export default Visitors;
