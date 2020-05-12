import gql from 'graphql-tag';

const profileImageFull = gql`
  fragment profileImageFull on ProfileImage {
    id
    description
    mprofile_albums_id
    file
    views
    created_ts
    likes
    isLiked
  }
`;

const albumFull = gql`
  fragment albumFull on Album {
    id
    title
    privacy
    description
    images {
      ...profileImageFull
    }
    isPrivate
    mprofile {
      id
      photo
      fullName
      lastonline_ts
    }
  }
  ${profileImageFull}
`;

const albumAccessFull = gql`
  fragment albumAccessFull on AlbumAccessRequest {
    id
    value
    date_until
    album {
      id
      title
    }
    profile {
      id
      fullName
      photo
    }
  }
`;

export { profileImageFull, albumFull, albumAccessFull };
