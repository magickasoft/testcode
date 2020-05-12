import R from 'ramda';

import { errors } from '@utils/helpers';

import queries from './queries';

export const removePlaceFromBookmarks = errors.handleError((store, place) => {
  const bookmarksData = store.readQuery({ query: queries.GET_PLACE_BOOKMARKS });
  const index = bookmarksData.placeBookmarks.findIndex(R.propEq('id', place.id));
  if (index === -1) return;

  bookmarksData.placeBookmarks.splice(index, 1);
  store.writeQuery({
    query: queries.GET_PLACE_BOOKMARKS,
    data: bookmarksData,
  });
}, 'Cannot remove place from bookmarks list');

export const addPlaceToBookmarks = errors.handleError((store, place) => {
  const bookmarksData = store.readQuery({ query: queries.GET_PLACE_BOOKMARKS });
  bookmarksData.placeBookmarks.push(place);
  bookmarksData.placeBookmarks.sort(R.ascend(R.prop('id')));
  store.writeQuery({
    query: queries.GET_PLACE_BOOKMARKS,
    data: bookmarksData,
  });
}, 'Cannot add place to bookmarks list');

// export const updatePlaceQuery = errors.handleError((store, placeId, objToMerge) => {
//   const placeData = store.readQuery({ query: queries.GET_PLACE, variables: { id: placeId } });

//   store.writeQuery({
//     query: queries.GET_PLACE,
//     variables: { id: placeId },
//     data: {
//       ...placeData,
//       place: {
//         ...placeData.place,
//         objToMerge,
//       },
//     },
//   });
// }, 'Cannot update place query');
