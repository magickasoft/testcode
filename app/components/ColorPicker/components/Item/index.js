import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import T from 'prop-types';
import s from './styles';
import Icon from '../../../IconVector';

const Item = ({ color, isSelected, onPress, ...props }) => (
  <TouchableOpacity
    style={[
      s.item,
      isSelected && s.isSelected,
      { backgroundColor: color }
    ]}
    onPress={() => onPress(color)}
    {...props}
  >
    {isSelected &&
    <View style={s.selectedItem}>
      <Icon
        containerStyle={s.containerIcon}
        type="Feather"
        name="check"
        style={s.icon}
      />
    </View>
    }
  </TouchableOpacity>
);

Item.propTypes = {
  color: T.string,
  isSelected: T.bool,
  onPress: T.func
};

export default Item;
