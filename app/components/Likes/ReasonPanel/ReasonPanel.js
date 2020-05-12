import React from 'react';
import { Animated, ScrollView, View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';

import Touchable from '../../Touchable/index';
import IconVector from '../../IconVector/index';
import Text from '../../Text/index';
import * as transform from '../../../utils/animation/transform';
import { likeTypes } from '../../../constants/like';
import colors from '../../../styles/colors';
import s from './styles';

const IconSize = 23;

const icons = {
  close: {
    type: 'MaterialCommunityIcons',
    name: 'close',
    size: IconSize,
    color: colors.white
  }
};

const options = {
  [likeTypes.like]: [
    I18n.t('like.useful'),
    I18n.t('like.funny'),
    I18n.t('like.witty')
  ],
  [likeTypes.dislike]: [
    I18n.t('dislike.sexism'),
    I18n.t('dislike.racism'),
    I18n.t('dislike.homophobia'),
    I18n.t('dislike.spam'),
    I18n.t('dislike.offensive'),
    I18n.t('dislike.disagree')
  ]
};

const submitedText = {
  [likeTypes.like]: I18n.t('like.submitedText'),
  [likeTypes.dislike]: I18n.t('dislike.submitedText')
};

const ReasonPanel = ({
  type = likeTypes.dislike,
  translateY,
  isVisible,
  isTextVisible,
  isButtonsVisible,
  onClick,
  onClose
}) => isVisible && (
  <Animated.View
    style={[
      s.container,
      transform.translateY(translateY)
    ]}
  >
    <Touchable style={s.closeButton} onPress={onClose}>
      <View>
        <IconVector {...icons.close} />
      </View>
    </Touchable>
    {
      isTextVisible &&
      <View style={s.textContainer}>
        <Text style={s.text}>{submitedText[type]}</Text>
      </View>
    }
    {
      isButtonsVisible &&
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.options}
      >
        {
          options[type].map((item, index) => (
            <Touchable
              style={s.option}
              key={`${item}-${index}`} // eslint-disable-line
              onPress={() => onClick(item)}
            >
              <Text style={s.optionText}>{item}</Text>
            </Touchable>
          ))
        }
      </ScrollView>
    }
  </Animated.View>
);


ReasonPanel.propTypes = {
  isButtonsVisible: T.bool,
  isTextVisible: T.bool,
  isVisible: T.bool,
  onClick: T.func,
  onClose: T.func,
  translateY: T.object,
  type: T.string
};

export default ReasonPanel;
