/* eslint-disable global-require,import/no-dynamic-require */
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';

export const SPRITE_ADD = 'add';
export const SPRITE_ARROW_RIGHT = 'arrow-right';
export const SPRITE_ARROW_RIGHT_LONG = 'arrow-right-long';
export const SPRITE_BELL = 'bell';
export const SPRITE_CAN = 'can';
export const SPRITE_CHECK = 'check';
export const SPRITE_CLEAR = 'clear';
export const SPRITE_CLOCK = 'clock';
export const SPRITE_DOWN = 'down';
export const SPRITE_ENVELOP = 'envelop';
export const SPRITE_PHONE = 'phone';
export const SPRITE_EXCHANGE = 'exchange';
export const SPRITE_EXPORT = 'export';
export const SPRITE_GROUP = 'group';
export const SPRITE_HELP = 'help';
export const SPRITE_INFO = 'info';
export const SPRITE_LOCK = 'lock';
export const SPRITE_LOGOUT = 'logout';
export const SPRITE_MENU = 'menu';
export const SPRITE_MENU_MINIMIZED = 'menu-minimized';
export const SPRITE_MINUS = 'minus';
export const SPRITE_MINUS_FILLED = 'minus-filled';
export const SPRITE_PLUS = 'plus';
export const SPRITE_PLUS_FILLED = 'plus-filled';
export const SPRITE_REMOVE = 'remove';
export const SPRITE_SEARCH = 'search';
export const SPRITE_SECURE = 'secure';
export const SPRITE_SETTINGS = 'settings';
export const SPRITE_SETTINGS_STROKE = 'settings-stroke';
export const SPRITE_SPINNER = 'spinner';
export const SPRITE_USERS = 'users';
export const SPRITE_EXCLAMATION = 'exclamation';
export const SPRITE_EXCLAMATION_ORANGE = 'exclamation-orange';
export const SPRITE_DOWNLOAD = 'download';
export const SPRITE_DELETE = 'delete';
export const SPRITE_DOTS_HORIZONTAL = 'dots-horizontal';
export const SPRITE_DOTS_VERTICAL = 'dots-vertical';
export const SPRITE_EDIT = 'edit';
export const SPRITE_AUDIT = 'audit';
export const SPRITE_IT_EXPORT = 'it-export';

const SPRITES = {
  SPRITE_ADD,
  SPRITE_ARROW_RIGHT,
  SPRITE_ARROW_RIGHT_LONG,
  SPRITE_BELL,
  SPRITE_CAN,
  SPRITE_CHECK,
  SPRITE_CLEAR,
  SPRITE_CLOCK,
  SPRITE_DOWN,
  SPRITE_ENVELOP,
  SPRITE_PHONE,
  SPRITE_EXCHANGE,
  SPRITE_EXPORT,
  SPRITE_GROUP,
  SPRITE_HELP,
  SPRITE_INFO,
  SPRITE_LOCK,
  SPRITE_LOGOUT,
  SPRITE_MENU,
  SPRITE_MENU_MINIMIZED,
  SPRITE_MINUS,
  SPRITE_MINUS_FILLED,
  SPRITE_PLUS,
  SPRITE_PLUS_FILLED,
  SPRITE_REMOVE,
  SPRITE_SEARCH,
  SPRITE_SECURE,
  SPRITE_SETTINGS,
  SPRITE_SETTINGS_STROKE,
  SPRITE_SPINNER,
  SPRITE_USERS,
  SPRITE_EXCLAMATION,
  SPRITE_EXCLAMATION_ORANGE,
  SPRITE_DOWNLOAD,
  SPRITE_DELETE,
  SPRITE_DOTS_HORIZONTAL,
  SPRITE_DOTS_VERTICAL,
  SPRITE_EDIT,
  SPRITE_AUDIT,
  SPRITE_IT_EXPORT
};

export default mapValues(
  mapKeys(SPRITES, (value) => value),
  (sprite) => require(`./${sprite}.svg`).default
);
