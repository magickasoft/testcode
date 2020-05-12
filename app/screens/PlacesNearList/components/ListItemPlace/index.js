/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { pure, compose } from 'recompose';

import style from './style';
import {
  Touchable,
  Text,
} from '../../../../components';
import { withTheme } from '../../../../utils/enhancers';
import R from 'ramda';


const ListItem = ({
  item,
  onPress,
  itemHeight,
  theme: {
    s,
  },
}) => (
 <Touchable
   style={[s.containerItem, { height: itemHeight}]}
   onPress={() => onPress(item)}
   >
     <Text
       type="h2"
       numberOfLines={1}
     >
       {R.prop('title', item)}
     </Text>
 </Touchable>
);

ListItem.propTypes = {
  id: T.number,
  address: T.string,
  title: T.string,
  files: T.array,
  rating: T.number,
  onPress: T.func,
  theme: T.object,
  currentLocation: T.object,
  itemHeight: T.number,
};

export default compose(
  pure,
  withTheme(style)
)(ListItem);
