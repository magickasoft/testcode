import * as dateFns from 'date-fns';
import fr from 'date-fns/locale/fr';
import en from 'date-fns/locale/en-US';
import I18n from 'react-native-i18n';

const onlineTimeInMs = 300 * 1000;

export const getIsOnline = (lastOnlineTS) => {
  if (!lastOnlineTS) return false;
  return lastOnlineTS * 1000 > Date.now() - onlineTimeInMs;
};

export const getTextOnlineStatus = (lastOnlineTS) => {
  if (!lastOnlineTS) return '';
  const lastOnline = lastOnlineTS * 1000;
  const dateNow = Date.now();
  if (lastOnline > dateNow - onlineTimeInMs) return 'online';
  if (I18n.locale === 'fr') {
    return dateFns.formatDistanceToNow(new Date(lastOnline), { locale: fr, addSuffix: true });
  }
  const dateString = dateFns.formatDistanceToNow(new Date(lastOnline), { locale: en });
  return `${I18n.t('date.last_seen')} ${dateString} ${I18n.t('date.ago')}`;
};
