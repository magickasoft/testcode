import R from 'ramda';

import { hoc } from '../../utils/helpers/graphQl';
import queries from './queries';
import mutations from './mutations';
import { filter } from '../../constants';
import { ratio, createCoords } from '../../utils/helpers/map';
import { createWeeks } from './utils';

const queryGetPlace = hoc(queries.GET_PLACE, {
  name: 'getPlace',
  options: (props) => ({
    variables: { id: R.pathOr(null, ['id'], props) }
  })
});

const queryPlaceHistory = hoc(queries.GET_PLACE_HISTORY, {
  name: 'placeHistory',
  options: () => ({
    variables: {
      weeks: createWeeks(),
    },
  }),
});

const queryGetPlaceList = hoc(queries.GET_PLACE_LIST, {
  name: 'getPlaceList',
  options: props => {
    const distance = R.pathOr(null, ['filters', 'maxDistance'], props);

    return ({
      variables: {
        category_id: R.pathOr([], ['filters', 'category'], props),
        title: R.pathOr(null, ['search'], props),
        limit: R.pathOr(6, ['limit'], props),
        sortBy: R.pathOr(filter.sortBy.CLOSEST, ['filters', 'sortBy'], props),
        currentLocation: createCoords(props.initialLocation || props.currentLocation),
        maxDistance: distance === filter.distance.max ? null : (distance * ratio.mile),
      },
    });
  },
});

const queryGetPlaceBookmarks = hoc(queries.GET_PLACE_BOOKMARKS, {
  name: 'getPlaceBookmarks',
});

const queryPlaceCheckIns = hoc(queries.GET_PLACE_CHECK_INS, {
  name: 'getPlaceCheckIns',
  options: ({ placeId }) => ({
    variables: {
      placeId,
    },
  }),
});

const mutationAttachFileToPlace = hoc(mutations.ATTACH_FILE_TO_PLACE, {
  name: 'mutationAttachFileToPlace',
});

const mutationSetStay = hoc(mutations.SET_STAY, {
  name: 'setStay',
});

const mutationSetStayHistory = hoc(mutations.SET_STAY_HISTORY, {
  name: 'setStayHistory',
});

const mutationReplaceStay = hoc(mutations.REPLACE_STAY, {
  name: 'replaceStay',
});

const mutationSendPlaceImageLike = hoc(mutations.SEND_PLACE_IMAGE_LIKE, {
  name: 'sendPlaceImageLike',
});

const mutationPlaceChangeBookmarkStatus = hoc(mutations.PLACE_CHANGE_BOOKMARK_STATUS, {
  name: 'placeChangeBookmarkStatus',
});


export default {
  queryGetPlace,
  queryGetPlaceList,
  mutationAttachFileToPlace,
  mutationSetStay,
  mutationSetStayHistory,
  mutationReplaceStay,
  queryPlaceHistory,
  mutationSendPlaceImageLike,
  mutationPlaceChangeBookmarkStatus,
  queryGetPlaceBookmarks,
  queryPlaceCheckIns,
};
