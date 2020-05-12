import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import R from 'ramda';
import I18n from 'react-native-i18n';

import { withRootSpinner, withActionSheet } from '@utils/enhancers';
import { ALBUM_REQUEST_NAMES, ALBUM_REQUEST_VALUE } from '@constants';
import { albumsHocs, albumsOperations } from '../../modules/albums';
import AlbumAccess from './AlbumAccess';

const valuesToSelect = [
  ALBUM_REQUEST_VALUE.ALLOW_FOREVER,
  ALBUM_REQUEST_VALUE.ALLOW_1_MONTH,
  ALBUM_REQUEST_VALUE.ALLOW_1_WEEK,
  ALBUM_REQUEST_VALUE.ALLOW_1_DAY,
  ALBUM_REQUEST_VALUE.DISALLOW,
];

const enhance = compose(
  albumsHocs.queryGetAlbumsAccessRequests({ fetchPolicy: 'cache-and-network' }),
  albumsHocs.mutationAcceptAlbumAccessRequest(),
  withProps(props => ({
    albumsRequests: R.pathOr([], ['getAlbumsAccessRequests', 'albumsAccessRequests'], props),
    loading: R.path(['getAlbumsAccessRequests', 'loading'], props),
  })),
  withState('accessId', 'setAccessId', null),
  withHandlers({
    acceptAlbumAccessRequest: props => (id, value) => () => {
      albumsOperations.acceptAlbumAccessRequest({
        mutate: props.acceptAlbumAccessRequest,
        variables: { accessRequestId: id, accessValue: value },
      });
    },
  }),
  withActionSheet(
    props => [
      {
        name: I18n.t('messages.cancel'),
      },
      ...valuesToSelect.map(value => ({
        name: ALBUM_REQUEST_NAMES[value],
        handler: props.acceptAlbumAccessRequest(props.accessId, value),
      })),
    ],
    {
      cancelButtonIndex: 0,
    },
    'openSelector',
  ),
  withHandlers({
    openActions: props => id => () => {
      props.setAccessId(id);
      props.openSelector();
    },
  }),
  withRootSpinner(
    R.both(R.prop('loading'), R.propSatisfies(R.isEmpty, 'albumsRequests'))
  ),
);

export default hoistStatics(enhance)(AlbumAccess);
