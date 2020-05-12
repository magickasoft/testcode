import T from 'prop-types';
import { PlaceType } from '../../types';

const PropType = {
  onGoToPoll: T.func,
  onSendLocation: T.func,
  onGoToMap: T.func,
  totalCount: T.number,
  place: T.shape(PlaceType),
  onOpenGallery: T.func,
  isLoading: T.bool,
  onAddPhotos: T.func,
  animation: T.shape({
    colorTitle: T.object,
    opacityImage: T.object,
    opacityTitle: T.object,
    scaleImage: T.object
  }),
  theme: T.object,
  pullRating: T.number,
  onCheckIn: T.func
};

export { PropType };
