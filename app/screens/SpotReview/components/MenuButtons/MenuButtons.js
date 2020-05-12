import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { Text, Rating, CopilotStep } from '@components';
import { dimensions } from '@styles';
import s from './styles';

const MenuButtons = ({ pullRating, onGoToPoll, displayCopilot }) => (
  <View style={s.container}>
    <Text style={s.rateText}>Tap to Rate:</Text>
    <CopilotStep
      stepProps={displayCopilot && {
        text: I18n.t('copilot.set_place_rating'),
        order: 1,
        name: 'rating'
      }}
    >
      <Rating
        type="heartEmpty"
        onPress={onGoToPoll}
        size={dimensions.indent * 2}
        rating={pullRating}
        containerStyle={s.rateContainerStyle}
      />
    </CopilotStep>
  </View>
);


MenuButtons.propTypes = {
  displayCopilot: T.bool,
  onGoToPoll: T.func,
  pullRating: T.number
};

export default MenuButtons;
