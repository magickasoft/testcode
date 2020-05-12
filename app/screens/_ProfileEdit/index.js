/* eslint-disable */
import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import Share from 'react-native-share';

import ProfileEdit from './ProfileEdit';

const enhance = compose(
  withHandlers({
    onShare: props => () => {
      let shareOptions = {
        title: 'Community A',
        message: 'Join me at Community A ',
        url: 'www.CommunityA.com',
        subject: 'Share Link' //  for email
      };

      Share.open(shareOptions)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        });
    },
  }),
);

export default hoistStatics(enhance)(ProfileEdit);
