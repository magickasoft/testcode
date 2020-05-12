import R from 'ramda';
import queries from './queries';

const setProfileImage = ({
  mutate,
  variables,
  filename,
  currentProfile,
}) =>
  mutate({
    variables,
    optimisticResponse: {
      setProfileImage: {
        ...R.pick(['id', 'fullName', 'name', 'photo', '__typename'], currentProfile),
        photo: filename,
      },
    },
  });

const editProfile = ({
  mutate,
  variables,
  currentProfile,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: queries.GET_MY_CURRENT_PROFILE,
      };

      const data = store.readQuery(query);

      store.writeQuery({
        ...query,
        data: {
          ...data,
          currentProfile: {
            ...data.currentProfile,
            ...R.path(['data', 'editProfile'], res),
          },
        },
      });
    },
    optimisticResponse: {
      editProfile: {
        ...currentProfile,
        ...variables,
      },
    },
  });

const createProfile = ({
  mutate,
  variables,
  // callBack,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: queries.GET_MY_PROFILES,
      };

      const data = store.readQuery(query);
      const newProfile = R.path(['data', 'createProfile'], res);

      store.writeQuery({
        ...query,
        data: {
          ...data,
          myProfiles: [
            ...data.myProfiles,
            newProfile,
          ],
        },
      });

      // if (newProfile.if !== -1) {
      //   callBack(newProfile);
      // }
    },
    optimisticResponse: {
      createProfile: {
        id: -1,
        nickname: null,
        lastname: variables.lastname,
        fullName: `${variables.name} ${variables.lastname}`,
        name: variables.name,
        photo: 'http: //www.communitya.com/img/no_image.jpg',
        age: null,
        sex: null,
        about_me: null,
        birthday_date: null,
        __typename: 'mprofile',
      },
    },
  });


const fetchMoreProfilesVisitors = ({
  fetchMore, visitors,
}) => fetchMore({
  variables: {
    offset: visitors.length,
  },
  updateQuery: (previousResult, { fetchMoreResult }) => ({
    ...previousResult,
    ...fetchMoreResult,
    profileVisitsHistory: {
      ...previousResult,
      ...fetchMoreResult.profileVisitsHistory,
      visits: [
        ...previousResult.profileVisitsHistory.visits,
        ...fetchMoreResult.profileVisitsHistory.visits,
      ],
    },
  }),
});


export default {
  setProfileImage,
  editProfile,
  createProfile,
  fetchMoreProfilesVisitors,
};
