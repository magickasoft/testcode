import gql from 'graphql-tag';
import { mprofile, mprofileFull } from './fragments';

const CREATE_PROFILE = gql`
mutation CreateProfile(
    $name: String!,
    $lastname: String!,
    $birthday_date: DateTime!,
    $lat: Float,
    $lng: Float
) {
  createProfile(data: {
    name: $name,
    lastname: $lastname,
    birthday_date: $birthday_date,
    lat: $lat,
    lng: $lng,
  }) {
    ...mprofileFull
  }
}
${mprofileFull}
`;

const EDIT_PROFILE = gql`
mutation  editProfile (
  $name: String
  $lastname: String
  $about_me: String
) {
  editProfile( data: {
    name: $name
    lastname: $lastname
    about_me: $about_me
}) {
    ...mprofileFull
  }
}
${mprofileFull}
`;

const SET_PROFILE_IMAGE = gql`
mutation setProfileImage(
    $fileId: Int!
) {
  setProfileImage(
    fileId: $fileId
  ) {
    ...mprofile
  }
}
${mprofile}
`;


export default {
  CREATE_PROFILE,
  SET_PROFILE_IMAGE,
  EDIT_PROFILE,
};
