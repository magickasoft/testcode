import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  container: {
    backgroundColor: '#fff'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 7,
    paddingVertical: 7
  },
  defaultText: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    fontSize: 14
  },
  closeText: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    fontSize: 17,
    color: '#000',
    fontWeight: '500'
  },
  containerSwipe: {
    position: 'absolute',
    top: -18,
    left: 0,
    width: '100%',
    height: 18,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundedRectangle: {
    backgroundColor: '#ccc',
    width: 55,
    height: 5,
    borderRadius: 5
  }
});

export const optionsModalStyle = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 16
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8
  },
  row: {
    width: '100%',
    height: 56,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d8d8d8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  rowLast: {
    borderBottomWidth: 0
  },
  label: {
    paddingHorizontal: 16,
    fontSize: 17,
    fontWeight: '600',
    color: '#373737'
  },
  labelWithoutIcon: {
    paddingHorizontal: 0,
    paddingRight: 16
  },
  cancel: {
    marginTop: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
