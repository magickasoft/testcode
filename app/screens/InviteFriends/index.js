import {
  compose,
  hoistStatics,
  lifecycle,
  withState,
} from 'recompose';
import Contacts from 'react-native-contacts';

import InviteFriends from './InviteFriends';
import { withTheme } from '../../utils/enhancers';
import s from './style';

const enhance = compose(
  withState('data', 'setData', []),
  lifecycle({
    componentDidMount() {
      Contacts.getAll((err, contacts) => {
        if (err) throw err;
        this.props.setData(contacts);
      });
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(InviteFriends);
