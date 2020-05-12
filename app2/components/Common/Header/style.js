import { StyleSheet } from 'react-native';
import { color } from 'theme';

import { iPhoneHeaderPadding } from 'utils';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  headerWrap: {
    paddingTop: iPhoneHeaderPadding,
    paddingBottom: 15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerTitle: {
    fontSize: 17,
    color: color.white,
    marginLeft: 0,
    textAlignVertical: 'top',
    lineHeight: 20,
    fontWeight: '600'
  },
  headerTitleCenter: {
    flex: 1,
    textAlign: 'center'
  },
  rightHeaderButton: {
    color: color.primaryText,
    fontSize: 14
  },
  prorderHeader: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingHorizontal: 16
  },
  badge: {
    position: 'absolute',
    top: 2,
    left: 20
  }
});

export default styles;
