import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '@styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: dimensions.indent / 2
  },
  imagesContainer: {
    marginTop: 10
  },
  mainContent: {
    flex: 1
  },
  itemContainer: {
    width: (dimensions.windowWidth - (dimensions.indent * 4)) / 3,
    padding: 5
  },
  itemInner: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.20,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  content: {
    margin: 10
  },
  title: {
    marginTop: 2,
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '500'
  },
  subTitle: {
    marginTop: 2,
    color: colors.lightGrey,
    fontSize: fontSizes.medium,
    fontWeight: '500'
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: (dimensions.windowWidth - (dimensions.indent * 14)) / 3
  },
  wideBtn2: {
    color: colors.black,
    fontSize: fontSizes.medium
  },
  wrapperWideBtn2: {
    flex: 1,
    backgroundColor: colors.lightestGrey,
    borderRadius: 5,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginVertical: 21
  }
});
