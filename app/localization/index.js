import I18n from 'react-native-i18n';
import en from './en.json';
import fr from './fr.json';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';

I18n.translations = {
  en,
  fr
};

export default I18n;
