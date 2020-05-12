import { compose, getContext, hoistStatics, withHandlers, defaultProps } from 'recompose';
import T from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Keyboard } from 'react-native';
import Header from './Header';
import { withTheme } from '../../utils/enhancers';
import s from './style';

const enhance = compose(
  getContext({ navigator: T.object }),
  defaultProps({ backType: 'pop' }),
  withHandlers({
    _onGoBack: (props) => async () => {
      if (props.backType === 'pop') {
        props.navigator.pop();
      } else if (props.backType === 'dismissAllModals') {
        Keyboard.dismiss();
        await Navigation.dismissAllModals();
      } else if (props.backType === 'dismissModal') {
        props.navigator.dismissModal();
      }
    }
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(Header);
