import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';
import { withRootSpinner, withTheme } from '@utils/enhancers';
import { screens } from '@constants';
import coinsHistory from './CoinsHistory';
import { coinsHocs } from '../../modules/coins';
import style from './style';

const enhancer = compose(
  coinsHocs.queryCoinsHistory({ fetchPolicy: 'cache-and-network' }),
  withProps((props) => ({
    coinsHistory: R.pathOr([], ['coinsHistory', 'coinsHistory'], props),
    loading: R.pathOr(false, ['coinsHistory', 'loading'], props)
  })),
  withHandlers({
    onInterPromoCode: (props) => () => {
      props.navigator.push(screens.PromoCode);
    }
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'coinsHistory'),
  )),
  pure,
  withTheme(style),
);

export default hoistStatics(enhancer)(coinsHistory);
