/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import I18n from 'react-native-i18n';

import { geolocation } from '../../../services';
import { Text } from '../../../components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  infoContainer: {
    padding: 10,
  },
  sentText: {
    fontSize: 16,
    color: '#fff',
  },
});

class ActionView extends React.Component {
  handleConfirm = async () => {
    const position = await geolocation.getCurrentPosition();

    const { longitude, latitude } = R.pick(['longitude', 'latitude'], position.coords);
    const { onSend, onAnswerLocationRequest, currentMessage } = this.props;
    onSend([{
      location: {
        latitude,
        longitude,
      },
    }]);
    onAnswerLocationRequest(currentMessage._id, true);
  }

  handleReject = () => {
    const { onAnswerLocationRequest, currentMessage } = this.props;
    onAnswerLocationRequest(currentMessage._id, false);
  }

  render() {
    const { isSentMessage, currentMessage: { locationRequest } } = this.props;

    if (locationRequest.responded) {
      const text = locationRequest.isAccepted
        ? I18n.t('messages.location_accepted')
        : I18n.t('messages.location_rejected');
      return (
        <View style={styles.infoContainer}>
          <Text style={isSentMessage ? styles.sentText : styles.text}>{text}</Text>
        </View>
      );
    }
    if (isSentMessage) {
      return (
        <View style={styles.infoContainer}>
          <Text style={styles.sentText}>{I18n.t('messages.location_requested')}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleConfirm}
          style={styles.button}
        >
          <Text style={styles.text}>{I18n.t('messages.button_send_location')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleReject}
          style={styles.button}
        >
          <Text style={styles.text}>{I18n.t('messages.button_reject_location')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
ActionView.propTypes = {
  onSend: PropTypes.func.isRequired,
  isSentMessage: PropTypes.bool.isRequired,
  currentMessage: PropTypes.object.isRequired,
  onAnswerLocationRequest: PropTypes.func.isRequired,
};

export default ActionView;
