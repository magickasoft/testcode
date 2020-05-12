import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import * as Animatable from 'react-native-animatable';
import R from 'ramda';

import {
  ProgressBar,
  ButtonRound as ButtonR,
  Button,
  TextArea,
  Rating,
  Container,
  Text,
  CustomHeader,
  BackBtn,
} from '../../components';
import styles, { dimensions } from '@styles';
import { scalePressed } from '@utils/animation';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import { Avatar } from '@containers';

// eslint-disable-next-line
const ButtonRound = ({ titleStyle, containerStyle, s, ...props }) => (
  <ButtonR
    typeTitle="center"
    titleStyle={[s.titleStyle, titleStyle]}
    containerStyle={[s.button, containerStyle]}
    {...props}
    shadow={false}
  />
);

const AnimatableView = props => (
  <Animatable.View
    duration={300}
    useNativeDriver
    easing="ease-in"
    animation="slideInRight"
    style={styles.fillAll}
    {...props}
  />
);

const ButtonRoundScale = scalePressed(ButtonRound);

const initComment = 'Example: This is my first time at this place and I am in love with the people! ' +
  'Great location, friendly stuff, safe surroundings! Highly recommend!';

const SpotsPoll = ({
  answers,
  comment,
  onChangeComment,
  onAnswer,
  onSubmit,
  onChangeRating,
  rating,
  polls,
  place,
  theme: {
    s,
  },
  poolImages,
}) => (
  <Container style={styles.fillAll}>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: R.pathOr('POLL', ['title'], place) }}
    />
    <View style={[styles.fillAll, s.root]}>
      <ProgressBar value={answers.length / polls.length} />
      {[...polls.map(({ _id, question }) => (
        <AnimatableView key={`${_id}`}>
          <View style={[s.avatarContainer, styles.shadowRound]}>
            <Avatar
              containerStyle={s.avatar}
              uri={poolImages[_id]}
              size="large"
            />
          </View>
          <Text style={s.question}>{question}</Text>
          <View style={s.buttonContainer}>
            <ButtonRoundScale s={s} title="No" onPress={() => onAnswer(0)} />
            <ButtonRoundScale s={s} title="Yes" onPress={() => onAnswer(1)} />
          </View>
        </AnimatableView>
      )), (
        <AnimatableView style={s.containerSecond} key="submit">
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
        </AnimatableView>
      )][answers.length]}
    </View>
  </Container>
);

SpotsPoll.propTypes = {
  answers: T.array,
  comment: T.string,
  onChangeComment: T.func,
  onAnswer: T.func,
  onSubmit: T.func,
  onChangeRating: T.func,
  rating: T.number,
  polls: T.array,
  place: T.object,
  theme: T.object,
  poolImages: T.array,
};

export default createScreen(SpotsPoll, screens.SpotsPoll);
