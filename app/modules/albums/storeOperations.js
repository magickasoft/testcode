import R from 'ramda';
import { errors } from '@utils/helpers';
import queries from './queries';

const removeAlbumFromMyAlbums = errors.handleError((store, album) => {
  const albumsData = store.readQuery({ query: queries.GET_MY_ALBUMS });
  const index = albumsData.myAlbums.findIndex(R.propEq('id', album.id));
  if (index === -1) return;

  albumsData.myAlbums.splice(index, 1);
  store.writeQuery({
    query: queries.GET_MY_ALBUMS,
    data: albumsData
  });
}, 'Cannot remove album from my albums');

const addAlbumToMyAlbums = errors.handleError((store, album) => {
  const myAlbumsData = store.readQuery({ query: queries.GET_MY_ALBUMS });
  myAlbumsData.myAlbums.push(album);
  store.writeQuery({
    query: queries.GET_MY_ALBUMS,
    data: myAlbumsData
  });
}, 'Cannot add to my albums');

const removeAlbumFromAlbumsList = errors.handleError((store, album, profileId) => {
  const variables = { profileId };
  const albumsListData = store.readQuery({ query: queries.GET_ALBUMS_AND_PROFILE, variables });
  const index = albumsListData.albums.findIndex(R.propEq('id', album.id));
  if (index === -1) return;

  albumsListData.albums.splice(index, 1);
  store.writeQuery({
    query: queries.GET_ALBUMS_AND_PROFILE,
    data: albumsListData,
    variables
  });
}, 'Cannot remove album from albums list');

const addAlbumToAlbumsList = errors.handleError((store, album, profileId) => {
  const variables = { profileId };
  const albumsListData = store.readQuery({ query: queries.GET_ALBUMS_AND_PROFILE, variables });
  albumsListData.albums.push(album);
  store.writeQuery({
    query: queries.GET_ALBUMS_AND_PROFILE,
    data: albumsListData,
    variables
  });
}, 'Cannot add to albums list');

export { removeAlbumFromMyAlbums, addAlbumToMyAlbums, removeAlbumFromAlbumsList, addAlbumToAlbumsList };
