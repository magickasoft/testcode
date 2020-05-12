import R from 'ramda';
import { setBadge } from '@navigation';
import { errors } from '@utils/helpers';

import queries from './queries';
import { getChatIdFromMessage } from './utils';
import { screens } from '../../constants';
import { MESSAGES_LIMIT } from './constants';

export const clearUnreadMessages = errors.handleError((store, interlocutorId, myProfileId) => {
  const dialogsData = store.readQuery({ query: queries.GET_DIALOGS });
  const dialogId = getChatIdFromMessage({
    mprofile_id_from: interlocutorId,
    mprofile_id_to: myProfileId,
  });

  const index = dialogsData.dialogList.findIndex(R.propEq('id', dialogId));
  if (index !== -1) {
    dialogsData.dialogList[index] = {
      ...dialogsData.dialogList[index],
      unreadMessages: 0,
    };
    store.writeQuery({
      query: queries.GET_DIALOGS,
      data: dialogsData,
    });
  }
  setBadge(screens.DialogsList, dialogsData.dialogList);
}, 'Cannot clear unread messages');

export const removeDialogMessages = errors.handleError((store, interlocutorId) => {
  const variables = {
    target_profile_id: interlocutorId,
    offset: 0,
    limit: MESSAGES_LIMIT,
  };
  const dialogData = store.readQuery({
    query: queries.GET_DIALOG,
    variables,
  });
  dialogData.dialog.messages = [];

  store.writeQuery({
    query: queries.GET_DIALOG,
    data: dialogData,
    variables,
  });
}, 'Cannot remove messages from dialog');
