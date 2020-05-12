import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';

import {
  withToggle,
  withTheme,
} from '@utils/enhancers';
import { fb } from '@services';

import SpotsPollSubmitted from './SpotsPollSubmitted';
import s from './style';

const enhance = compose(
  withToggle('shareFacebook', 'toggleShareFacebook', 'onToggleShareFacebook', true),
  withToggle('shareTwitter', 'toggleShareTwitter', 'onToggleShareTwitter', true),
  withHandlers({
    onDone: ({
      navigator,
      idSpotReview,
      shareFacebook,
      review,
    }) => async () => {
      navigator.popTo(idSpotReview);

      if (shareFacebook) {
        await fb.shareReview(review);
      }
    },
  }),
  withTheme(s)
);

export default hoistStatics(enhance)(SpotsPollSubmitted);
