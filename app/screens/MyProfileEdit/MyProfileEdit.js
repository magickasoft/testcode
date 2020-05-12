import React from 'react';
import { Animated, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { withProps } from 'recompose';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import { date } from '@utils/helpers';

import s from './style';
import { Input, Button, Touchable, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import { colors } from '../../styles';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth',
})(Input);

const MyProfileEdit = ({
  onChangeName,
  name,
  lastName,
  aboutMe,
  onChangeAboutMe,
  onChangeLastName,
  isReadyToSubmit,
  onSubmit,
  getRef,
  setIdRef,
  onChangeBirthday,
  isVisibleDatePicker,
  toggleVisibleDatePicker,
  birthday,
}) => {
  const bday = birthday ? date.toFormat(new Date(birthday)) : '';

  return (
    <Animated.View style={s.container}>
      <CustomHeader
        leftComponent={<BackBtn />}
        backgroundColor={colors.backgroundPrimary}
        centerComponent={{
          text: I18n.t('edit_profile.title'),
        }}
      />
      <View style={s.wrapper}>
        <TextInput
          id="name"
          placeholder={I18n.t('edit_profile.placeholder_name')}
          label={I18n.t('edit_profile.placeholder_name')}
          onChangeText={onChangeName}
          value={name}
          keyboardType="email-address"
          authFocus
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => getRef('lastName').focus()}
        />
        <TextInput
          id="lastName"
          placeholder={I18n.t('edit_profile.placeholder_last_name')}
          label={I18n.t('edit_profile.placeholder_last_name')}
          onChangeText={onChangeLastName}
          value={lastName}
          returnKeyType="next"
          inputRef={setIdRef}
          onSubmitEditing={() => getRef('aboutMe').focus()}
        />
        <TextInput
          id="aboutMe"
          placeholder={I18n.t('edit_profile.placeholder_about_me')}
          label={I18n.t('edit_profile.placeholder_about_me')}
          onChangeText={onChangeAboutMe}
          value={aboutMe}
          inputRef={setIdRef}
          multiline
          style={s.textArea}
          secondContainerStyle={s.containerTextArea}
        />
        <Touchable onPress={toggleVisibleDatePicker}>
          <View pointerEvents="box-only">
            <TextInput
              type="auth"
              label="Birthday"
              editable={false}
              id="birthday"
              placeholder="Birthday"
              placeholderStyle={s.labelStyle}
              value={bday}
              returnKeyType="done"
              inputRef={setIdRef}
              onSubmitEditing={() => isReadyToSubmit && onSubmit()}
            />
          </View>
        </Touchable>
        <DateTimePicker
          isVisible={isVisibleDatePicker}
          onConfirm={value => {
            onChangeBirthday(value);
            toggleVisibleDatePicker();
          }}
          onCancel={toggleVisibleDatePicker}
        />
      </View>
      <Button
        title={I18n.t('edit_profile.button_done')}
        titleStyle={s.button}
        containerStyle={s.containerButton}
        containerDisabled={s.disabled}
        onPress={onSubmit}
        disabled={!isReadyToSubmit}
      />
    </Animated.View>
  );
};

MyProfileEdit.propTypes = {
  getRef: T.func,
  name: T.string,
  lastName: T.string,
  isReadyToSubmit: T.bool,
  onChangeName: T.func,
  onChangeLastName: T.func,
  onSubmit: T.func,
  setIdRef: T.func,
  aboutMe: T.string,
  onChangeAboutMe: T.func,
  onChangeBirthday: T.func,
  isVisibleDatePicker: T.bool,
  toggleVisibleDatePicker: T.func,
  birthday: T.oneOfType([T.instanceOf(Date), T.string]),
};


export default createScreen(MyProfileEdit, screens.MyProfileEdit);
