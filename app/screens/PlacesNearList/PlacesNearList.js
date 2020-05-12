import React from 'react';
import { RefreshControl } from 'react-native';
import T from 'prop-types';

import {
  Search,
  Container,
  FlatList,
  CustomHeader,
  BackBtn,
} from '../../components';

import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import { ListItemLoader, ListItemPlace } from './components';
import styles, { dimensions } from '../../styles';


const _renderItem = onPressItem => ({ item, itemHeight }) => ( // eslint-disable-line
  <React.Suspense fallback={<ListItemLoader itemHeight={itemHeight} />}>
    <ListItemPlace
      onPress={onPressItem}
      itemHeight={itemHeight}
      item={item}
    />
  </React.Suspense>
);

const ITEM_HEIGHT = dimensions.indent * 4;

const PlacesNearList = ({
  places,
  onEndReached,
  loading,
  loadingRefetch,
  onRefresh,
  onChangeSearch,
  onPressItem,
  theme: {
    s,
    colors,
  },
}) => (
  <Container style={s.container}>
    <CustomHeader
      leftComponent={<BackBtn />}
      backgroundColor={colors.backgroundPrimary}
      centerComponent={{
        text: 'Places',
      }}
    />
    <Search
      containerStyle={s.containerSearch}
      onChangeText={onChangeSearch}
    />
    <FlatList
      data={places}
      ListItemLoader={ListItemLoader}
      itemHeight={ITEM_HEIGHT}
      style={styles.fillAll}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem(onPressItem)}
      listEmptyText="No data"
      refreshing={loading}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      scrollEventThrottle={1}
      initialNumToRender={15}
      refreshControl={
        <RefreshControl
          refreshing={loadingRefetch}
          onRefresh={onRefresh}
        />
      }
    />
  </Container>
);

PlacesNearList.propTypes = {
  onChangeSearch: T.func,
  theme: T.object,
  onEndReached: T.func,
  loading: T.bool,
  loadingRefetch: T.bool,
  places: T.array,
  onRefresh: T.func,
  onPressItem: T.func,
};

export default createScreen(PlacesNearList, screens.PlacesNearList);
