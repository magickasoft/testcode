import { Client, Configuration } from 'bugsnag-react-native';
// import Config from 'react-native-config';

const packageJson = require('../package.json');

const config = new Configuration('8aaec8b443c0398ce2d646716f4344ee');
// App Version & Bundle ID
const appVersion = packageJson.version;
const bundleId = packageJson.bundleId; // eslint-disable-line
config.appVersion = appVersion;
config.codeBundleId = bundleId;
// AutoCapture sessions for Release Tracking
// https://docs.bugsnag.com/platforms/react-native/#session-tracking
config.autoCaptureSessions = true;
// Notify only in Production
config.notifyReleaseStages = ['production'];
config.releaseStage = __DEV__ ? 'development' : 'production'; // eslint-disable-line

const bugsnag = new Client(config);

export default bugsnag;
