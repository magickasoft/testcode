import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import R from 'ramda';

import RegisterUser from './RegisterUser';
import { userOperations } from '../../store/user';

import {
  withSetter,
  withErrorHandler,
  checkReadyForSubmit,
  withRefs,
  withToggle,
  withCurrentLocation,
  withLoadingModal,
  withTheme,
} from '../../utils/enhancers';
import { errorsList, screens } from '../../constants';
import {
  isEmpty,
  isFalse,
  isMinAgeAudience,
} from '../../utils/helpers/stringValidator';
import { errOperations } from '../../store/error';
import { myProfileHocs, myProfileOperations } from '../../modules/myProfile';
import s from './style';

const mapStateToProps = ({ error, auth, user }) => ({
  error: error.auth,
  isLoading: user.isLoading || auth.isLoading,
  userInitial: user.userInitial,
});

const mapStateToDispatch = {
  ...userOperations,
  ...errOperations,
};

const enhance = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withLoadingModal.stateProp('isLoading'),
  myProfileHocs.mutationCreateProfile(),

  withSetter('name', props => props.userInitial.name || '', isEmpty),
  withSetter('lastName', props => props.userInitial.lastName || '', isEmpty),
  withSetter('birthday', props => props.userInitial.birthday || '', isMinAgeAudience),
  withToggle('isVisibleDatePicker', 'setVisibleDatePicker', 'toggleVisibleDatePicker', false),
  withSetter('accept', false, isFalse),

  checkReadyForSubmit(['name', 'lastName', 'birthday', 'accept']),
  withRefs(),
  withErrorHandler(errorsList),
  withCurrentLocation,
  withProps(({
    name,
    lastName,
    birthday,
    currentLocation,
  }) => ({
    variables: {
      name,
      lastname: lastName,
      birthday_date: birthday,
      lat: R.prop('latitude', currentLocation),
      lng: R.prop('longitude', currentLocation),
    },
  })),
  withHandlers({
    onOpenPrivacyPolicy: props => () => {
      props.navigator.push(screens.AppInformation, {
        passProps: {
          displayType: 'privacyPolicy',
        },
      });
    },
    onOpenTermOfUse: props => () => {
      props.navigator.push(screens.AppInformation, {
        passProps: {
          displayType: 'termsOfService',
        },
      });
    },
    onCreate: ({ createProfile, variables }) => () => {
      createProfile(variables);
    },
    onAdd: ({ variables, navigator, mutationCreateProfile }) => () => {
      myProfileOperations.createProfile({
        mutate: mutationCreateProfile,
        variables,
      });

      navigator.pop();
    },
  }),
  withProps(props => ({
    onSubmit: props.type === 'add' ? props.onAdd : props.onCreate,
  })),
  withTheme(s)
);

export default hoistStatics(enhance)(RegisterUser);
