import React from 'react';
import T from 'prop-types';
import R from 'ramda';
import { StyleSheet } from 'react-native';
import I18n from 'react-native-i18n';

import {
  Touchable,
  Text,
  FlatList,
  Container,
  CustomHeader,
  BackBtn,
} from '../../components';
import { dimensions, colors } from '../../styles';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';

const styles = StyleSheet.create({
  content: {
    paddingVertical: dimensions.doubleIndent,
    backgroundColor: colors.transparent,
  },
  item: {
    paddingHorizontal: dimensions.indent * 1.4,
    paddingVertical: dimensions.indent * 0.7,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C8C7CC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const renderItem = ({ item: { title, onPress } }) => ( // eslint-disable-line react/prop-types
  <Touchable
    key={title}
    onPress={onPress}
    style={styles.item}
  >
    <Text type="label">{title}</Text>
  </Touchable>
);

const TakingABreak = ({
  onSignOut,
  goToScreen,
  onRequestGDPRData,
}) => {
  const listItems = [{
    title: I18n.t('other.sign_out'),
    onPress: onSignOut,
  },
  {
    title: I18n.t('other.location_settings'),
    onPress: goToScreen(screens.LocationSettings),
  },
  {
    title: I18n.t('other.request_data_about_me'),
    onPress: onRequestGDPRData,
  }];
  return (
    <Container>
      <CustomHeader
        leftComponent={<BackBtn color={colors.white} />}
        backgroundColor={colors.purple}
        centerComponent={{
          style: { color: colors.white },
          text: 'Taking a break',
        }}
      />
      <FlatList
        data={listItems}
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        ItemSeparatorComponent={null}
        keyExtractor={R.prop('title')}
        listEmptyText="No data"
        initialNumToRender={10}
      />
    </Container>
  );
};

TakingABreak.propTypes = {
  onSignOut: T.func,
  goToScreen: T.func,
  onRequestGDPRData: T.func,
};

export default createScreen(TakingABreak, screens.SelectLegalAgreement);
