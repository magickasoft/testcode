import React from 'react';
import T from 'prop-types';
import { compose, pure } from 'recompose';
import { View } from 'react-native';
import { withTheme, withLocale } from '@utils/enhancers';
import { Text } from '@components';
import TouchableAvatar from '../TouchableAvatar';
import style from './style';

const Group = ({
  theme: { s },
  label = '',
  people = [],
  color = '#F68C41',
  size = 3
}) => {
  const avatar = (props, index) => <TouchableAvatar key={index} {...props} />;
  const calcPeople = people.length - size;
  const withCount = calcPeople > 0;
  const users = withCount ? people.slice(0, size) : people;
  return users.length > 0 && (
    <View style={s.container}>
      {label && <Text ellipsizeMode="tail" numberOfLines={1} style={s.label}>{label}</Text>}
      <View style={s.row}>
        {users.map(avatar)}
        {withCount && (
          <View style={[s.counter, { backgroundColor: color }]}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={s.value}>{`+${calcPeople}`}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

Group.propTypes = {
  color: T.string,
  label: T.string,
  people: T.array,
  size: T.number,
  theme: T.object
};

export default compose(
  withLocale(),
  pure,
  withTheme(style),
)(Group);
