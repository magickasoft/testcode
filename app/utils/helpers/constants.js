import Config from 'react-native-config';

export const minAgeAudience = 18;

export const addAppName = (screenName) => `${Config.APP_NAME}.${screenName}`;
export const withAppName = (abj) => {
  const newObject = {};
  Object.keys(abj).forEach(key => newObject[key] = addAppName(abj[key])); // eslint-disable-line
  return newObject;
};
