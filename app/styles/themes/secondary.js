import colors from '../baseColors';

export default {
  theme: 1,
  lightestInert: colors.lightestGrey,
  lightInert: colors.lightGrey,
  inert: colors.grey,
  dartInert: colors.darkGrey,

  activePrimary: colors.blue,
  activeSecondary: colors.orange,
  activeSecondaryOpacity: colors.orangeOpacity,

  backgroundPrimary: colors.white,
  backgroundSecondary: colors.white,

  textPrimary: colors.black,
  textSecondary: colors.darkGrey,
  textInert: colors.lightGrey,

  iconPrimary: colors.grey,
  iconActive: '#c31d5',

  borderPrimary: colors.black,
  progress: colors.lightGreen,

  statusBar: colors.white,
  header: colors.white,
  bottomTabs: colors.white,
  ...colors,
};
