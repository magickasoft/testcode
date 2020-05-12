import gql from 'graphql-tag';
import { albumFull, profileImageFull, albumAccessFull } from './fragments';

const CREATE_ALBUM = gql`
  mutation CreateAlbum ($data: createUpdateAlbumInput!) {
    createAlbum(data: $data) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const UPDATE_ALBUM = gql`
  mutation UpdateAlbum ($id: Int!, $data: createUpdateAlbumInput!) {
    updateAlbum(id: $id, data: $data) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const REMOVE_ALBUM = gql`
  mutation RemoveAlbum ($id: Int!) {
    removeAlbum(id: $id) {
      id
    }
  }
`;

const ATTACH_FILE_TO_ALBUM = gql`
  mutation AttachFileToAlbum ($fileId: Int!, $albumId: Int!) {
    attachFileToAlbum(fileId: $fileId, albumId: $albumId) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const REMOVE_IMAGE_FROM_ALBUM = gql`
  mutation RemoveImageFromAlbum ($imageId: Int!, $albumId: Int!) {
    removeImageFromAlbum(imageId: $imageId, albumId: $albumId) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const LIKE_ALBUM_IMAGE = gql`
  mutation LikeAlbumImage ($imageId: Int!, $value: Int!) {
    likeAlbumImage(imageId: $imageId, value: $value) {
      ...profileImageFull
    }
  }
  ${profileImageFull}
`;

const ADD_VIEW_TO_ALBUM_IMAGE = gql`
  mutation AddViewToAlbumImage ($imageId: Int!) {
    addViewToAlbumImage(imageId: $imageId) {
      ...profileImageFull
    }
  }
  ${profileImageFull}
`;

const REQUEST_ALBUM_ACCESS = gql`
  mutation RequestAccessToAlbum ($albumId: Int!) {
    requestAccessToAlbum(albumId: $albumId)
  }
`;

const ACCEPT_ALBUM_ACCESS_REQUEST = gql`
  mutation AcceptAlbumAccessRequest($accessValue: Int!, $accessRequestId: Int!) {
    acceptAlbumAccessRequest(accessValue: $accessValue, accessRequestId: $accessRequestId) {
      ...albumAccessFull
    }
  }
  ${albumAccessFull}
`;

export default {
  CREATE_ALBUM,
  UPDATE_ALBUM,
  REMOVE_ALBUM,
  ATTACH_FILE_TO_ALBUM,
  REMOVE_IMAGE_FROM_ALBUM,
  LIKE_ALBUM_IMAGE,
  ADD_VIEW_TO_ALBUM_IMAGE,
  REQUEST_ALBUM_ACCESS,
  ACCEPT_ALBUM_ACCESS_REQUEST
};
