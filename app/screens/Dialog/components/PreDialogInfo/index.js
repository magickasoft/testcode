import React from 'react';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import {
  Button,
  Text,
  Container,
} from '@components';
import styles from '@styles';
import { Avatar } from '@containers';
import { withTheme } from '@utils/enhancers';

import style from './style';

const PreDialogInfo = ({
  setDisplayDialogPreview,
  myName,
  interlocutor,
  theme: {
    s,
  },
}) => {
  if (!interlocutor || !myName) return null;
  return (
    <Container style={[styles.fillAll, s.root]}>
      <Avatar
        id={interlocutor.id}
        uri={interlocutor.photo}
        containerStyle={s.avatarImg}
      />
      <Text type="titleNavBar" style={s.textHeader}>
        {I18n.t('messages.before_you_start').replace('{myName}', myName)}
      </Text>
      <Text style={s.textDescription}>
        {I18n.t('messages.you_speaking_to_real_people')}
      </Text>
      <Button
        containerStyle={s.gotItContainerStyle}
        titleStyle={s.gotItStyle}
        title={I18n.t('messages.button_got_it')}
        onPress={() => setDisplayDialogPreview(false)}
      />
    </Container>
  );
};

PreDialogInfo.propTypes = {
  setDisplayDialogPreview: T.func,
  myName: T.string,
  interlocutor: T.object,
  theme: T.object,
};

export default withTheme(style)(PreDialogInfo);
