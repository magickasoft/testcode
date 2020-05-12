import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import { BackBtn, Container, CustomHeader, FlatList } from '../../components';
import { screens } from '@constants';
import { createScreen } from '@navigation';

import PlaceItem from '../SpotsList/components/ListItemPlace';

// eslint-disable-next-line react/prop-types
const renderPlaceItem = (handlers) => ({ item, index, itemHeight }) => (
  <PlaceItem
    {...handlers}
    itemIndex={index}
    itemHeight={itemHeight}
    {...item}
  />
);

const PlaceBookmarks = ({
  places,
  onGoToReview,
  changeBookmarkStatus,
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: I18n.t('bookmarks.title') }}
    />
    <FlatList
      data={places}
      renderItem={renderPlaceItem({
        onPress: onGoToReview,
        changeBookmarkStatus,
      })}
      listEmptyText={I18n.t('bookmarks.empty_list')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
    />
  </Container>
);

PlaceBookmarks.propTypes = {
  places: T.array,
  onGoToReview: T.func,
  changeBookmarkStatus: T.func,
};

export default createScreen(PlaceBookmarks, screens.PlaceBookmarks);
