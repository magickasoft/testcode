/* eslint-disable */
import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';
import BG from 'react-native-background-geolocation';
import R from 'ramda';
import { AsyncStorage } from 'react-native';

import { screens } from '../../constants';
import { geolocation, restApi } from '../../services';
import SettingGeolocations from './SettingGeolocations';
import {
  checkReadyForSubmit,
  withLoadingModal,
  withSetter,
  withToggle,
} from '../../utils/enhancers'
import withAlert from '../../utils/enhancers/withAlert';
import { toUpperFirst } from '../../utils/helpers/string';

const {
  LOG_LEVEL_VERBOSE,
  LOG_LEVEL_OFF,
} = BG;

const configNames = [
  'activityRecognitionInterval',
  'stationaryRadius',
  'distanceFilter',
  'stopTimeout',
  'stopOnStationary',
  'useSignificantChangesOnly',
  'debug',
  'minimumActivityRecognitionConfidence',
  'disableStopDetection',
];

const [
  activityRecognitionInterval,
  stationaryRadius,
  distanceFilter,
  stopTimeout,
  stopOnStationary,
  useSignificantChangesOnly,
  debug,
  minimumActivityRecognitionConfidence,
  disableStopDetection,
] = configNames;


const getDebugSettings = debug => ({
  debug,
  logLevel: debug ? LOG_LEVEL_VERBOSE : LOG_LEVEL_OFF,
});

const MESSAGE = [{
  type: 'success',
  text: 'Config set success. The settings will take effect after restart !'
},{
  type: 'success',
  text: 'Location sent to server'
}];


const enhance = compose(
  withToggle('isLoading', 'setLoading', 'toggleLoading', false),
  withToggle('isVisibleMessage', 'setVisibleMessage', 'toggleVisibleMessage', false),
  withState('message', 'setMessage', MESSAGE[0]),

  withLoadingModal.stateProp('isLoading'),
  withAlert(({ isVisibleMessage, toggleVisibleMessage, message }) => ({
    isVisible: isVisibleMessage,
    message: message.text,
    onChangeVisible: toggleVisibleMessage,
    delay: 600,
    type: message.type,
  })),

  withSetter(activityRecognitionInterval, 5000),
  withSetter(stationaryRadius, 10),
  withSetter(distanceFilter, 10),
  withSetter(stopTimeout, 5),
  withSetter(stopOnStationary, false),
  withSetter(useSignificantChangesOnly, false),
  withSetter(debug, false),
  withSetter(minimumActivityRecognitionConfidence, 75),
  withSetter(disableStopDetection, true),

  checkReadyForSubmit(configNames),
  withHandlers({
    onEndRequest: props => (message) => {
      props.setLoading(false);
      props.setMessage(message);
      props.toggleVisibleMessage();
    },
    loadSettings: props => () => {
      const value = R.pick(configNames, geolocation.getActualConfig());

      if(value){
        Object.keys(value).forEach(el => {

          if(el === 'logLevel') {
            return null
          }

          const name = `set${toUpperFirst(el)}`;
          props[name](value[el]);
        })
      }
    }
  }),
  withHandlers({
    onChangeSettings: props => async () => {
      props.setLoading(true);

      let debugSetting = getDebugSettings(props.debug);

      const stringSettings = JSON.stringify({
        ...R.pick(configNames, props),
        ...debugSetting,
      });

      await AsyncStorage.setItem(screens.SettingGeolocations, stringSettings);
      await geolocation.setConfig();

      props.onEndRequest(MESSAGE[0]);
    },
    onSendLocation: props => async () => {
      props.setLoading(true);

      try {
        const location = await geolocation.getCurrentPosition();
        await restApi.sendLocation(location);

        props.onEndRequest(MESSAGE[1]);
      } catch (error) {
        props.onEndRequest({
          type: 'err',
          text: 'error'
        });
      }
    },
    resetSettings: props => async () => {
      await AsyncStorage.removeItem(screens.SettingGeolocations);
      await geolocation.setConfig();
      props.loadSettings();
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadSettings();
    }
  })
);

export default hoistStatics(enhance)(SettingGeolocations);
