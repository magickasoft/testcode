import React from 'react';
import T from 'prop-types';
import { compose, pure } from 'recompose';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from '@utils/enhancers';
import { Text, Popover, AnimatedTitle } from '@components';
import style from './styles';

const Line = ({
  isLoading = false,
  theme: { s },
  title = '',
  image,
  onPress
}) => {
  const Component = onPress ? TouchableOpacity : View;
  const handlePress = (title) => () => {
    if (onPress) {
      onPress(title);
    }
  };
  return (
    <Component style={s.infoElement} onPress={handlePress(title)}>
      {image && <FastImage source={image} style={s.infoElementIcon} />}
      {title.length > 0 && (
        onPress
          ? (
            <AnimatedTitle
              isAbsolute={false}
              isLoading={isLoading}
              title={title}
              titleStyle={{ ...s.label }}
            />
          )
          : (
            <Popover
              title={title}
              titleProps={{ ellipsizeMode: 'tail', numberOfLines: 1, isLoading }}
              titleStyle={{ ...s.infoElementText, ...s.label }}
              contentStyle={s.infoElementPopover}
            >
              <Text>{title}</Text>
            </Popover>
          )
      )}
    </Component>
  );
};

Line.propTypes = {
  image: T.oneOfType([T.string, T.object, T.number]),
  isLoading: T.bool,
  onPress: T.func,
  theme: T.object,
  title: T.string
};

export default compose(
  pure,
  withTheme(style),
)(Line);
