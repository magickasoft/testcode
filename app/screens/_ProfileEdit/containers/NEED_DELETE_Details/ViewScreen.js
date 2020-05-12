import React from 'react';
import T from 'prop-types';
import R from 'ramda';

import s from './style';
import {
  FlatList,
  Touchable,
  Text,
} from '../../../../components';
import styles from '../../../../styles';


// eslint-disable-next-line
const _renderItem = ({ item: { onPress, title } }) => (
  <Touchable style={s.item} onPress={onPress}>
    <Text type="label">{title}</Text>
  </Touchable>
);


const Details = ({
  onLinkFacebook,
  onLinkGoogle,
  onGoToSignUpEmail,
}) => {
  const data = [{
    title: 'Connect FB',
    onPress: onLinkFacebook,
  }, {
    title: 'Connect Google Plus',
    onPress: onLinkGoogle,
  }, {
    title: 'Connect email',
    onPress: onGoToSignUpEmail,
  }, {
    title: 'Connect LinkedIn',
  }, {
    title: 'Connect Twitter',
  }, {
    title: 'Link Instagram',
  }, {
    title: 'Verify ID',
  }];

  return (
    <FlatList
      data={data}
      style={styles.fillAll}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem}
      // ItemSeparatorComponent={null}
      keyExtractor={R.prop('title')}
      listEmptyText="No patients"
    />

  );
};

Details.propTypes = {
  onLinkFacebook: T.func,
  onLinkGoogle: T.func,
  onGoToSignUpEmail: T.func,
};

export default Details;
