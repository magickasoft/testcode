import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { StyleSheet } from 'react-native';

import RequestPreview from './RequestPreview';
import { Container, FlatList } from '../../../../components';
import { dimensions } from '../../../../styles';

const s = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: dimensions.indent * 20,
  },
});

const ITEM_HEIGHT = dimensions.indent * 8.5;

const renderRequestPreview = (handlers) => (props) => (
  <RequestPreview
    {...handlers}
    {...props}
  />
);

const OutgoingRequests = ({
  requests,
  toProfile,
  onSwipeablePress,
  cancelFriendRequest,
}) => (
  <Container>
    <FlatList
      data={requests}
      renderItem={renderRequestPreview({
        toProfile,
        onSwipeablePress,
        cancelFriendRequest,
      })}
      contentContainerStyle={s.contentContainerStyle}
      itemHeight={ITEM_HEIGHT}
      listEmptyText={I18n.t('people.no_outgoing_requests')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
    />
  </Container>
);
OutgoingRequests.propTypes = {
  requests: T.array,
  toProfile: T.func,
  onSwipeablePress: T.func,
  cancelFriendRequest: T.func,
};

export default OutgoingRequests;
