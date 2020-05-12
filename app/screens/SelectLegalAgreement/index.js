import React from 'react';
import T from 'prop-types';
import R from 'ramda';
import { StyleSheet } from 'react-native';

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
import { screens, platform } from '../../constants';

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

const listItems = [
  { title: 'End User License Agreement', type: 'eula' },
  { title: 'Non Discrimination Policy', type: 'nonDiscriminationPolicy' },
  { title: 'Privacy Policy', type: 'privacyPolicy' },
  { title: 'Terms of Service', type: 'termsOfService' },
];

if (platform.android) {
  listItems.shift();
}

const renderItem = navigator => ({ item: { title, type } }) => ( // eslint-disable-line react/prop-types
  <Touchable
    key={title}
    onPress={() => navigator.push(screens.AppInformation, { passProps: { displayType: type } })}
    style={styles.item}
  >
    <Text type="label">{title}</Text>
  </Touchable>
);

const SelectLegalAgreement = ({ navigator }) => (
  <Container>
    <CustomHeader
      backgroundColor={colors.purple}
      leftComponent={<BackBtn color={colors.white} />}
      centerComponent={{
        style: { color: colors.white },
        text: 'Legal Agreements',
      }}
    />
    <FlatList
      data={listItems}
      contentContainerStyle={styles.content}
      renderItem={renderItem(navigator)}
      ItemSeparatorComponent={null}
      keyExtractor={R.prop('title')}
      listEmptyText="No data"
      initialNumToRender={10}
    />
  </Container>
);

SelectLegalAgreement.propTypes = {
  navigator: T.object,
};

export default createScreen(SelectLegalAgreement, screens.SelectLegalAgreement);
