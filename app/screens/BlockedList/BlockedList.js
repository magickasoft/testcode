import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { StyleSheet } from 'react-native';

import { Container, FlatList, CustomHeader, BackBtn } from '../../components';
import { dimensions } from '@styles';
import { screens } from '@constants';
import { createScreen } from '@navigation';

import BlockedPreview from './BlockedPreview';

const s = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: dimensions.indent * 20,
  },
});

const ITEM_HEIGHT = dimensions.indent * 8.5;

const renderBlockedPreview = (handlers) => (props) => (
  <BlockedPreview
    {...handlers}
    {...props}
  />
);

const BlockedList = ({
  blockedUsers,
  toProfile,
  onSwipeablePress,
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{
        text: I18n.t('people.blocked'),
      }}
    />
    <FlatList
      data={blockedUsers}
      renderItem={renderBlockedPreview({
        toProfile,
        onSwipeablePress,
      })}
      contentContainerStyle={s.contentContainerStyle}
      itemHeight={ITEM_HEIGHT}
      listEmptyText={I18n.t('people.no_blocked')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
    />
  </Container>
);

BlockedList.propTypes = {
  blockedUsers: T.array,
  toProfile: T.func,
  onSwipeablePress: T.func,
};

export default createScreen(BlockedList, screens.BlockedList);
