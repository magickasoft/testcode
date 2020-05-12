import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Button } from '@components';
import s from './style';

const EarnPoints = ({ onGoToSpotsNotification }) => (
  <View style={s.root} >
    <Button
      title="Check in"
      titleStyle={s.button}
      containerStyle={s.containerButton}
      onPress={onGoToSpotsNotification}
    />
  </View>
);

EarnPoints.propTypes = {
  onGoToSpotsNotification: T.func
};

export default EarnPoints;
