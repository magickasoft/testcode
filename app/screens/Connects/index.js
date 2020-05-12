import {
  compose,
  hoistStatics,
  withState,
  withProps
} from 'recompose';
import R from 'ramda';
import { coinsHocs } from '../../modules/coins';
import Connects from './Connects';
import { withTheme, withCopilot } from '../../utils/enhancers';
import { screens } from '../../constants';
import s from './style';

const enhance = compose(
  coinsHocs.queryGetMyCoins(),
  withState('index', 'setIndex', 0),
  withProps((props) => ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
    myProfiles: R.pathOr([], ['getMyProfiles', 'myProfiles'], props),
    balance: R.pathOr(0, ['myCoins', 'myCoins'], props)
  })),
  withTheme(s),
  withCopilot(screens.Connects),
);

export default hoistStatics(enhance)(Connects);
