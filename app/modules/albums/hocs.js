import { hoc } from '../../utils/helpers/graphQl';
import queries from './queries';
import mutations from './mutations';

const queryGetAlbumsAccessRequests = hoc(queries.GET_ALBUMS_ACCESS_REQUESTS, {
  name: 'getAlbumsAccessRequests'
});

const queryGetMyAlbums = hoc(queries.GET_MY_ALBUMS, {
  name: 'getMyAlbums'
});

const queryGetAlbum = hoc(queries.GET_ALBUM, {
  name: 'getAlbum',
  options: (props) => ({
    variables: {
      id: props.albumId
    }
  })
});

const queryGetAlbumsAndProfile = hoc(queries.GET_ALBUMS_AND_PROFILE, {
  name: 'getAlbumsAndProfile',
  options: (props) => ({
    variables: {
      profileId: props.profileId
    }
  })
});

const queryGetAlbums = hoc(queries.GET_ALBUMS, {
  name: 'getAlbums',
  options: (props) => ({
    variables: {
      profileId: props.id || props.profileId
    }
  })
});

const queryGetAlbumsPreview = hoc(queries.GET_PROFILE_ALBUMS_PREVIEW, {
  name: 'getAlbumsPreview',
  options: (props) => ({
    variables: {
      profileId: props.id || props.profileId
    }
  })
});

const queryGetAlbumFull = hoc(queries.GET_ALBUM_FULL, {
  name: 'getAlbumFull',
  options: (props) => ({
    variables: {
      id: props.albumId
    }
  })
});

const mutationCreateAlbum = hoc(mutations.CREATE_ALBUM, {
  name: 'createAlbum'
});

const mutationUpdateAlbum = hoc(mutations.UPDATE_ALBUM, {
  name: 'updateAlbum'
});

const mutationRemoveAlbum = hoc(mutations.REMOVE_ALBUM, {
  name: 'removeAlbum'
});

const mutationAttachFileToAlbum = hoc(mutations.ATTACH_FILE_TO_ALBUM, {
  name: 'attachFileToAlbum'
});

const mutationRemoveImageFromAlbum = hoc(mutations.REMOVE_IMAGE_FROM_ALBUM, {
  name: 'removeImageFromAlbum'
});

const mutationLikeAlbumImage = hoc(mutations.LIKE_ALBUM_IMAGE, {
  name: 'likeAlbumImage'
});

const mutationAddViewToAlbumImage = hoc(mutations.ADD_VIEW_TO_ALBUM_IMAGE, {
  name: 'addViewToAlbumImage'
});

const mutationRequestAlbumAccess = hoc(mutations.REQUEST_ALBUM_ACCESS, {
  name: 'requestAlbumAccess'
});

const mutationAcceptAlbumAccessRequest = hoc(mutations.ACCEPT_ALBUM_ACCESS_REQUEST, {
  name: 'acceptAlbumAccessRequest'
});

export default {
  queryGetAlbumsAccessRequests,
  queryGetMyAlbums,
  queryGetAlbum,
  queryGetAlbumsAndProfile,
  queryGetAlbums,
  queryGetAlbumsPreview,
  queryGetAlbumFull,
  mutationCreateAlbum,
  mutationUpdateAlbum,
  mutationRemoveAlbum,
  mutationAttachFileToAlbum,
  mutationRemoveImageFromAlbum,
  mutationLikeAlbumImage,
  mutationAddViewToAlbumImage,
  mutationRequestAlbumAccess,
  mutationAcceptAlbumAccessRequest
};
