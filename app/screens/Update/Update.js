import React from 'react';
import T from 'prop-types';

import {
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import s from './styles';
import { Button, Container, Text } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const image = require('../../assets/images/_AppIcon_512x512.png');

const Update = ({
  progress,
  syncMessage,
  syncImmediate,
  onSkip,
}) => (
  <Container>
    <View style={s.container} source={image}>
      <Image style={s.image} resizeMode="contain" source={image} />
      <Text style={s.title}>
        A new version is available
      </Text>
      <Text style={s.subTitle}>
        Update to enjoy the full potential of the application.
      </Text>
      <Text style={s.messages}>
        {progress && `${progress.receivedBytes} of ${progress.totalBytes} bytes received`}
      </Text>
      <Button
        onPress={syncImmediate}
        containerStyle={s.buttonContainer}
        titleStyle={s.buttonTitleStyle}
        title="Update"
      />
      <TouchableWithoutFeedback onPress={onSkip}>
        <View>
          <Text style={s.remindMe}>
            Remind me later
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={s.messages}>{syncMessage || ''}</Text>
    </View>
  </Container>
);

Update.propTypes = {
  progress: T.shape({
    receivedBytes: T.number,
    totalBytes: T.number,
  }),
  syncMessage: T.string,
  syncImmediate: T.func,
  onSkip: T.func,
};

export default createScreen(Update, screens.Update);
