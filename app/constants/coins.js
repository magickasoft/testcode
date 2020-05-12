export const coinActions = {
  P2P_SEND_TOKENS: 5,
  PROFILE_NEW_WALL_POST: 10,
  PROFILE_NEW_WALL_POST_COMMENT: 11,
  PLACE_CHECKIN: 22,
  PLACE_REVIEW: 20,
  BUY_VIP_1WEEK: -2,
  WEBSITE_GIFT: 7,
  LOYALTY_PROGRAM_BONUS: 15
};

export const coinActionNames = {
  [coinActions.P2P_SEND_TOKENS]: 'P2P Send Tokens',
  [coinActions.PROFILE_NEW_WALL_POST]: 'New post on wall',
  [coinActions.PROFILE_NEW_WALL_POST_COMMENT]: 'Comment wall post',
  [coinActions.PLACE_CHECKIN]: 'Place check-in',
  [coinActions.PLACE_REVIEW]: 'Review place',
  [coinActions.BUY_VIP_1WEEK]: 'Buy VIP for 1 week',
  [coinActions.WEBSITE_GIFT]: 'Website gift',
  [coinActions.LOYALTY_PROGRAM_BONUS]: 'Loyalty program bonus'
};
