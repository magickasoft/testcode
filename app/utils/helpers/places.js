import R from 'ramda';
import I18n from 'react-native-i18n';

import {
  placesCategoriesEn,
  placesCategoriesFr
} from '../../constants/places';

export const categoryNameFromId = (categoryId) =>
  R.propOr('None', categoryId, I18n.locale === 'fr' ? placesCategoriesFr : placesCategoriesEn);

export const getCategoriesList = () =>
  Object.values(I18n.locale === 'fr' ? placesCategoriesFr : placesCategoriesEn);
