import { compose, hoistStatics, withState, pure, withHandlers } from 'recompose';
import R from 'ramda';
import { Alert } from 'react-native';

import { restApi } from '@services';

import PromoCode from './PromoCode';

const enhancer = compose(
  withState('code', 'setCode', ''),
  withHandlers({
    onSubmit: props => () => {
      restApi.applyPromoCode(props.code)
        .then((response) => {
          const text = R.pathOr('Code was applied!', ['data', 'text'], response);
          Alert.alert('Congrats!', text);
        })
        .catch(error => {
          const text = R.pathOr('Used wrong code', ['response', 'data', 'error_text'], error);
          Alert.alert(text);
        });
    },
  }),
  pure,
);

export default hoistStatics(enhancer)(PromoCode);
