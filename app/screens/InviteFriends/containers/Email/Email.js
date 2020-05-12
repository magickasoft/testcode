import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import R from 'ramda';

import s from './style';
import { FlatList, Text, Touchable } from '../../../../components';
import styles from '../../../../styles';
import { has } from '../../../../utils/helpers/string';

const _renderItem = onPress =>
  ({item: { familyName, givenName, emailAddresses }}) => ( // eslint-disable-line
    <Touchable
      onPress={() => onPress(emailAddresses)}
      style={s.item}
    >
      <View style={s.content}>
        <Text type="label">{`${has(familyName)}${givenName}`}</Text>
        <Text type="regular">
          {`${
            R.pathOr('Does not have an email', [0, 'email'], emailAddresses)
          }`}
        </Text>
      </View>
    </Touchable>
  );

const Email = ({
  data,
  onSendEmail,
}) => (
  <FlatList
    data={data}
    style={styles.fillAll}
    contentContainerStyle={s.contentContainerStyle}
    renderItem={_renderItem(onSendEmail)}
    keyExtractor={R.prop('recordID')}
    listEmptyText="No contacts"
  />
);

Email.propTypes = {
  data: T.array,
  onSendEmail: T.func,
};

export default Email;
