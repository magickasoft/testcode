import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import I18n from 'react-native-i18n';

import { IconVector, CopilotStep, Icon } from '../../../components';
import { geolocation } from '../../../services';

const styles = StyleSheet.create({
  icon: {
    color: '#999'
  },
  iconContainer: {
    marginBottom: 10,
    marginRight: 10
  }
});

const ActionButtons = ({
  text,
  onSend,
  onUploadPhoto,
  displayCopilot
}) => {
  if (text.trim().length > 0) return null;
  return (
    <React.Fragment>
      <CopilotStep
        Component={View}
        stepProps={displayCopilot && {
          text: I18n.t('copilot.send_new_photo'),
          order: 1,
          name: 'add-camera'
        }}
        style={styles.iconContainer}
      >
        <Icon
          name="photo"
          size={30}
          style={styles.icon}
          onPress={onUploadPhoto(true, true)}
        />
      </CopilotStep>
      <CopilotStep
        Component={View}
        stepProps={displayCopilot && {
          text: I18n.t('copilot.send_gallery_photo'),
          order: 2,
          name: 'add-gallery'
        }}
        style={styles.iconContainer}
      >
        <Icon
          name="image"
          size={30}
          style={styles.icon}
          onPress={onUploadPhoto(false)}
        />
      </CopilotStep>
      <CopilotStep
        Component={View}
        stepProps={displayCopilot && {
          text: I18n.t('copilot.share_location'),
          order: 3,
          name: 'location-send'
        }}
        style={styles.iconContainer}
      >
        <Icon
          name="myLocation"
          size={30}
          style={styles.icon}
          onPress={async () => {
            const position = await geolocation.getCurrentPosition();

            const { longitude, latitude } = R.pick(['longitude', 'latitude'], position.coords);
            onSend({ location: { latitude, longitude } });
          }}
        />
      </CopilotStep>
      <CopilotStep
        Component={View}
        stepProps={displayCopilot && {
          text: I18n.t('copilot.request_location'),
          order: 4,
          name: 'location-request'
        }}
        style={styles.iconContainer}
      >
        <Icon
          name="locationRequest"
          size={30}
          style={styles.icon}
          onPress={() => {
            onSend({ requestLocation: true });
          }}
        />
      </CopilotStep>
    </React.Fragment>
  );
};

ActionButtons.propTypes = {
  displayCopilot: PropTypes.bool,
  onSend: PropTypes.func,
  onUploadPhoto: PropTypes.func,
  text: PropTypes.string
};

export default ActionButtons;
