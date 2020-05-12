import {
  compose,
  hoistStatics,
  withHandlers,
  withState
} from 'recompose';
import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import {
  withSetters,
  checkReadyForSubmit,
  withRefs,
  withToggle,
  withTheme,
  withSetter
} from '@utils/enhancers';
import { stringValidator } from '@utils/helpers';
import {
  restApi
} from '@services';
import AddBusiness from './AddBusiness';
import { appOperations } from '../../store/app';
import s from './style';

const { isEmpty } = stringValidator;
const initialCountry = {
  cca2: 'US',
  callingCode: '1',
  name: 'United States'
};

const fields = ['name', 'address', 'email', 'whyUs'];
const message = 'Thank you! Your request has been received. We will consider adding this business after admins have reviewed it.';

const enhance = compose(
  connect(null, appOperations),
  withState('country', 'setCountry', initialCountry),
  withSetter('search', ''),
  withSetter('location', undefined),
  withSetter('utcOffset', undefined),
  withSetters(fields, isEmpty),
  withState('refCountryPicker', 'setRefCountryPicker', React.createRef()),
  withToggle('isVisibleAddressModal', 'setVisibleAddressModal', 'toggleVisibleAddressModal', false),

  checkReadyForSubmit([...fields, 'country']),
  withRefs(),
  withHandlers({
    onSubmit: (props) => async () => {
      // if(!props.isReadyToSubmit) {
      //   return null
      // }

      props.navigator.pop();

      await restApi.newBusiness({
        ...(R.pick(fields, props)),
        country: props.country,
        location: props.location,
        utcOffset: props.utcOffset,
        type: props.type
      });

      props.appSetSuccessMessage(message);
    },
    changeCountry: ({ setCountry, getRef }) => (country) => {
      setCountry(country);
      getRef('name').focus();
    }
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(AddBusiness);
