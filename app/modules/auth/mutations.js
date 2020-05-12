import gql from 'graphql-tag';

const SIGN_IN_FIREBASE = gql`
  mutation SignInFirebase($idToken: String!) {
    signInFirebase(data: {
      idToken: $idToken
    }) {
      status
      success
      error_code
      errors {
        message 
      }
      auth_key
      profile_id
    }
  }
`;

const SIGN_UP_WITH_EMAIL = gql`
  mutation SignUpWithEmail ($email: String!, $password: String!, $rules_agree: Boolean! ){
    register (data: {
      email: $email,
      password: $password,
      rules_agree: $rules_agree
    }) {
      status
      success
      message
      error_code
      errors {
        input
        message
      }
    }
}
`;

const SIGN_IN_WITH_EMAIL = gql`
  mutation SignInWithEmail ($login: String!, $password: String!){
    login (data: {
      login: $login,
      password: $password,
    }) {
      auth_key
      status
      error_code
      errors {
        input
        message
      }
    }
}
`;

export default {
  SIGN_IN_FIREBASE,
  SIGN_UP_WITH_EMAIL,
  SIGN_IN_WITH_EMAIL
};
