import { compose, getContext, withHandlers, onlyUpdateForKeys } from 'recompose';
import T from 'prop-types';
import { withTheme } from '@utils/enhancers';
import { placeHocs, placeOperations } from '@modules/place';
import { screens } from '@constants';
import Content from './Content';
import s from './styles';

const updateProps = ['isLoading', 'place'];
const enhance = compose(
  placeHocs.mutationPlaceChangeBookmarkStatus(),
  getContext({ navigator: T.object, componentId: T.string }),
  withHandlers({
    onGoToMap: ({ place: { id, address, categoryId }, navigator }) => () => {
      navigator.push(screens.Map, {
        title: address,
        passProps: { id, categoryId }
      });
    },
    onGoToSpotsNotification: ({ place, navigator }) => () => {
      navigator.openModal(screens.SpotsNotification, {
        passProps: { id: place.id }
      });
    },
    changeBookmarkStatus: ({ placeChangeBookmarkStatus, place }) => (value) => {
      placeOperations.placeChangeBookmarkStatus({
        mutate: placeChangeBookmarkStatus,
        variables: {
          placeId: place.id,
          value
        }
      });
    },
    goToCheckIns: ({ navigator, place }) => () => {
      navigator.push(screens.PlaceCheckInList, {
        passProps: { placeId: place.id }
      });
    }
  }),
  withTheme(s),
  onlyUpdateForKeys(updateProps),
);

export default enhance(Content);
