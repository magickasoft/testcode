import React from 'react';
import T from 'prop-types';

import {
  Tab,
  Container,
  IconVector,
  CustomHeader,
  BackBtn,
} from '../../components';
import { Photos, Profile } from './containers';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';
import { dimensions } from '../../styles';
import s from './style';

const icons = {
  share: {
    type: 'EvilIcons',
    name: 'share-apple',
    size: dimensions.indent * 3.5,
  },
};

const _getRightComponent = (onShare, colorIcon) => (
  <IconVector
    isAnimated
    {...icons.share}
    style={{ color: colorIcon }}
    containerStyle={s.buttonShare}
    onPress={onShare}
  />
);

const routes = [{
  title: 'Other',
}, {
  title: 'Photos',
}];

const ProfileEdit = ({
  onShare,
  // onProfileEdit,
}) => (
  <Container >
    <CustomHeader
      leftComponent={<BackBtn />}
      rightComponent={_getRightComponent(onShare)}
    />
    <Tab
      routes={routes}
      type="simple"
    >
      <Profile onShare={onShare} />
      <Photos />
    </Tab>
  </Container>
);

ProfileEdit.propTypes = {
  onShare: T.func,
  // onProfileEdit: T.func,
};

export default createScreen(ProfileEdit, screens._ProfileEdit);
