import React from 'react';
import { View, Image } from 'react-native';

import s from './style';
import { Container } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const logo = require('../../assets/images/spec.png');

const RootLoading = () => (
  <Container style={s.container}>
    <View style={s.logoContainer}>
      <Image
        source={logo}
        style={s.logo}
      />
    </View>
  </Container>
);

export default createScreen(RootLoading, screens.RootLoading);
