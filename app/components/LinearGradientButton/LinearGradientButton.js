import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

export default class LinearGradientButton extends PureComponent {
  static propTypes = {
    colors: PropTypes.array,
    disabled: PropTypes.bool.isRequired,
    disabledColors: PropTypes.array,
    end: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    start: PropTypes.object,
    styleContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    styleGradient: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    styleText: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    styleView: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    styleContainer: {},
    styleView: {},
    styleText: {},
    styleGradient: {},
    start: { x: 0.0, y: 0.5 },
    end: { x: 1, y: 0.5 },
    colors: ['#1c31d5', '#1c31d5', '#1c31d5'],
    disabledColors: ['#a6a6a6', '#a6a6a6', '#a6a6a6'],
    disabled: false
  };

  render() {
    const {
      styleContainer,
      disabled,
      onClick,
      start,
      end,
      disabledColors,
      colors,
      styleGradient,
      styleView,
      styleText,
      title
    } = this.props;
    return (
      <View style={[styles.containerButton, styleContainer]}>
        <TouchableOpacity disabled={disabled} onPress={onClick || null}>
          <LinearGradient
            start={start}
            end={end}
            colors={(disabled && disabledColors) || colors}
            style={[styles.buttonGradient, styleGradient]}
          >
            <View style={[styles.buttonView, styleView]}>
              {title && (<Text style={[styles.buttonText, styleText]}>{title}</Text>)}
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
