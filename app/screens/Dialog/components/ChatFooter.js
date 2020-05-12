import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import { Text } from '../../../components';

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#aaa',
  },
});

const ChatFooter = ({ interlocutor }) => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>
      {I18n.t('messages.interlocutor_typing').replace('{fullName}', interlocutor.fullName)}
    </Text>
  </View>
);

ChatFooter.propTypes = {
  interlocutor: PropTypes.object.isRequired,
};

export default ChatFooter;
