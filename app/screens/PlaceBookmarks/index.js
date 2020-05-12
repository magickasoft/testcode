import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { screens } from '@constants';
import { withRootSpinner } from '@utils/enhancers';
import { placeHocs, placeOperations } from '../../modules/place';
import PlaceBookmarks from './PlaceBookmarks';

const enhancer = compose(
  placeHocs.queryGetPlaceBookmarks({ fetchPolicy: 'cache-and-network' }),
  placeHocs.mutationPlaceChangeBookmarkStatus(),
  withProps(props => ({
    places: R.pathOr([], ['getPlaceBookmarks', 'placeBookmarks'], props),
    loading: R.path(['getPlaceBookmarks', 'loading'], props),
  })),
  withHandlers({
    onGoToReview: props => (id, itemIndex) => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id, itemIndex },
      });
    },
    changeBookmarkStatus: props => (id, value) => {
      placeOperations.placeChangeBookmarkStatus({
        mutate: props.placeChangeBookmarkStatus,
        variables: {
          placeId: id,
          value,
        },
      });
    },
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'places'),
  )),
  pure,
);

export default hoistStatics(enhancer)(PlaceBookmarks);
