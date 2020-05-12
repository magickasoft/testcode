import React from 'react';
import T from 'prop-types';
import { View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Container, Text, Input, CustomHeader, BackBtn } from '../../components';
import { screens } from '@constants';
import { createScreen } from '@navigation';

import s from './styles';

const PromoCode = ({ code, setCode, onSubmit }) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: 'Redeem' }}
    />
    <KeyboardAvoidingView style={s.keyboardView} behavior="padding">
      <Text style={s.promoText}>Promo code:</Text>
      <View style={s.inputContainer}>
        <Input
          id="description"
          onChangeText={setCode}
          value={code}
          multiline
          style={s.codeInput}
          secondContainerStyle={s.containerTextArea}
        />
      </View>
      <View style={s.pullToBottom}>
        <View style={s.buttonContainer}>
          <TouchableOpacity
            onPress={onSubmit}
            style={s.button}
          >
            <Text style={s.buttonText}>Redeem your code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  </Container>
);

PromoCode.propTypes = {
  code: T.string,
  setCode: T.func,
  onSubmit: T.func,
};

export default createScreen(PromoCode, screens.PromoCode);
