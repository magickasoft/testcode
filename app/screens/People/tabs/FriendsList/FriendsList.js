import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { StyleSheet } from 'react-native';

import FriendPreview from './FriendPreview';
import { Container, FlatList } from '../../../../components';
import { dimensions } from '../../../../styles';

const s = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: dimensions.indent * 20,
  },
});

const ITEM_HEIGHT = dimensions.indent * 8.5;

const renderFriendPreview = (handlers) => (props) => (
  <FriendPreview
    {...handlers}
    {...props}
  />
);

const FriendsList = ({
  friends,
  toProfile,
  onSwipeablePress,
}) => (
  <Container>
    <FlatList
      data={friends}
      renderItem={renderFriendPreview({
        toProfile,
        onSwipeablePress,
      })}
      contentContainerStyle={s.contentContainerStyle}
      itemHeight={ITEM_HEIGHT}
      listEmptyText={I18n.t('people.no_friends')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
    />
  </Container>
);
FriendsList.propTypes = {
  friends: T.array,
  toProfile: T.func,
  onSwipeablePress: T.func,
};

export default FriendsList;
