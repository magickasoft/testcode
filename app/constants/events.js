import I18n from 'react-native-i18n';

export const eventCategories = [
  { label: I18n.t('events.category.fashion'), value: 1 },
  { label: I18n.t('events.category.entertainment'), value: 2 },
  { label: I18n.t('events.category.travels'), value: 3 }
];

export const eventStatus = ({ isAction = true } = { }) => ([
  { label: isAction ? I18n.t('events.status.unattend') : I18n.t('events.status.optedOut'), value: 3 },
  { label: I18n.t('events.status.maybe'), value: 5 },
  { label: I18n.t('events.status.going'), value: 10 }
]);

export const postEventStatus = {
  NOT_MODERATION: 1,
  UNDER_MODERATION: 3,
  BLOCKED_SPAM: 5,
  BLOCKED_ANGRY: 6,
  BLOCKED_SEX: 7,
  ACTIVE: 10,
  IS_DRAFT: 11
};
