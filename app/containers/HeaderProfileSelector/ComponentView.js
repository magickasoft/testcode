import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';

import {
  Coins,
  ProfileSelector,
  Container,
  CopilotStep,
  CustomHeader,
  BackBtn,
} from '../../components';

const HeaderProfileSelector = ({
  title,
  balance = 0,
  currentProfile,
  myProfiles,
  coins,
  profiles,
  children,
  onPressProfile,
  onCreateProfile,
  toggleVisiblePopover,
  isVisiblePopover,
  onGoToSettings,
  theme: {
    colors,
    s,
  },
  copilotProfile,
  copilotCoin,
  backButton,
  ...props
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={backButton
        ? <BackBtn />
        : {
          style: { color: colors.textPrimary },
          text: title,
        }
      }
      centerComponent={!!profiles && (
        <CopilotStep stepProps={copilotProfile}>
          <ProfileSelector
            onPressProfile={onPressProfile}
            canCreateProfile={false}
            onCreateProfile={onCreateProfile}
            onGoToSettings={onGoToSettings}
            profiles={myProfiles}
            currentProfile={currentProfile}
            toggleVisiblePopover={toggleVisiblePopover}
            isVisiblePopover={isVisiblePopover}
            placement="bottom"
          />
        </CopilotStep>
      )}
      rightComponent={
        <View>
          {!!coins && (
            <CopilotStep
              stepProps={copilotCoin}
              Component={View}
            >
              <Coins balance={balance} />
            </CopilotStep>
          )}
          {!!children && children}
        </View>
      }
      {...props}
    />
  </Container>
);

HeaderProfileSelector.propTypes = {
  balance: T.number,
  currentProfile: T.object,
  title: T.string,
  coins: T.bool,
  profiles: T.bool,
  children: T.node,
  containerStyle: T.oneOfType([T.object, T.number, T.array]),
  myProfiles: T.array,
  onPressProfile: T.func,
  onCreateProfile: T.func,
  toggleVisiblePopover: T.func,
  isVisiblePopover: T.bool,
  onGoToSettings: T.func,
  theme: T.object,
  copilotProfile: T.oneOfType([T.object, T.bool]),
  copilotCoin: T.oneOfType([T.object, T.bool]),
  backButton: T.bool,
};

export default HeaderProfileSelector;
