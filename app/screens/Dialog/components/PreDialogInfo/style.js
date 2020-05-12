import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '@styles';

const radiusSubmit = dimensions.verticalIndent * 4;

const styles = colors => StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: dimensions.verticalIndent * 6.5,
    paddingBottom: dimensions.verticalIndent * 10.5,
    paddingHorizontal: dimensions.indent * 1,
  },
  textHeader: {
    marginTop: dimensions.verticalIndent * 3,
    color: '#222',
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.large,
  },
  textDescription: {
    marginTop: dimensions.verticalIndent * 1,
    textAlign: 'center',
    color: '#666',
  },

  // button
  gotItContainerStyle: {
    width: '75%',
    height: radiusSubmit,
    marginTop: dimensions.verticalIndent * 3,
    borderRadius: radiusSubmit / 2,
    borderWidth: 1,
    borderColor: colors.activePrimary,
    backgroundColor: colors.activePrimary,
    alignSelf: 'center',
  },
  gotItStyle: {
    color: colors.white,
    fontSize: fontSizes.large,
    // alignItems: 'center',
    // paddingVertical: dimensions.verticalIndent * 2,
  },
  avatarImg: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
});

export default styles;
