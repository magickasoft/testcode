import { compose, getContext, hoistStatics, withHandlers } from 'recompose';
import T from 'prop-types';
import { withSetter, withTheme } from '@utils/enhancers';
import { loyaltyProgramHocs, loyaltyProgramOperations } from '@modules/loyalty_program';
import Camera from './Camera';
import s from './style';

const enhance = compose(
  getContext({ navigator: T.object }),
  loyaltyProgramHocs.mutationRequestLoyaltyPointsViaReceipt(),
  withSetter('code', null),
  withHandlers({
    onBarCodeRead: (props) => (e) => {
      if (props.code?.data !== e?.data || props.code?.type !== e?.type) {
        props.setCode(e);
      }
    },
    confirmCode: (props) => () => {
      if (props.code) {
        props.navigator.pop();
        const input = { data: props.code?.data, type: props.code?.type, raw_data: props.code?.rawData };
        loyaltyProgramOperations.requestLoyaltyPointsViaReceipt({
          mutate: props.requestLoyaltyPointsViaReceipt,
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

export default hoistStatics(enhance)(Camera);
