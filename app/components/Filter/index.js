import { Vibration } from 'react-native';
import T from 'prop-types';
import { compose, hoistStatics, defaultProps, withHandlers, withProps, setPropTypes } from 'recompose';
import { withFormData, withFormHandlers } from '../../utils/enhancers';
import Filter from './Filter';

const list = [
  'Lorem 1',
  'Lorem 2',
  'Lorem 3',
  'Lorem 4',
  'Lorem 5',
  'Lorem 6',
  'Lorem 7',
  'Lorem 8',
  'Lorem 9'
];

const enhance = compose(
  setPropTypes({
    onSuccess: T.func.isRequired,
    filters: T.object.isRequired,
    initFilters: T.object.isRequired
  }),
  defaultProps({ list }),
  withFormData((props) => props.filters),
  withFormHandlers({
    rules: {},
    onSuccess: (props) => {
      // form is valid
      props.onSuccess(props.formData);
    },
    onFail: (props) => {
      // form is invalid
      console.log('fail');
      props.onFail && props.onFail();
    }
  }),
  withHandlers({
    onReload: (props) => () => {
      props.setFormData(props.initFilters);
    }
  }),
  withProps(({ updateFormData }) => ({
    updateFormData: (key, value) => (secondValue) => updateFormData({ name: key, value: value || secondValue }),
    updateFormDataWithVibration: (key, value) => (secondValue) => {
      Vibration.vibrate(100);
      updateFormData({ name: key, value: value || secondValue });
    }
  })),
);

export default hoistStatics(enhance)(Filter);
