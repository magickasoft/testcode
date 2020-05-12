import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';

import { BackBtn, Container, CustomHeader, FlatList } from '../../components';
import { screens } from '@constants';
import { createScreen } from '@navigation';

import CheckInItem from './CheckInItem';

// eslint-disable-next-line react/prop-types
const renderCheckInItem = ({ item, index, itemHeight }) => (
  <CheckInItem
    itemIndex={index}
    itemHeight={itemHeight}
    {...item}
  />
);

const PlaceCheckInList = ({
  checkIns,
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: I18n.t('checkIns.title') }}
    />
    <FlatList
      data={checkIns}
      renderItem={renderCheckInItem}
      listEmptyText={I18n.t('checkIns.empty_list')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
    />
  </Container>
);

PlaceCheckInList.propTypes = {
  checkIns: T.array,
};

export default createScreen(PlaceCheckInList, screens.PlaceCheckInList);
