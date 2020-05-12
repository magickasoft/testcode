import { compose, getContext, hoistStatics, withHandlers } from 'recompose';
import T from 'prop-types';
import { withSetter, withTheme } from '@utils/enhancers';
import { loyaltyProgramHocs, loyaltyProgramOperations } from '@modules/loyalty_program';
import CameraValidate from './CameraValidate';
import s from './style';

const enhance = compose(
  getContext({ navigator: T.object }),
  loyaltyProgramHocs.mutationGiveLoyaltyPointsViaReceipt(),
  withSetter('code', null),
  withHandlers({
    onBarCodeRead: (props) => (e) => {
      if (props.code?.data !== e?.data || props.code?.type !== e?.type) {
        props.setCode(e);
      }
    },
    validateCode: (props) => () => {
      if (props.code) {
        props.navigator.pop();
        const input = { data: props.code?.data, type: props.code?.type, raw_data: props.code?.rawData };
        loyaltyProgramOperations.giveLoyaltyPointsViaReceipt({
          mutate: props.giveLoyaltyPointsViaReceipt,
          variables: {
            input
          }
        });
        props.setCode(null);
      }
    },
    clearCode: (props) => () => {
      props.setCode(null);
    }
  }),
  withTheme(s)
);

export default hoistStatics(enhance)(CameraValidate);
