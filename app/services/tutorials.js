import { AsyncStorage } from 'react-native';
import R from 'ramda';

import { storageKeys } from '@constants';

const parseOrArray = (str) => {
  try {
    return JSON.parse(str) || [];
  } catch (error) {
    return [];
  }
};

export const isCompleted = async (name) => {
  try {
    const storageCompleted = parseOrArray(await AsyncStorage.getItem(storageKeys.completedTutorials));
    return storageCompleted.includes(name);
  } catch (error) {
    return false;
  }
};

export const addToCompleted = async (name) => {
  try {
    const storageCompleted = parseOrArray(await AsyncStorage.getItem(storageKeys.completedTutorials));
    if (!storageCompleted.includes('name')) {
      await AsyncStorage.setItem(storageKeys.completedTutorials, JSON.stringify([...storageCompleted, name]));
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const removeFromCompleted = async (name) => {
  try {
    const storageCompleted = parseOrArray(await AsyncStorage.getItem(storageKeys.completedTutorials));
    const index = storageCompleted.findIndex(R.equals(name));
    if (index !== -1) {
      storageCompleted.splice(index, 1);
      await AsyncStorage.setItem(storageKeys.completedTutorials, JSON.stringify(storageCompleted));
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const resetAllTutorials = () => AsyncStorage.removeItem(storageKeys.completedTutorials)
  .then(() => true)
  .catch(() => false);
