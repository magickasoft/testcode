import I18n from 'react-native-i18n';

import withActionSheet from './withActionSheet';

export default ({
  photoUploaderPropName = 'onAddPhotos',
  openSelectorPropName = 'openPhotoUploader',
} = {}) => withActionSheet(
  props => [
    {
      name: I18n.t('messages.cancel'),
    },
    {
      name: 'Choose from gallery',
      handler: props[photoUploaderPropName](false),
    },
    {
      name: 'Take a photo',
      handler: props[photoUploaderPropName](true),
    },
  ],
  {
    cancelButtonIndex: 0,
  },
  openSelectorPropName,
);

