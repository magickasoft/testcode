import React from 'react';
import { ScrollView } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import { Container, CustomHeader, BackBtn } from '../../components';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';
import EndUserLicenseAgreement from './Components/EndUserLicenseAgreement';
import NonDiscriminationPolicy from './Components/NonDiscriminationPolicy';
import Actions from './Components/Actions';

const getTitle = (displayType) => I18n.t(`app_information.${displayType}_title`);

const components = {
  termsOfService: TermsOfService,
  privacyPolicy: PrivacyPolicy,
  eula: EndUserLicenseAgreement,
  nonDiscriminationPolicy: NonDiscriminationPolicy,
};

const AppInformation = ({
  theme: {
    colors,
    s,
  },
  displayType = 'eula',
  displayButtons,
  onAccept,
  onDecline,
}) => {
  const Component = components[displayType];
  return (
    <Container style={s.root}>
      <CustomHeader
        leftComponent={!displayButtons && <BackBtn color={colors.white} />}
        backgroundColor={colors.purple}
        centerComponent={{
          style: { color: colors.white },
          text: getTitle(displayType),
        }}
      />
      <ScrollView style={s.container}>
        <Component />
      </ScrollView>
      {displayButtons && (
        <Actions
          onAccept={onAccept}
          onDecline={onDecline}
        />
      )}
    </Container>
  );
};

AppInformation.propTypes = {
  theme: T.object,
  displayType: T.oneOf([
    'termsOfService',
    'privacyPolicy',
    'eula',
    'nonDiscriminationPolicy',
  ]).isRequired,
  displayButtons: T.bool,
  onAccept: T.func,
  onDecline: T.func,
};

export default createScreen(AppInformation, screens.AppInformation);
