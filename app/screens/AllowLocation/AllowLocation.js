import React from 'react';
import T from 'prop-types';
import { Image, View } from 'react-native';
import I18n from 'react-native-i18n';
import {
  Button,
  Text,
  StatusBar,
} from '../../components';
import styles from '../../styles';
import Theme from '../../components/Container';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const image = require('../../assets/images/allow_location.png');

const AllowLocation = ({
  onDone,
  back,
  theme: {
    s,
    colors,
  },
}) => (
  <Theme style={[styles.fillAll, s.root]}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={colors.statusBar}
    />
    <View style={s.titleContainer}>
      <Text style={s.title}>
        Review places and
      </Text>
      <Text style={s.title}>
        Suggest new ones on the map!
      </Text>
    </View>
    <View style={s.imageContainer}>
      <Image
        source={image}
        style={s.image}
      />
    </View>
    <View style={s.textContainer}>
      <Text style={s.text}>
        {I18n.t('allow_locations.askPermission')}
      </Text>
    </View>
    <Button
      containerStyle={s.buttonGreatContainer}
      backgroundColor={colors.activePrimary}
      color={colors.white}
      title={I18n.t('great_lets_go')}
      onPress={onDone}
    />
    <Button
      containerStyle={s.buttonSkipContainer}
      title={I18n.t('skip')}
      onPress={back}
    />
  </Theme>
);

AllowLocation.propTypes = {
  theme: T.object,
  onDone: T.func,
  back: T.func,
};

export default createScreen(AllowLocation, screens.AllowLocation);
