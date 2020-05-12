import { compose, withHandlers, withState, getContext } from 'recompose';
import T from 'prop-types';
import { screens } from '@constants';
import MenuButtons from './MenuButtons';

const enhance = compose(
  getContext({ navigator: T.object, componentId: T.string }),
  withState('pullRating', 'setPullRating', null),
  withHandlers({
    onGoToPoll: ({
      place: { id },
      navigator,
      componentId,
      loadToId,
      setPullRating
    }) => (rate) => {
      setPullRating(rate);

      navigator.push(screens.SpotsPoll, {
        passProps: {
          id,
          idSpotReview: componentId,
          loadToId,
          rate
        }
      });
    }
  }),
);

export default enhance(MenuButtons);
