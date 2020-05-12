import React from 'react';
import { View, TouchableOpacity, TextInput, Platform } from 'react-native';
import T from 'prop-types';
import CountryPicker from 'react-native-country-picker-modal';

import s from './style';
import { Text, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const brandColor = '#744BAC';

const VerificationCode = ({
  enterCode,
  country: {
    cca2,
    callingCode,
  },
  changeCountry,
  onSubmitEditing,
  onChangeText,
  setRefCountryPicker,
  setRefTextInput,
  tryAgain,
}) => {
  const headerText = `What's your ${enterCode ? 'verification code' : 'phone number'}?`;
  const buttonText = enterCode ? 'Verify confirmation code' : 'Send confirmation code';
  const textStyle = enterCode ? {
    height: 50,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  } : {};

  return (
    <View style={s.container}>
      <CustomHeader
        leftComponent={<BackBtn />}
        centerComponent={{ text: 'Phone verification' }}
      />
      <Text style={s.header}>{headerText}</Text>
      <View style={s.form}>
        <View style={s.inputContainer}>
          { enterCode
            ? <View />
            : <CountryPicker
              ref={setRefCountryPicker}
              closeable
              style={s.countryPicker}
              onChange={changeCountry}
              cca2={cca2}
              translation="eng"
            />
           }
          { enterCode
          ? (
            <View />
          ) : (
            <View style={s.callingCodeView}>
              <Text style={s.callingCodeText}>+{callingCode}</Text>
            </View>
          )}
          <TextInput
            ref={setRefTextInput}
            name={enterCode ? 'code' : 'phoneNumber'}
            type="TextInput"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
            style={[s.textInput, textStyle]}
            returnKeyType="go"
            blurOnSubmit={false}
            autoFocus
            placeholderTextColor={brandColor}
            selectionColor={brandColor}
            maxLength={enterCode ? 6 : 20}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <TouchableOpacity style={s.button} onPress={onSubmitEditing}>
          <Text style={s.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        { enterCode
          ? (
            <View>
              <Text style={s.wrongNumberText} onPress={tryAgain}>
              Enter the wrong number or need a new code?
              </Text>
            </View>
          ) : (
            <View>
              <Text style={s.disclaimerText}>
              By tapping Send confirmation code above, we will send you an SMS to confirm
              your phone number. Message &amp; data rates may apply.
              </Text>
            </View>
          )
        }
      </View>
    </View>
  );
};

VerificationCode.propTypes = {
  enterCode: T.bool,
  country: T.shape({
    cca2: T.string,
    callingCode: T.string,
  }),
  changeCountry: T.func,
  onSubmitEditing: T.func,
  onChangeText: T.func,
  setRefCountryPicker: T.func,
  setRefTextInput: T.func,
  tryAgain: T.func,
};

export default createScreen(VerificationCode, screens.VerificationCode);
