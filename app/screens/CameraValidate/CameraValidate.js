/* eslint-disable react/prop-types */
import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Animated from 'react-native-reanimated';
import { throttledAction } from '@utils/helpers/ui';
import { screens } from '@constants';
import { Container, BackBtn, CustomHeader, Button } from '@components';
import { createScreen } from '../../navigation';

const CameraValidate = ({
  theme: { s, colors },
  code,
  onBarCodeRead,
  validateCode,
  clearCode
}) => {
  const renderBarcode = ({ bounds, data }) => {
    const { origin, size: { width, height } } = bounds;
    return (
      <View
        key={`${data}${origin.x}`}
        style={[
          s.view,
          {
            width: Math.round(Number(width)),
            height: Math.round(Number(height)),
            left: Math.round(Number(origin.x)),
            top: Math.round(Number(origin.y))
          }
        ]}
      >
        <Text style={s.text}>
          {data}
        </Text>
      </View>
    );
  };

  const codeRead = throttledAction(onBarCodeRead);

  return (
    <Container style={s.container}>
      <RNCamera
        style={s.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onBarCodeRead={codeRead}
      >
        {code?.bounds && renderBarcode(code)}
      </RNCamera>
      {code && (
        <View style={s.btn}>
          <Button
            title={'Validate Code'}
            titleStyle={s.titleBtn}
            containerStyle={s.containerBtn}
            onPress={throttledAction(validateCode)}
          />
          <Button
            title={'Сancel'}
            titleStyle={[s.titleBtn, { color: colors.black }]}
            containerStyle={[s.containerBtn, { backgroundColor: colors.lightestGrey }]}
            onPress={throttledAction(clearCode)}
          />
        </View>
      )}
      <Animated.View style={s.content}>
        <CustomHeader
          containerStyle={s.containerStyle}
          leftComponent={<BackBtn color={colors.white} />}
        />
      </Animated.View>
    </Container>
  );
};

CameraValidate.propTypes = {
  clearCode: T.func,
  code: T.object,
  navigator: T.object,
  onBarCodeRead: T.func,
  theme: T.object,
  validateCode: T.func
};

export default createScreen(CameraValidate, screens.Camera);
