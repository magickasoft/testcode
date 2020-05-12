import colors from '../baseColors';

export default {
  theme: 2,
  lightestInert: colors.lightestGrey,
  lightInert: colors.lightGrey,
  inert: colors.grey,
  dartInert: colors.darkGrey,

  activePrimary: colors.blue,
  activeSecondary: colors.orange,
  activeSecondaryOpacity: colors.orangeOpacity,

  backgroundPrimary: colors.white,
  backgroundSecondary: colors.opacityGrey,

  textPrimary: colors.black,
  textSecondary: colors.darkGrey,
  textInert: colors.lightGrey,

  iconPrimary: colors.grey,
  iconActive: '#c31d5',

  borderPrimary: colors.black,
  progress: colors.lightGreen,

  statusBar: colors.opacityGrey,
  header: colors.opacityGrey,
  bottomTabs: colors.opacityGrey,
  ...colors,
};
