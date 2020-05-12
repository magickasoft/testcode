import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  branch,
} from 'recompose';
import R from 'ramda';
import { Keyboard } from 'react-native';

import { albumPrivacy } from '@constants';
import {
  withSetter,
  checkReadyForSubmit,
  withRefs,
  withRootSpinner,
  withTheme,
} from '@utils/enhancers';

import CreateEditAlbum from './CreateEditAlbum';
import { isEmpty } from '../../utils/helpers/stringValidator';
import { albumsHocs, albumsOperations } from '../../modules/albums';
import { myProfileHocs } from '../../modules/myProfile';
import styles from './style';

const enhance = compose(
  withProps(props => ({
    isEdit: !!props.albumId,
  })),
  branch(
    R.prop('isEdit'),
    compose(
      albumsHocs.mutationUpdateAlbum(),
      albumsHocs.queryGetAlbum({ fetchPolicy: 'cache-and-network' }),
      withProps(props => ({
        album: R.path(['getAlbum', 'album'], props),
        loading: R.path(['getAlbum', 'loading'], props),
      })),
    ),
    compose(
      myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
      albumsHocs.mutationCreateAlbum(),
      withProps(props => ({
        myProfile: R.path(['currentProfile', 'currentProfile'], props),
        loading: R.path(['currentProfile', 'loading'], props),
      })),
    )
  ),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isNil, 'album'),
  )),
  withSetter('title', R.pathOr('', ['album', 'title']), isEmpty),
  withSetter('description', R.pathOr('', ['album', 'description']), isEmpty),
  withSetter('privacy', R.pathOr(albumPrivacy.ALL, ['album', 'privacy']), R.is(Number)),
  checkReadyForSubmit(['title', 'description', 'privacy']),
  withRefs(),
  withHandlers({
    onSubmit: props => async () => {
      const data = {
        title: props.title,
        privacy: props.privacy,
        description: props.description,
      };

      if (props.isEdit) {
        await albumsOperations.updateAlbum({
          mutate: props.updateAlbum,
          variables: {
            id: props.albumId,
            data,
          },
        });
      } else {
        await albumsOperations.createAlbum({
          mutate: props.createAlbum,
          variables: {
            data,
          },
          profileId: props.myProfile.id,
        });
      }
      Keyboard.dismiss();
      props.navigator.pop();
    },
  }),
  withTheme(styles),
);

export default hoistStatics(enhance)(CreateEditAlbum);
