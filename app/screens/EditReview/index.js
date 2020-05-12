import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import R from 'ramda';

import { withSetter } from '../../utils/enhancers';
import { reviewsHocs, reviewsOperations } from '../../modules/reviews';
import EditReview from './EditReview';


const enhance = compose(
  reviewsHocs.mutationEditPlaceReview(),
  withSetter('comment', R.path(['review', 'text'])),
  withHandlers({
    onEditReview: props => async () => {
      reviewsOperations.editReview({
        mutate: props.editPlaceReview,
        variables: {
          reviewId: R.path(['review', 'id'], props),
          text: R.prop('comment', props),
        },
        review: R.prop('review', props),
      });
      props.navigator.pop();
    },
  }),
);

export default hoistStatics(enhance)(EditReview);
