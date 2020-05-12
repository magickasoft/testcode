import T from 'prop-types';

const PlaceType = {
  address: T.string,
  categoryId: T.number,
  description: T.string,
  id: T.number,
  images: T.oneOfType([
    T.arrayOf(T.string),
    T.arrayOf(T.object)
  ]),
  location: T.object,
  rating: T.number,
  title: T.string
};

const Animations = {
  animatedButton: T.object,
  animatedTitle: T.object,
  colorHeader: T.object,
  colorTitle: T.object,
  onScroll: T.object,
  opacityImage: T.object,
  opacityTitle: T.object,
  opacityTitleSecond: T.object,
  scaleImage: T.object
};

const PropType = {
  onEndReached: T.func,
  onUpdateLike: T.func,
  onGoToSpotsNotification: T.func,
  isLoading: T.shape({
    place: T.bool,
    reviews: T.bool,
    reviewsMore: T.bool
  }),
  reviews: T.shape({
    data: T.array,
    totalCount: T.number
  }),
  onLayout: T.func,
  onShare: T.func,
  onGoToPoll: T.func,
  setFlatListRef: T.func,
  place: T.shape(PlaceType),
  animation: T.shape(Animations),
  loadToId: T.number,
  onAddPhotos: T.func,
  theme: T.object,
  onOpenGallery: T.func,
  displayCopilot: T.bool
};

export { PlaceType, Animations, PropType };
