import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../../../styles';

export default colors => StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: dimensions.indent,
    marginVertical: dimensions.indent,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.20,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  image: {
    width: '100%',
    height: dimensions.indent * 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.transparent,

  },
  content: {
    padding: dimensions.indent,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  date: {
    color: colors.orange,
    fontSize: fontSizes.small,
    fontWeight: '400',
  },
  title: {
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '500',
  },
  address: {
    color: colors.lightGrey,
    fontSize: fontSizes.small,
    fontWeight: '400',
  },
  draft: {
    top: 0,
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    paddingVertical: dimensions.indent / 2,
    paddingHorizontal: dimensions.indent,
    backgroundColor: '#FBD708',
    position: 'absolute',
  },

  draftText: {
    fontSize: fontSizes.xSmall,
  },
});
