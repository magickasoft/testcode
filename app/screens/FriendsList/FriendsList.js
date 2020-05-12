import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import { BackBtn, Container, CustomHeader, FlatList } from '../../components';
import { dimensions } from '@styles';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import FriendPreview from './FriendPreview';

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
  theme: {
    s,
  },
  profile,
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: `${profile.fullName}'s friends` }}
    />
    <FlatList
      data={friends}
      renderItem={renderFriendPreview({
        toProfile,
      })}
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
  theme: T.object,
  profile: T.object,
};

export default createScreen(FriendsList, screens.FriendsList);
