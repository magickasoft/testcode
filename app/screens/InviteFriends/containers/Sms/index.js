import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import R from 'ramda';

import Sms from './Sms';
import link from '../../../../utils/link';

const enhance = compose(
  withHandlers({
    onSendSms: () => async item => {
      const number = R.pathOr(null, [0, 'number'], item.phoneNumbers);

      link.openSms(number, 'Join me at Community A - www.CommunityA.com');
    },
  }),
);

export default hoistStatics(enhance)(Sms);
