import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './style';
import {
  Card,
  Image,
  Spinner,
  FlatList,
  Touchable,
  IconVector,
  Text,
} from '../../../../components';
import styles from '../../../../styles';
import { mockData } from './mockData';
import { withTheme } from '../../../../utils/enhancers';
import { Avatar } from '../../../../containers';

const icons = theme => ({
  bookmark: {
    type: 'IconCustom',
    size: 19,
    name: 'bookmark',
    color: theme.colors.activePrimary,
    containerStyle: theme.s.icon,
  },
  dots: {
    type: 'IconCustom',
    size: 19,
    name: 'dots',
    color: theme.colors.activePrimary,
    containerStyle: theme.s.icon,
  },
  heart: {
    type: 'IconCustom',
    size: 19,
    name: 'favorite-heart-button',
    color: theme.colors.activePrimary,
    containerStyle: theme.s.iconFooter,
  },
  comment: {
    type: 'IconCustom',
    size: 19,
    name: 'comment-white-oval-bubble',
    color: theme.colors.activePrimary,
    containerStyle: theme.s.iconFooter,
  },
  share: {
    type: 'IconCustom',
    size: 19,
    name: 'share',
    color: theme.colors.activePrimary,
    containerStyle: theme.s.iconFooter,
  },
  dotSingle: {
    type: 'Entypo',
    size: 19,
    name: 'dot-single',
    color: theme.colors.grey,
  },
});

const Button = ({
  onPress, // eslint-disable-line
  text, // eslint-disable-line
  containerStyle, // eslint-disable-line
  theme, // eslint-disable-line
  ...iconProps
}) => (
  <Touchable style={containerStyle} onPress={onPress}>
    <IconVector {...iconProps} />
    {text && <Text style={theme.s.footerText}>{text}</Text> }
  </Touchable>
);

const ListItem = ({
  id, title, avatar, date, uris, text, theme // eslint-disable-line
}) => (
  <Card>
    <View style={theme.s.cardHeader}>
      <Avatar
        size={35}
        uri={avatar}
      />
      <View style={theme.s.titleContainer}>
        <Text style={theme.s.title}>{title}</Text>
        <Text style={theme.s.date}>{date}</Text>
      </View>
      <Button
        onPress={() => null}
        {...(id !== 10 ? icons(theme).bookmark : icons(theme).dots)}
      />
      <Button
        onPress={() => null}
        {...(id !== 10 ? icons(theme).dots : icons(theme).bookmark)}
      />
    </View>
    <View style={theme.s.textContainer}>
      <Text style={theme.s.text}>{text}</Text>
    </View>
    <View style={theme.s.imagesRowOneContainer}>
      <Image
        uri={uris[0]}
        containerStyle={[theme.s.imageFirst, theme.s.marginRight]}
      />
      <Image
        uri={uris[1]}
        containerStyle={[theme.s.imageFirst, theme.s.marginLeft]}
      />
    </View>
    <View style={theme.s.imagesRowTwoContainer}>
      <Image
        uri={uris[2]}
        containerStyle={[theme.s.imageSecond, theme.s.marginRight]}
      />
      <Image
        uri={uris[3]}
        containerStyle={theme.s.imageSecond}
      />
      <Image
        uri={uris[4]}
        containerStyle={[theme.s.imageSecond, theme.s.marginLeft]}
      />
    </View>
    <View style={theme.s.info}>
      <Text style={theme.s.likeCount}>530 Likes</Text>
      <IconVector {...icons(theme).dotSingle} />
      <Text style={theme.s.commentCount}>25 Comments</Text>
    </View>
    <View style={theme.s.footer}>
      <Button
        theme={theme}
        onPress={() => null}
        text="Like"
        {...icons(theme).heart}
      />
      <Button
        theme={theme}
        onPress={() => null}
        text="Comment"
        {...icons(theme).comment}
      />
      <Button
        theme={theme}
        onPress={() => null}
        text="Share"
        {...icons(theme).share}
      />
    </View>
  </Card>
);

// eslint-disable-next-line
const _renderItem = (onGoToReview, theme) => ({ item }) =>
  <ListItem onPress={onGoToReview} theme={theme} {...item} />;

const NearbyBusinesses = ({
  data = mockData,
  loading,
  onGoToReview,
  theme,
}) => (
  <View style={styles.fillAll}>
    <FlatList
      ListFooterComponent={loading && Spinner}
      refreshing={loading}
      data={data}
      style={styles.fillAll}
      contentContainerStyle={theme.s.contentContainerStyle}
      renderItem={_renderItem(onGoToReview, theme)}
      ItemSeparatorComponent={null}
      listEmptyText={loading ? '' : 'No data'}
      keyExtractor={({ id }) => id.toString()}
    />
  </View>
);

NearbyBusinesses.propTypes = {
  onGoToReview: T.func,
  loading: T.bool,
  data: T.object,
  theme: T.object,
};

export default withTheme(s)(NearbyBusinesses);
