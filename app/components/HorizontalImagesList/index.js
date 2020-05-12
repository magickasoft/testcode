import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import T from 'prop-types';
import { FlatList, Text, Button } from '@components';
import { platform } from '@constants';
import { validURL } from '@utils/helpers/string';
import s from './styles';

const renderItem = ({ onItemPress }) => ({ item }) => (
  <TouchableOpacity
    style={s.itemContainer}
    onPress={() => onItemPress(item)}
    activeOpacity={platform.android ? 1 : 0.5}
  >
    <View style={s.itemInner}>
      {validURL(item.image) && (
        <FastImage
          source={{
            uri: item.image,
            priority: FastImage.priority.high,
          }}
          style={s.image}
          resizeMode={item.isPrivate ? 'contain' : 'cover'}
          resizeMethod={platform.ios ? 'auto' : 'resize'}
        />
      )}
      <View style={s.content}>
        {item.title && (
          <Text style={s.title} ellipsizeMode="tail" numberOfLines={2}>
            {item.title.trim()}
          </Text>
        )}
        {item.subTitle && (
          <Text style={s.subTitle} ellipsizeMode="tail" numberOfLines={1}>
            {item.subTitle.trim()}
          </Text>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const HorizontalImagesList = ({
  title,
  titleStyle,
  subTitle,
  subTitleStyle,
  data,
  onArrowPress,
  onItemPress,
  buttonTitle
}) => (
  <View style={s.root}>
    <View style={s.mainContent}>
      {title && <Text style={titleStyle}>{title}</Text>}
      {subTitle && <Text style={[s.subTitle, subTitleStyle]}>{subTitle}</Text>}
      <FlatList
        style={s.imagesContainer}
        horizontal
        data={data}
        renderItem={renderItem({ onItemPress })}
        onItemPress={onItemPress}
      />
    </View>
    <Button
      title={buttonTitle}
      titleStyle={s.wideBtn2}
      containerStyle={s.wrapperWideBtn2}
      onPress={onArrowPress}
    />
  </View>
);

HorizontalImagesList.propTypes = {
  buttonTitle: T.string.isRequired,
  data: T.array.isRequired,
  onArrowPress: T.func.isRequired,
  onItemPress: T.func.isRequired
};

export default HorizontalImagesList;
