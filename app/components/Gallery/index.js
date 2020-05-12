import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Rect } from 'react-native-svg';
import R from 'ramda';
import { pure } from 'recompose';
import s from './style';
import { colors } from '../../styles';
import ContentLoader from '../ContentLoader';
import Touchable from '../Touchable';
import Image from '../Image';
import FlatList from '../FlatList';

const GalleryLoader = ({ height, width}) => ( // eslint-disable-line
  <ContentLoader height={height} width={width}>
    <Rect
      fill={colors.lightestGrey}
      x="0"
      y="0"
      width={width}
      height={height}
    />
    <Rect
      fill={colors.lightestGrey}
      x={width + 5}
      y="0"
      width={width}
      height={height}
    />
    <Rect
      fill={colors.lightestGrey}
      x={width * 2 + 10}
      y="0"
      width={width}
      height={height}
    />
    <Rect
      fill={colors.lightestGrey}
      x={width * 3 + 15}
      y="0"
      width={width}
      height={height}
    />
  </ContentLoader>
);

const Gallery = ({
  images,
  openImage,
  isLoading,
  width,
  height,
  containerStyle,
  itemStyle,
  pickProp,
  ...flatListProps
}) => (
  <View style={[s.container, { minHeight: height }, containerStyle]}>
    {isLoading && (<GalleryLoader width={width} height={height} />)}
    {!isLoading && (
      <FlatList
        horizontal
        itemHeight={height}
        refreshing={isLoading}
        ruleShowLoading={(data) => data.length <= 1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={images}
        keyExtractor={(item, index) => `${item}-${index}`}
        ListFooterComponent={null}
        renderItem={({ item, index, itemHeight }) => {
          const uri = R.is(Object, item) ? item[pickProp] : item;

          return (
            <Touchable onPress={() => openImage(index)} >
              <Image
                containerStyle={[s.img, { height: itemHeight }, itemStyle]}
                uri={uri}
              />
            </Touchable>
          );
        }}
        {...flatListProps}
      />
    )}
  </View>

);

Gallery.propTypes = {
  containerStyle: ViewPropTypes.style,
  height: T.number,
  images: T.array,
  isLoading: T.bool,
  itemStyle: ViewPropTypes.style,
  openImage: T.func,
  pickProp: T.string,
  width: T.number
};

export default pure(Gallery);
