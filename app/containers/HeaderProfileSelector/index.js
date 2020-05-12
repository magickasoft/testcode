import {
  compose,
  getContext,
  withHandlers,
  withProps,
  branch
} from 'recompose';
import R from 'ramda';
import T from 'prop-types';
import navigation from '@navigation';
import ComponentView from './ComponentView';
import { myProfileHocs } from '../../modules/myProfile';
import { coinsHocs } from '../../modules/coins';
import { tokens } from '../../services';
import { tokens as tokensConst, screens, routes } from '../../constants';
import { withToggle, withTheme } from '../../utils/enhancers';
import ApolloClient, { closeWsConnection } from '../../modules';
import delay from '../../utils/delay';
import s from './styles';

const enhance = compose(
  getContext({ navigator: T.object }),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  myProfileHocs.queryGetMyProfiles({ fetchPolicy: 'cache-and-network' }),
  withToggle('isVisiblePopover', 'setVisiblePopover', 'toggleVisiblePopover', false),
  branch(
    R.propEq('coins', true),
    coinsHocs.queryGetMyCoins(),
  ),

  withProps((props) => ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
    myProfiles: R.pathOr([], ['getMyProfiles', 'myProfiles'], props),
    balance: R.pathOr(0, ['myCoins', 'myCoins'], props)
  })),
  withHandlers({
    onPressProfile: (props) => async (profile) => {
      props.toggleVisiblePopover();
      await tokens.set(tokensConst.ID_PROFILE, profile.id);
      await ApolloClient.resetStore();
      closeWsConnection();
      navigation.toRoute(routes.LOADING);
      await delay(200);
      navigation.toRoute(routes.SIGNED_IN);
    },
    onCreateProfile: (props) => () => {
      props.toggleVisiblePopover();
      props.navigator.push(screens.RegisterUser, {
        passProps: {
          type: 'add'
        }
      });
    },
    onGoToSettings: (props) => async () => {
      props.toggleVisiblePopover();
      await delay(350);

      props.navigator.mergeOptions({
        bottomTabs: {
          currentTabIndex: 4
        }
      });
    }
  }),
  withTheme(s),
);

export default enhance(ComponentView);
