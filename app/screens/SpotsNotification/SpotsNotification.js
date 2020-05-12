import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import R from 'ramda';

import {
  Button,
  TextArea,
  Rating,
  Container,
  CustomHeader,
  BackBtn,
} from '../../components';
import styles, { dimensions } from '../../styles';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const initComment = 'Example: This is my first time at this place and I am in love with the people! ' +
  'Great location, friendly stuff, safe surroundings! Highly recommend!';

const SpotsNotification = ({
  comment,
  onChangeComment,
  onSubmit,
  onChangeRating,
  rating,
  place,
  theme: {
    s,
  },
}) => (
  <Container style={s.root}>
    <CustomHeader
      leftComponent={<BackBtn backType="dismissAllModals" />}
      centerComponent={R.pathOr('POll', ['title'], place)}
    />
    <View style={[styles.fillAll, s.content]}>
      <View style={s.containerSecond} key="submit">
        <Rating
          type="square"
          onPress={onChangeRating}
          size={dimensions.indent * 3.4}
          rating={rating}
          containerStyle={s.rateContainerStyle}
        />
        <TextArea
          style={s.textArea}
          placeholder={initComment}
          onChangeText={onChangeComment}
          autoFocus
          multiline
          value={comment}
          textAlignVertical="top"
        />
        <Button
          containerStyle={s.submitContainerStyle}
          titleStyle={s.submitStyle}
          title={I18n.t('spot_poll.submit')}
          onPress={onSubmit}
          disabled={rating === 0 || !comment}
        />
      </View>
    </View>
  </Container>
);

SpotsNotification.propTypes = {
  comment: T.string,
  onChangeComment: T.func,
  onSubmit: T.func,
  onChangeRating: T.func,
  rating: T.number,
  place: T.object,
  theme: T.object,
};

export default createScreen(SpotsNotification, screens.SpotsNotification);
