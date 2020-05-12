import gql from 'graphql-tag';
import { albumFull, albumAccessFull } from './fragments';
import { mprofile } from '../myProfile/fragments';

const GET_MY_ALBUMS = gql`
  query MyAlbums {
    myAlbums {
      ...albumFull
    }
  }
  ${albumFull}
`;

const GET_ALBUMS_AND_PROFILE = gql`
  query AlbumsList($profileId: Int!) {
    albums(profileId: $profileId) {
      id
      title
      description
      totalImages
      thumbImage
    }
    profile(id: $profileId) {
      ...mprofile
    }
  }
  ${mprofile}
`;

const GET_ALBUMS = gql`
  query AlbumsList($profileId: Int!) {
    albums(profileId: $profileId) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const GET_ALBUM = gql`
  query Album($id: Int!) {
    album(id: $id) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const GET_ALBUM_FULL = gql`
  query AlbumFull($id: Int!) {
    album(id: $id) {
      ...albumFull
    }
  }
  ${albumFull}
`;

const GET_ALBUMS_ACCESS_REQUESTS = gql`
  query AlbumsAccessRequests {
    albumsAccessRequests {
      ...albumAccessFull
    }
  }
  ${albumAccessFull}
`;

const GET_PROFILE_ALBUMS_PREVIEW = gql`
  query ProfileAlbumsPreview($profileId: Int) {
    profileAlbumsPreview(profileId: $profileId) {
      albumsPreview {
        id
        title
        thumbImage
        isPrivate
      }
      totalImages
    }
  }
`;

export default {
  GET_MY_ALBUMS,
  GET_ALBUM,
  GET_ALBUM_FULL,
  GET_ALBUMS_AND_PROFILE,
  GET_ALBUMS,
  GET_ALBUMS_ACCESS_REQUESTS,
  GET_PROFILE_ALBUMS_PREVIEW
};
