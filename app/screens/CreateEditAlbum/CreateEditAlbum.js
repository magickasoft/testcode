import React from 'react';
import { withProps } from 'recompose';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import { Input, Button, PickerSelect, Container, CustomHeader, BackBtn } from '../../components';
import { screens, albumPrivacy } from '@constants';
import { createScreen } from '@navigation';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth',
})(Input);

const CreateEditAlbum = ({
  isEdit,
  onChangeTitle,
  title,
  description,
  onChangeDescription,
  onChangePrivacy,
  privacy,
  isReadyToSubmit,
  onSubmit,
  getRef,
  setIdRef,
  theme: {
    s,
  },
}) => {
  const privacySelect = [
    {
      label: I18n.t('albums.privacy_public'),
      value: albumPrivacy.ALL,
    }, {
      label: I18n.t('albums.privacy_users'),
      value: albumPrivacy.USERS,
    }, {
      label: I18n.t('albums.privacy_friends'),
      value: albumPrivacy.FRIENDS,
    }, {
      label: I18n.t('albums.privacy_private'),
      value: albumPrivacy.ONLY_I,
    }, {
      label: I18n.t('albums.privacy_some_users'),
      value: albumPrivacy.SOME_USERS,
    },
  ];
  return (
    <Container style={s.container}>
      <CustomHeader
        leftComponent={<BackBtn />}
        centerComponent={{
          text: isEdit ? I18n.t('albums.edit_album') : I18n.t('albums.create_album'),
        }}
      />
      <View style={s.wrapper}>
        <PickerSelect
          label={`${I18n.t('albums.who_can_see')}:`}
          placeholder={{}}
          items={privacySelect}
          onValueChange={onChangePrivacy}
          value={privacy}
        />
        <TextInput
          containerStyle={s.containerInput}
          secondContainerStyle={s.secondContainerInput}
          label={`${I18n.t('albums.album_name')}:`}
          id="title"
          placeholder={I18n.t('albums.placeholder_title')}
          onChangeText={onChangeTitle}
          value={title}
          authFocus
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => getRef('description').focus()}
        />
        <TextInput
          containerStyle={s.containerInput}
          label={`${I18n.t('albums.album_description')}:`}
          id="description"
          placeholder={I18n.t('albums.placeholder_description')}
          onChangeText={onChangeDescription}
          value={description}
          inputRef={setIdRef}
          multiline
          style={s.textArea}
          secondContainerStyle={s.containerTextArea}
        />
        <Button
          title={isEdit ? I18n.t('albums.button_save') : I18n.t('albums.button_create')}
          titleStyle={s.button}
          containerStyle={s.containerButton}
          containerDisabled={s.disabled}
          onPress={onSubmit}
          disabled={!isReadyToSubmit}
        />
      </View>
    </Container>
  );
};

CreateEditAlbum.propTypes = {
  isEdit: T.bool,
  getRef: T.func,
  isReadyToSubmit: T.bool,
  title: T.string,
  onChangeTitle: T.func,
  description: T.string,
  onChangeDescription: T.func,
  privacy: T.number,
  onChangePrivacy: T.func,
  onSubmit: T.func,
  setIdRef: T.func,
  theme: T.object,
};


export default createScreen(CreateEditAlbum, screens.CreateEditAlbum);
