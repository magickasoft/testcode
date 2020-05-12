import React from 'react';
import T from 'prop-types';
import { pure } from 'recompose';
import { View } from 'react-native';
import R from 'ramda';
import * as dateFns from 'date-fns';
import Dash from 'react-native-dash';

import { Text } from '@components';

import s from './style';

const HistorySeparator = ({
  leadingItem,
  history,
  colors,
}) => {
  const nextItem = history[leadingItem.index + 1];
  const nextData = new Date(+R.pathOr(null, ['first_ts'], nextItem) * 1000);
  const isActive = dateFns.getDay(nextData) !== dateFns.getDay(leadingItem.first_ts * 1000);

  return (
    <View
      style={[
        s.container,
        !!isActive && s.containerIsActive,
      ]}
    >
      <View style={s.lineContainer} >
        <Dash
          style={s.line}
          dashColor="#949EA5"
          dashThickness={1.5}
        />
      </View>
      {!!isActive && (
        <View style={s.isActiveContainer}>
          <Text
            type="subtitleNavBar"
            color={isActive ? colors.grey : colors.lightGrey}
          >
            {dateFns.format(nextData, 'MMM dd')}
          </Text>
        </View>
      )}
    </View>
  );
};

HistorySeparator.propTypes = {
  history: T.array,
  leadingItem: T.shape({
    id: T.string,
    title: T.string,
    count_in_place: T.number,
    first_ts: T.number,
    isVisited: T.number,
    week: T.string,
    short_geohash: T.string,
    colors: T.object,
  }),
  colors: T.object,
};

export default pure(HistorySeparator);
