import { compose, hoistStatics, withProps, pure } from 'recompose';
import R from 'ramda';

import { withRootSpinner } from '@utils/enhancers';
import PlaceCheckInList from './PlaceCheckInList';
import { placeHocs } from '../../modules/place';

const enhancer = compose(
  placeHocs.queryPlaceCheckIns({ fetchPolicy: 'cache-and-network' }),
  withProps(props => ({
    checkIns: R.pathOr([], ['getPlaceCheckIns', 'placeCheckIns'], props),
    loading: R.pathOr(false, ['getPlaceCheckIns', 'loading'], props),
  })),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'places'),
  )),
  pure,
);

export default hoistStatics(enhancer)(PlaceCheckInList);
