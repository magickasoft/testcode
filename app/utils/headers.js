import { tokens as constTokens } from '../constants';

const {
  AUTH_TOKEN,
  ID_PROFILE
} = constTokens;

export const getHeaders = (tokens) => {
  const headers = {};

  if (tokens[ID_PROFILE]) {
    headers.profileId = tokens[ID_PROFILE];
  }

  if (tokens[AUTH_TOKEN]) {
    headers.authorization = `Bearer ${tokens[AUTH_TOKEN]}`;
  }

  return headers;
};
