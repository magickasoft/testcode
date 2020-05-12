import {
  compose,
  hoistStatics,
  withHandlers,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';

import Email from './Email';
import link from '../../../../utils/link';

const shareOptions = {
  title: 'Community A',
  message: 'Join me at Community A ',
  url: 'www.CommunityA.com',
  subject: 'Share Link',
};

const enhance = compose(
  withPropsOnChange(['data'], ({ data }) => ({
    data: data.filter(el => !R.isEmpty(el.emailAddresses)),
  })),
  withHandlers({
    onSendEmail: () => emailAddresses => {
      const email = R.pathOr(null, [0, 'email'], emailAddresses);

      link.openEmail({ email, ...shareOptions });
    },
  }),
);

export default hoistStatics(enhance)(Email);
