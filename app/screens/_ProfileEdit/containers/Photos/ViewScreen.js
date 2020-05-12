import React from 'react';
import { View, Image } from 'react-native';
import R from 'ramda';
import T from 'prop-types';

import s from './style';
import { Button, FlatList, Tab, Container } from '../../../../components';
import styles from '../../../../styles';
import { withTheme } from '../../../../utils/enhancers';


// eslint-disable-next-line
const _renderItem = theme => ({ item }) => (
  <View style={theme.s.item}>
    <Image
      source={{ uri: item.sourceURL }}
      resizeMode="cover"
      style={theme.s.image}
    />
  </View>
);

const routes = [{
  title: 'PUBLIC',
}, {
  title: 'NAME1',
}, {
  title: 'NAME2',
}];

const Photos = ({
  getPhotos,
  photos,
  theme,
}) => {
  const OneTab = () => (
    <Container style={theme.s.container}>
      <FlatList
        data={photos}
        numColumns={2}
        style={styles.fillAll}
        contentContainerStyle={s.contentContainerStyle}
        renderItem={_renderItem(theme)}
        ItemSeparatorComponent={null}
        keyExtractor={R.prop('sourceURL')}
        listEmptyText="No photos"
      />
      <Button
        onPress={getPhotos}
        title="Add photos"
        style={{ marginVertical: 20 }} //eslint-disable-line
      />
    </Container>
  );

  return (
    <View style={styles.fillAll}>
      <Tab
        styleContainerTopBottom={theme.s.tabBar}
        routes={routes}
      >
        <OneTab />
        <OneTab />
      </Tab>
    </View>
  );
};

Photos.propTypes = {
  getPhotos: T.func,
  photos: T.array,
  theme: T.object,
};

export default withTheme(s)(Photos);
