import * as dateFns from 'date-fns';
import validator from 'validator';
import R from 'ramda';
import { minAgeAudience } from './constants';

export const isEmpty = (el) => R.length(el);
export const isFalse = (el) => el;
export const isValidEmail = (el) => validator.isEmail(el);
export const isMinAgeAudience = (d) => dateFns.differenceInYears(new Date(), new Date(d)) >= minAgeAudience;
export const isFuture = (d) => dateFns.differenceInMinutes(new Date(d), new Date()) >= 0;
export const isEmptyObject = (obj) => (Object.getOwnPropertyNames(obj).length === 0);
