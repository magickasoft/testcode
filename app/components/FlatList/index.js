import React from 'react';
import T from 'prop-types';
import { FlatList as List } from 'react-native';
import Animated from 'react-native-reanimated';
import { pure } from 'recompose';
import { ScrollView } from 'react-native-gesture-handler';
import R from 'ramda';
import s from './styles';
import Separator from '../Separator';
import Spinner from '../Spinner';
import { platform } from '../../constants';
import styles from '../../styles';
import Text from '../Text';

const AnimatedList = Animated.createAnimatedComponent(List);

const getItemLayout = (itemHeight) => ({
  getItemLayout: (data, index) => ({ length: itemHeight, offset: itemHeight * index, index })
});

const keyExtractor = ({ id }) => id.toString();

const loadingData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const FlatList = ({
  listEmptyText,
  itemHeight,
  isGesture = false,
  flatListRef,
  data,
  refreshing,
  renderItem,
  style,
  ListItemLoader,
  ruleShowLoading = R.isEmpty,
  ...props
}) => {
  const addProps = itemHeight ? getItemLayout(itemHeight) : {};
  const showLoading = ruleShowLoading(data) && refreshing && ListItemLoader;

  return (
    <AnimatedList
      data={showLoading ? loadingData : data}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={
        <Text style={s.emptyText}>{refreshing ? '' : listEmptyText}</Text>
      }
      renderItem={(el) => (showLoading
        ? <ListItemLoader {...el} itemHeight={itemHeight} />
        : renderItem({ ...el, itemHeight })
      )}
      ref={flatListRef}
      refreshing={refreshing}
      renderScrollComponent={isGesture ? (p) => <ScrollView {...p} /> : undefined}
      ListFooterComponent={refreshing && !ruleShowLoading(data) ? Spinner : null}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode={platform.ios ? 'on-drag' : !refreshing ? 'on-drag' : 'none'}
      // optimization
      onEndReachedThreshold={platform.ios ? 0.1 : 0.2}
      removeClippedSubviews
      initialNumToRender={4}
      maxToRenderPerBatch={6}
      updateCellsBatchingPeriod={10}
      windowSize={30}
      style={[styles.fillAll, style]}
      {...addProps}
      {...props}
    />
  );
};

FlatList.propTypes = {
  data: T.arrayOf(T.oneOfType(T.object, T.string)),
  flatListRef: T.oneOfType([T.object, T.func]),
  isGesture: T.bool,
  itemHeight: T.number,
  listEmptyText: T.string,
  ListItemLoader: T.func,
  refreshing: T.bool,
  renderItem: T.func,
  ruleShowLoading: T.func,
  style: T.any
};

export default pure(FlatList);
