import React from 'react';
import T from 'prop-types';
import { pure, compose } from 'recompose';
import { View } from 'react-native';
import R from 'ramda';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';

import style from './style';
import { withTheme } from '../../../../utils/enhancers';
import { Icon, Text, ButtonRound } from '../../../../components';
import { dimensions } from '../../../../styles';
import date from '../../../../utils/helpers/date';
import { ckeckIn } from '../../../../constants';

const gradientColors = [
  '#c957ea',
  '#31b7ea',
  '#a4d415',
  '#fadf00',
  '#fe9f26',
  '#ff4228'
];

const gradientLocations = [0, 0.29, 0.5, 0.63, 0.79, 1];

const icons = (colors) => ({
  place: {
    name: 'pin',
    size: 28
  },
  check: {
    name: 'check',
    size: 14,
    color: colors.white
  },
  cross: {
    name: 'close',
    size: 20,
    color: '#FF3B30'
  }
});

const HistoryListItem = ({
  itemHeight,
  item,
  onCheckIn,
  onHideItem,
  theme: { s, colors }
}) => {
  const isVisited = item.isVisited === ckeckIn.I_WAS_HERE;
  const isUnknown = item.isVisited === ckeckIn.IS_UNKNOWN;

  return (
    <View style={[s.container, { height: itemHeight }]}>
      <View style={s.lineContainer}>
        <Dash
          style={s.line}
          dashColor="#949EA5"
          dashThickness={1.5}
        />
        {isVisited ? (
          <LinearGradient
            colors={gradientColors}
            style={[
              s.iconContainer,
              s.isVisitedColor
            ]}
            locations={gradientLocations}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon
              {...icons(colors).place}
              color={colors.white}
            />
          </LinearGradient>
        ) : (
          <View style={s.iconContainer}>
            <Icon
              {...icons(colors).place}
              color="#838E98"
            />
          </View>
        )}
      </View>
      <View style={s.contentContainer}>
        <Text
          type="h2"
          style={s.title}
          numberOfLines={1}
          color={colors.black}
        >
          {R.pathOr('No name', ['title'], item)}
        </Text>
        <Text
          type="subtitleNavBar"
          color="#838E98"
        >
          {date.toFormatMessage(R.pathOr(null, ['first_ts'], item))}
        </Text>
      </View>
      {isUnknown && (
        <View style={s.buttonContainer}>
          <ButtonRound
            size={dimensions.indent * 2}
            containerStyle={[s.buttonRed]}
            icon={icons(colors).cross}
            shadow={false}
            onPress={() => onHideItem(item)}
          />
          <ButtonRound
            size={dimensions.indent * 2}
            containerStyle={s.button}
            icon={icons(colors).check}
            shadow={false}
            onPress={() => onCheckIn(item)}
          />
        </View>
      )}
    </View>
  );
};

HistoryListItem.propTypes = {
  item: T.shape({
    count_in_place: T.number,
    date: T.string,
    first_ts: T.number,
    id: T.string,
    isVisited: T.number,
    short_geohash: T.string,
    title: T.string,
    week: T.string
  }),
  itemHeight: T.number,
  onCheckIn: T.func,
  onHideItem: T.func,
  theme: T.object
};

export default compose(
  withTheme(style),
  pure,
)(HistoryListItem);
