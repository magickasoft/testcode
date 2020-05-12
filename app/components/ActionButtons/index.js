/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { View, Animated } from 'react-native';
import SeperatorActionButton from '../SeperatorActionButton';
import IconVector from '../IconVector';
import Text from '../Text';
import s from './styles';

const ButtonWithSeperator = ({ icon, text, disableSeperator }) => (
  <View style={s.container}>
    <View style={s.buttonContainer}>
       <Text style={s.text}>{text}</Text>
      <View style={s.button}>
        <IconVector {...icon} />
      </View>
    </View>
    { !disableSeperator && <SeperatorActionButton /> }
  </View>
);

const ActionButtons = ({
  visible = true,
  containerStyle,
  buttons = [],
}) => (
  visible
  &&
  <Animated.View style={containerStyle}>
    {
      buttons.map((button, index) => (
        <ButtonWithSeperator
          key={`${index}-${button.text}`} // eslint-disable-line
          icon={button.icon}
          text={button.text}
          disableSeperator={buttons.length -1 === index}
        />
    ))
    }
  </Animated.View>
);

ActionButtons.propTypes = {
  buttons: T.arrayOf(T.object),
};

export default ActionButtons;
