import ImagePicker from 'react-native-image-crop-picker';
import { withHandlers, compose, withState } from 'recompose';

import { permissions, restApi } from '../../services';
import { permission as resPermission } from '../../constants';
import * as withLoadingModal from './withLoadingModal';

export default (
  callBack,
  name = 'onAddPhotos',
  width = 500,
  height = 500,
) => compose(
  withState('loadingPhotos', 'toggleLoadingPhotos', false),
  withLoadingModal.stateProp('loadingPhotos'),
  withHandlers({
    [name]: props => (openCamera = false, useFrontCamera = false) => async (...arg) => { //eslint-disable-line
      try {
        const needPermission = openCamera ? 'camera' : 'photo';
        const res = await permissions.ask(needPermission);

        if (res !== resPermission.authorized) {
          return null;
        }
        const params = {
          width,
          height,
          cropping: true,
          mediaType: 'photo',
          includeBase64: true,
          smartAlbums: ['RecentlyAdded', 'UserLibrary', 'PhotoStream', 'Screenshots'],
          showsSelectedCount: false,
          showCropGuidelines: false,
          hideBottomControls: true,
          cropperCircleOverlay: false,
          cropperActiveWidgetColor: '#424242',
          cropperStatusBarColor: '#424242',
          cropperToolbarColor: '#424242',
          enableRotationGesture: true,
          sortOrder: 'asc',
          useFrontCamera,
          avoidEmptySpaceAroundImage: false,
          freeStyleCropEnabled: true
        };
        const pickerMethod = openCamera ? ImagePicker.openCamera(params) : ImagePicker.openPicker(params);
        const photos = await pickerMethod;

        props.toggleLoadingPhotos(true);

        const { data } = await restApi.uploadImage(photos);

        props.toggleLoadingPhotos(false);

        callBack(props, data, ...arg);
      } catch (e) {
        console.log('Cannot upload photo', e);
        props.toggleLoadingPhotos(false);
      }
    }
  })
);
