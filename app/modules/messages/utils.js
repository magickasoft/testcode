
export const getChatIdFromMessage = ({ mprofile_id_from, mprofile_id_to }) => {
  const lowerId = Math.min(mprofile_id_from, mprofile_id_to);
  const biggerId = Math.max(mprofile_id_from, mprofile_id_to);
  return `${lowerId}:${biggerId}`;
};
