import R from 'ramda';

import { createFile } from './factory';
import { placeQueries } from '../place';
import { createWeeks } from './utils';
import { addPlaceToBookmarks, removePlaceFromBookmarks } from './storeOperations';

const fetchMorePlaces = ({
  fetchMore, places,
}) => {
  fetchMore({
    variables: {
      offset: places.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      ...previousResult,
      ...fetchMoreResult,
      placeList: {
        ...previousResult,
        ...fetchMoreResult.placeList,
        places: [
          ...places,
          ...fetchMoreResult.placeList.places,
        ],
      },
    }),
  });
};

const attachFileToPlace = ({
  mutate,
  variables,
  place,
  filename,
  currentProfile,
}) =>
  mutate({
    variables,
    optimisticResponse: {
      attachFileToPlace: {
        ...place,
        files: [
          ...place.files,
          createFile(filename, currentProfile),
        ],
        __typename: 'Place',
      },
    },
  });

const replaceStay = ({
  mutate,
  variables,
  prevHistoryItem,
  placeItem,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: placeQueries.GET_PLACE_HISTORY,
        variables: {
          weeks: createWeeks(),
        },
      };

      const data = store.readQuery(query);

      const newData = {
        ...query,
        data: R.set(
          R.lensPath(['placeVisitsHistory', prevHistoryItem.index]),
          R.path(['data', 'replaceStayCheckIn'], res),
          data,
        ),
      };

      store.writeQuery(newData);
    },
    optimisticResponse: {
      replaceStayCheckIn: {
        id: '-1',
        place_id: R.prop('id', placeItem),
        title: R.prop('title', placeItem),
        date: R.prop('date', prevHistoryItem),
        week: R.prop('week', prevHistoryItem),
        isVisited: 1,
        lng: null,
        lat: null,
        first_ts: R.prop('first_ts', prevHistoryItem),
        short_geohash: R.prop('short_geohash', prevHistoryItem),
        __typename: 'PlaceHistory',
      },
    },
  });

const setStayHistory = ({
  mutate,
  variables,
  item,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: placeQueries.GET_PLACE_HISTORY,
        variables: {
          weeks: createWeeks(),
        },
      };

      const data = store.readQuery(query);

      const currentIndex = R.propOr([], 'placeVisitsHistory', data).findIndex(el => el.id === item.id);

      const newData = {
        ...query,
        data: R.set(
          R.lensPath(['placeVisitsHistory', currentIndex]),
          {
            ...item,
            isVisited: R.path(['data', 'setStayCheckIn', 'value'], res),
            __typename: 'PlaceHistory',
          },
          data,
        ),
      };

      store.writeQuery(newData);
    },
    optimisticResponse: {
      setStayCheckIn: {
        id: -1,
        place_id: R.prop('id', variables),
        created_ts: Math.round(Date.now() / 1000),
        value: R.prop('value', variables),
        __typename: 'setStayCheckInPayload',
      },
    },
  });

const removeFromTimeLine = ({
  mutate,
  variables,
  item,
}) =>
  mutate({
    variables,
    update: store => {
      const query = {
        query: placeQueries.GET_PLACE_HISTORY,
        variables: {
          weeks: createWeeks(),
        },
      };
  
      const data = store.readQuery(query);
  
      const currentIndex = R.propOr([], 'placeVisitsHistory', data)
        .findIndex(el => el.id === item.id);
  
      const newData = {
        ...query,
        data: R.set(
          R.lensPath(['placeVisitsHistory']),
          R.remove(currentIndex, 1, R.path(['placeVisitsHistory'], data)),
          data,
        ),
      };
  
      store.writeQuery(newData);
    },
    optimisticResponse: {
      setStayCheckIn: {
        id: item.id,
        place_id: R.prop('id', variables),
        created_ts: Math.round(Date.now() / 1000),
        value: R.prop('value', variables),
        __typename: 'setStayCheckInPayload',
      },
    },
  });
    
const sendPlaceImageLike = ({
  mutate,
  variables,
  item,
}) =>
  mutate({
    variables,
    optimisticResponse: {
      sendPlaceImageLike: {
        ...item,
        likes: item.likes + variables.value,
        isLiked: !!variables.value,
        __typename: 'PlaceFile',
      },
    },
  });

const placeChangeBookmarkStatus = ({
  mutate,
  variables,
}) =>
  mutate({
    variables,
    update: (store, response) => {
      const place = R.path(['data', 'placeChangeBookmarkStatus'], response);
      if (place.isAddedToBookmark) {
        addPlaceToBookmarks(store, place);
      } else {
        removePlaceFromBookmarks(store, place);
      }
    },
  });

export default {
  fetchMorePlaces,
  attachFileToPlace,
  setStayHistory,
  removeFromTimeLine,
  replaceStay,
  sendPlaceImageLike,
  placeChangeBookmarkStatus,
};
