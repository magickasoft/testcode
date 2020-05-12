import R from 'ramda';

const createFile = (filename, profile) => ({
  id: -1,
  filename,
  type: 1,
  ts: Date.now().valueOf() / 1000,
  likes: 0,
  isLiked: false,
  mprofile: R.pick(['id', 'lastname', 'name', 'photo', '__typename'], profile),
  __typename: 'PlaceFile',
});

export {
  createFile,
};
