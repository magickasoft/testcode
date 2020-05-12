import { withProps } from 'recompose';
import I18n from 'react-native-i18n';

// Mostly used just to update "pure" components when language changing
export default () => withProps(() => ({
  locale: I18n.locale,
}));

