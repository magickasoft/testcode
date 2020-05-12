import React from 'react';
import { Animated, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { withProps } from 'recompose';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import { stringValidator, date, constants } from '@utils/helpers';

import { Input, Button, Touchable, Container, Switch, TextNew, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import styles from '../../styles';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth',
})(Input);

const RegisterUser = ({
  onChangeName,
  name,
  lastName,
  onChangeLastName,
  isReadyToSubmit,
  onSubmit,
  onChangeBirthday,
  isVisibleDatePicker,
  toggleVisibleDatePicker,
  birthday,
  getRef,
  setIdRef,
  theme: {
    s,
    colors,
  },
  onChangeAccept,
  accept,
  onOpenTermOfUse,
  onOpenPrivacyPolicy,
}) => {
  const bday = birthday ? date.toFormat(new Date(birthday)) : '';

  return (
    <Container>
      <CustomHeader
        leftComponent={<BackBtn color={colors.white} />}
        backgroundColor={colors.purple}
        centerComponent={{
          style: { color: colors.white },
          text: I18n.t('sign_up.headerLabel'),
        }}
      />
      <Animated.View style={s.container}>
        <TextInput
          type="auth"
          isAnimatedPlaceholder
          id="name"
          placeholder="Name"
          onChangeText={onChangeName}
          value={name}
          keyboardType="email-address"
          authFocus
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => getRef('lastName').focus()}
        />
        <TextInput
          type="auth"
          isAnimatedPlaceholder
          id="lastName"
          placeholder="Last name"
          onChangeText={onChangeLastName}
          value={lastName}
          returnKeyType="next"
          inputRef={setIdRef}
          onSubmitEditing={() => getRef('birthday').focus()}
        />
        <Touchable onPress={toggleVisibleDatePicker}>
          <View pointerEvents="box-only">
            <TextInput
              type="auth"
              isAnimatedPlaceholder
              editable={false}
              id="birthday"
              placeholder="Birthday"
              value={bday}
              returnKeyType="done"
              inputRef={setIdRef}
              onSubmitEditing={() => isReadyToSubmit && onSubmit()}
            />
          </View>
        </Touchable>
        {bday.length > 0 && !stringValidator.isMinAgeAudience(bday) && (
          <TextNew style={s.errorText} type="error">
            {I18n.t('sign_up.notSuitableByAgeAudience', { years: constants.minAgeAudience })}
          </TextNew>
        )}
        <View style={s.accept}>
          <View style={s.row}>
            <TextNew type="reviews">
              {`${I18n.t('on_boarding.accept')} `}
            </TextNew>
            <TextNew type="link" onPress={onOpenTermOfUse}>
              {I18n.t('on_boarding.term_of_use')}
            </TextNew>
            <TextNew type="reviews">
              {` ${I18n.t('on_boarding.and')} `}
            </TextNew>
            <TextNew type="link" onPress={onOpenPrivacyPolicy}>
              {I18n.t('on_boarding.privacy')}
            </TextNew>
          </View>
          <Switch
            backgroundActive={colors.activePrimary}
            value={accept}
            onValueChange={() => onChangeAccept(!accept)}
          />
        </View>
        <Button
          type="auth"
          title={I18n.t('sign_up.btnDone')}
          containerDisabled={s.disabled}
          onPress={onSubmit}
          disabled={!isReadyToSubmit}
          containerStyle={styles.marginVertical3x}
        />
        <DateTimePicker
          isVisible={isVisibleDatePicker}
          onConfirm={value => {
            onChangeBirthday(value);
            toggleVisibleDatePicker();
          }}
          onCancel={toggleVisibleDatePicker}
        />
      </Animated.View>
    </Container>

  );
};

RegisterUser.propTypes = {
  getRef: T.func,
  name: T.string,
  isVisibleDatePicker: T.bool,
  toggleVisibleDatePicker: T.func,
  lastName: T.string,
  isReadyToSubmit: T.bool,
  onChangeName: T.func,
  onChangeLastName: T.func,
  onChangeBirthday: T.func,
  birthday: T.oneOfType([T.instanceOf(Date), T.string]),
  onSubmit: T.func,
  setIdRef: T.func,
  theme: T.object,
  onChangeAccept: T.func,
  accept: T.bool,
  onOpenTermOfUse: T.func,
  onOpenPrivacyPolicy: T.func,
};

export default createScreen(RegisterUser, screens.RegisterUser);
