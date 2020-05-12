import RNcodePush from 'react-native-code-push';

const {
  CHECKING_FOR_UPDATE,
  DOWNLOADING_PACKAGE,
  AWAITING_USER_ACTION,
  INSTALLING_UPDATE,
  UP_TO_DATE,
  UPDATE_IGNORED,
  UPDATE_INSTALLED,
  UNKNOWN_ERROR,
} = RNcodePush.SyncStatus;

export const messages = {
  [CHECKING_FOR_UPDATE]: 'Checking for update.',
  [DOWNLOADING_PACKAGE]: 'Downloading package.',
  [AWAITING_USER_ACTION]: 'Awaiting user action.',
  [INSTALLING_UPDATE]: 'Installing update.',
  [UP_TO_DATE]: 'App up to date.',
  [UPDATE_IGNORED]: 'Update cancelled by user.',
  [UPDATE_INSTALLED]: 'Update installed and will be applied on restart.',
  [UNKNOWN_ERROR]: 'An unknown error occurred.',
};

class CodePush {
  constructor() {
    this.status = {
      syncMessage: '',
      syncStatus: CHECKING_FOR_UPDATE,
    };
    this.defaultConfig = {
      checkFrequency: RNcodePush.CheckFrequency.MANUAL,
    };
    this.progress = true;
  }
  checkForUpdate = async () => {
    let update = await RNcodePush.checkForUpdate();

    if(__DEV__){ // eslint-disable-line
      update = null;
    }

    return update;
  };

  toggleAllowRestart = restartAllowed => {
    restartAllowed
      ? RNcodePush.allowRestart()
      : RNcodePush.disallowRestart();
  };

  sync = (statusDidChange, downloadDidProgress) => {
    RNcodePush.sync(
      {},
      statusDidChange,
      downloadDidProgress
    );
  };

  syncImmediate = (statusDidChange, downloadDidProgress) => {
    RNcodePush.sync(
      {
        mandatoryInstallMode: RNcodePush.InstallMode.IMMEDIATE,
        installMode: RNcodePush.InstallMode.IMMEDIATE,
        updateDialog: true,
      },
      statusDidChange,
      downloadDidProgress
    );
  }
}

const codePush = new CodePush();

export default codePush;
