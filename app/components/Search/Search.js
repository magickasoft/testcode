import React from 'react';
import T from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import I18n from 'react-native-i18n';

import IconVector from '../IconVector';
import Input from '../Input';
import s from './styles';
import { colors, dimensions } from '../../styles';

const icons = {
  search: {
    type: 'EvilIcons',
    name: 'search',
    size: dimensions.indent * 3,
    color: '#a5b4bd',
    containerStyle: s.containerStyleIcon
  }
};

const Search = ({
  onClear,
  value,
  setInputRef,
  onPress,
  container,
  icon = icons.search,
  containerStyle,
  secondContainerStyle,
  ...inputProps
}) => (
  <View
    style={[s.container, containerStyle]}
  >
    <Input
      icon={icon}
      inputRef={setInputRef}
      placeholder={I18n.t('search')}
      value={value}
      containerStyle={s.inputContainer}
      secondContainerStyle={s.secondContainerStyle}
      style={s.input}
      placeholderColor={colors.grey}
      {...inputProps}
    />

    <TouchableOpacity
      onPress={onClear}
      style={s.clearInput}
    >
      {!!value && (
        <IconVector
          type="Ionicons"
          color={colors.activePrimary}
          name="ios-close-circle"
          size={18}
        />
      )}
    </TouchableOpacity>
  </View>
);

Search.propTypes = {
  container: T.object,
  containerStyle: T.any,
  icon: T.object,
  onChangeText: T.func,
  onClear: T.func,
  onPress: T.func,
  secondContainerStyle: T.any,
  setInputRef: T.func,
  value: T.string
};

export default Search;
