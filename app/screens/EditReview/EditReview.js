import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';

import {
  Button,
  TextArea,
  Container,
  CustomHeader,
  BackBtn,
} from '../../components';
import styles from '../../styles';
import s from './style';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const EditReview = ({
  comment,
  onChangeComment,
  onEditReview,
  place,
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: R.pathOr('Edit review', ['title'], place) }}
    />
    <View style={[styles.fillAll, s.content]}>
      <View style={s.containerSecond} key="submit">
        <TextArea
          style={s.textArea}
          onChangeText={onChangeComment}
          autoFocus
          multiline
          value={comment}
          textAlignVertical="top"
        />
        <Button
          containerStyle={s.submitContainerStyle}
          titleStyle={s.submitStyle}
          title="Edit"
          onPress={onEditReview}
        />
      </View>
    </View>
  </Container>
);

EditReview.propTypes = {
  comment: T.string,
  onChangeComment: T.func,
  place: T.object,
  onEditReview: T.func,
};

export default createScreen(EditReview, screens.EditReview);
