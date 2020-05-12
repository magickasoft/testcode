import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
} from 'recompose';
import ImagePicker from 'react-native-image-crop-picker';

import ViewScreen from './ViewScreen';

const enhance = compose(
  withState('photos', 'setPhotos', []),
  withHandlers({
    getPhotos: props => async () => {
      const photos = await ImagePicker.openPicker({
        width: 200,
        height: 100,
        cropping: true,
      });
      const newPhotos = [...props.photos, photos];

      props.setPhotos(newPhotos);
    },
  }),
);

export default hoistStatics(enhance)(ViewScreen);
