import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import NumericInput from 'react-native-numeric-input';

import { Container, Text, Button, Popover, Switch, CustomHeader, BackBtn } from '../../components';
import s from './style';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import { colors, dimensions } from '../../styles';

const [
  CHECK_BOX,
  NUMBER,
] = [
  'CHECK_BOX',
  'NUMBER',
];

const Item = ({
  title, type, value, onChange, text, ...props // eslint-disable-line
}) => (
  <View
    style={s.itemContainer}
  >
    <View style={s.titleContainer}>
      <Popover
        title={title}
        contentStyle={s.popover}
      >
        <Text>{text}</Text>
      </Popover>
    </View>
    <View style={s.inputContainer}>
      {NUMBER === type && (
        <NumericInput
          totalWidth={dimensions.verticalIndent * 13}
          totalHeight={dimensions.verticalIndent * 4}
          iconSize={dimensions.verticalIndent * 4}
          step={1}
          valueType="real"
          roundedd
          initValue={value}
          textColor={colors.activePrimary}
          iconStyle={s.icon}
          containerStyle={s.containerStyle}
          rightButtonBackgroundColor={colors.activePrimary}
          leftButtonBackgroundColor={colors.activePrimary}
          borderColor={colors.activePrimary}
          minValue={1}
          maxValue={100}
          onChange={onChange}
          {...props}
        />
      )}
      {CHECK_BOX === type && (
        <Switch
          value={value}
          onValueChange={onChange}
        />
      )}
    </View>
  </View>
);

const SettingGeolocations = ({
  onChangeSettings,
  isReadyToSubmit,
  activityRecognitionInterval,
  onChangeActivityRecognitionInterval,
  stationaryRadius,
  onChangeStationaryRadius,
  stopOnStationary,
  onChangeStopOnStationary,
  distanceFilter,
  onChangeDistanceFilter,
  stopTimeout,
  onChangeStopTimeout,
  useSignificantChangesOnly,
  onChangeUseSignificantChangesOnly,
  debug,
  onChangeDebug,
  onSendLocation,
  minimumActivityRecognitionConfidence,
  onChangeMinimumActivityRecognitionConfidence,
  disableStopDetection,
  onChangeDisableStopDetection,
  resetSettings,
}) => {
  const common = [{
    title: 'Disable stop detection',
    text: 'По умолчанию:false . Отключить систему обнаружения остановки на основе акселерометра. Не рекомендуется',  // eslint-disable-line
    value: disableStopDetection,
    onChange: onChangeDisableStopDetection,
    type: CHECK_BOX,
  }, {
    title: 'Stop on stationary',
    text: 'Плагин может по желанию автоматически остановить отслеживание, когда stopTimeout таймер истечет.',  // eslint-disable-line
    value: stopOnStationary,
    onChange: onChangeStopOnStationary,
    type: CHECK_BOX,
  }, {
    title: 'Debug',
    text: 'По умолчанию false. Когда установлено true, плагин будет издавать отладочные звуки и уведомления о событиях жизненного цикла BackgroundGeolocation .',  // eslint-disable-line
    value: debug,
    onChange: onChangeDebug,
    type: CHECK_BOX,
  }, {
    title: 'Activity recognition interval (ms)',
    text: 'По умолчанию 10000(10 секунд). Это прежде всего вариант Android, поскольку только Android может постоянно контролировать API обнаружения активности в фоновом режиме (iOS использует «стационарную геозонность» для обнаружения движения устройства). Желаемое время между обнаружением активности. Большие значения приведут к меньшему количеству обнаружений активности при увеличении срока службы батареи. Значение 0 приведет к обнаружению активности с максимально возможной скоростью.', // eslint-disable-line
    step: 500,
    minValue: 500,
    maxValue: 100000,
    value: activityRecognitionInterval,
    onChange: onChangeActivityRecognitionInterval,
    type: NUMBER,
  }, {
    title: 'Stop Timeout (min)',
    text: 'Количество минут ожидания перед отключением служб местоположения после того, как система ActivityRecognition System (ARS) обнаруживает, что устройство STILL', // eslint-disable-line
    value: stopTimeout,
    onChange: onChangeStopTimeout,
    type: NUMBER,
  }, {
    title: 'Distance filter (m)',
    text: 'Минимальное расстояние (измеренное в метрах) устройство должно перемещаться горизонтально до того, как будет создано событие обновления.\n' + '\n' + 'Однако по умолчанию distanceFilterон автоматически вычисляется плагином: когда скорость увеличивается, distanceFilterувеличивается; когда скорость уменьшается, так тоже distanceFilter.', // eslint-disable-line
    value: distanceFilter,
    onChange: onChangeDistanceFilter,
    type: NUMBER,
  }, {
    title: 'Minimum activity recognition confidence (%)',
    text: 'По умолчанию:75 . Каждый результат распознавания активности, возвращаемый API, помечается уровнем «достоверности», выраженным как %. Вы можете установить желаемое доверие, чтобы вызвать изменение состояния.', // eslint-disable-line
    value: minimumActivityRecognitionConfidence,
    onChange: onChangeMinimumActivityRecognitionConfidence,
    type: NUMBER,
  }];

  const iOS = [{
    title: 'Use significant changes only',
    text: 'По умолчанию false. Установите true, чтобы отключить постоянное отслеживание фона и использовать только API существенных изменений iOS .', // eslint-disable-line
    value: useSignificantChangesOnly,
    onChange: onChangeUseSignificantChangesOnly,
    type: CHECK_BOX,
  }, {
    title: 'Stationary radius (m)',
    text: '[iOS only] Минимальное расстояние, которое устройство должно выходить за пределы стационарного местоположения, для агрессивного фонового отслеживания.\n' + '\n' + '⚠️ Примечание: iOS не обнаружит точного момента, когда устройство выйдет из стационарного радиуса. В нормальных условиях это типично\n' + 'возьмите ~ 200 метров движения, прежде чем плагин начнет отслеживать.\n' + '\n' + 'Настройка stationaryRadius: 0не имеет НИКАКОГО ВЛИЯНИЯ . На самом деле плагин навязывает минимум stationaryRadiusиз 25и в-практики, родной API не будет отвечать , по крайней мере , 200 метров.', // eslint-disable-line
    value: stationaryRadius,
    onChange: onChangeStationaryRadius,
    type: NUMBER,
  }];

  return (
    <Container>
      <CustomHeader
        leftComponent={<BackBtn />}
        centerComponent={{ text: 'Settings geolocation' }}
      />
      <ScrollView style={s.container}>
        <Button
          title="Send location"
          titleStyle={s.button}
          containerStyle={s.containerButton}
          onPress={onSendLocation}
        />
        <View style={s.part}>
          <Text style={s.center} type="h2">Common</Text>
          {common.map(el => <Item key={el.title} {...el} />)}
        </View>
        <View style={s.part}>
          <Text style={s.center} type="h2">iOS</Text>
          {iOS.map(el => <Item key={el.title} {...el} />)}
        </View>
        <Button
          title="Reset to default"
          titleStyle={s.button}
          containerStyle={s.containerButton}
          onPress={resetSettings}
        />
        <Button
          title="Set settings"
          titleStyle={s.button}
          containerStyle={s.containerButton}
          containerDisabled={s.disabled}
          onPress={onChangeSettings}
          disabled={!isReadyToSubmit}
        />
      </ScrollView>
    </Container>
  );
};

SettingGeolocations.propTypes = {
  onChangeSettings: T.func,
  onSendLocation: T.func,
  activityRecognitionInterval: T.number,
  onChangeActivityRecognitionInterval: T.func,
  stationaryRadius: T.number,
  onChangeStationaryRadius: T.func,
  isReadyToSubmit: T.bool,
  stopOnStationary: T.bool,
  onChangeStopOnStationary: T.func,
  distanceFilter: T.number,
  onChangeDistanceFilter: T.func,
  stopTimeout: T.number,
  onChangeStopTimeout: T.func,
  useSignificantChangesOnly: T.bool,
  onChangeUseSignificantChangesOnly: T.func,
  debug: T.bool,
  onChangeDebug: T.func,
  minimumActivityRecognitionConfidence: T.number,
  onChangeMinimumActivityRecognitionConfidence: T.func,
  disableStopDetection: T.bool,
  onChangeDisableStopDetection: T.func,
  resetSettings: T.func,
};

export default createScreen(SettingGeolocations, screens.SettingGeolocations);
