import { StyleSheet } from 'react-native';

import { fontSizes, colors } from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  infoBlock: {
    marginLeft: 12,
  },
  name: {
    fontSize: fontSizes.larger,
  },
  time: {
    fontSize: fontSizes.smaller,
    color: colors.grey,
  },
});
