import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';

import { Button } from '../../../../components';
import { colors } from '../../../../styles';
import s from './styles';

const Actions = ({ onAccept, onDecline }) => (
  <View style={s.container}>
    <Button
      title="Decline"
      containerStyle={s.button}
      backgroundColor={colors.lightestGrey}
      color={colors.black}
      onPress={onDecline}
    />
    <Button
      title="Accept"
      containerStyle={s.button}
      backgroundColor={colors.purple}
      color={colors.white}
      onPress={onAccept}
    />
  </View>
);

Actions.propTypes = {
  onAccept: T.func,
  onDecline: T.func,
};

export default Actions;
