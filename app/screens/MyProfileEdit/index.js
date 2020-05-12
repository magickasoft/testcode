import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
} from 'recompose';
import R from 'ramda';
import { Keyboard } from 'react-native';

import MyProfileEdit from './MyProfileEdit';
import {
  withSetter,
  withErrorHandler,
  checkReadyForSubmit,
  withRefs,
  withToggle,
} from '../../utils/enhancers';
import { errorsList } from '../../constants';
import {
  isEmpty,
  isMinAgeAudience,
} from '../../utils/helpers/stringValidator';
import { myProfileHocs, myProfileOperations } from '../../modules/myProfile';

const enhance = compose(
  myProfileHocs.queryCurrentProfile(),
  withProps(props => ({
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props),
  })),
  myProfileHocs.mutationEditProfile(),
  withSetter('name', props => props.currentProfile.name || '', isEmpty),
  withSetter('lastName', props => props.currentProfile.lastname || '', isEmpty),
  withSetter('birthday', props => props.currentProfile.birthday_date || '', isMinAgeAudience),
  withSetter('aboutMe', props => props.currentProfile.about_me || '', isEmpty),

  withToggle('isVisibleDatePicker', 'setVisibleDatePicker', 'toggleVisibleDatePicker', false),

  checkReadyForSubmit(['name', 'lastName', 'birthday']),
  withRefs(),
  withErrorHandler(errorsList),
  withHandlers({
    onSubmit: props => () => {
      myProfileOperations.editProfile({
        mutate: props.mutationEditProfile,
        variables: {
          name: props.name,
          lastname: props.lastName,
          birthday_date: props.birthday,
          about_me: props.aboutMe,
        },
        ...R.pick(['currentProfile'], props),
      });
      Keyboard.dismiss();
      props.navigator.pop();
    },
  }),
);

export default hoistStatics(enhance)(MyProfileEdit);
