import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import R from 'ramda';

import s from './style';
import { FlatList, Text, Touchable } from '../../../../components';
import styles from '../../../../styles';
import { has } from '../../../../utils/helpers/string';


const _renderItem = onPress => ({ item }) => { // eslint-disable-line
  const {
    familyName = '', givenName = '', phoneNumbers,
  } = item;

  return ( // eslint-disable-line
    <Touchable
      onPress={() => onPress(item)}
      style={s.item}
    >
      <View style={s.content}>
        <Text type="label">{`${has(familyName)}${givenName}`}</Text>
        <Text type="regular">
          {`${R.pathOr('don\'t has number', [0, 'number'], phoneNumbers)}`}
        </Text>
      </View>
    </Touchable>
  );
};

const Sms = ({
  data,
  onSendSms,
}) => (
  <FlatList
    data={data}
    style={styles.fillAll}
    contentContainerStyle={s.contentContainerStyle}
    renderItem={_renderItem(onSendSms)}
    keyExtractor={R.prop('recordID')}
    listEmptyText="No contacts"
  />
);

Sms.propTypes = {
  data: T.array,
  onSendSms: T.func,
};

export default Sms;
