import R from 'ramda';

const PLACEHOLDER = 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png'; // eslint-disable-line

const types = {
  images: 1,
  files: 2
};

const isFileTypeImage = R.ifElse(
  R.is(Object),
  R.propEq('type', types.images),
  R.always(false),
);

const getImages = (files, placeholder = PLACEHOLDER) => {
  const f = files || [];

  return (R.compose(
    R.ifElse(
      R.isEmpty,
      R.always([placeholder]),
      R.map((el) => el),
    ),
    R.filter(isFileTypeImage),
  )(f));
};

const getImagesUrls = (files, placeholder = PLACEHOLDER, prop = 'filename') => {
  const f = files || [];

  return (R.compose(
    R.ifElse(
      R.isEmpty,
      R.always([placeholder]),
      R.map(R.prop(prop)),
    ),
    R.filter(isFileTypeImage),
  )(f));
};

const getImagesCount = (files, count, placeholder = PLACEHOLDER) => {
  if (!files.length) return new Array(count).fill(placeholder);
  const getFiles = files.slice(0, count);
  return getFiles.length < count
    ? getFiles.concat(getImagesCount(files, count - getFiles.length, placeholder))
    : getFiles;
};

const getImagesUrlsCount = (files, count, placeholder) => getImagesUrls(
  getImagesCount(files, count, placeholder),
  placeholder,
);

export {
  getImages,
  getImagesUrls,
  getImagesCount,
  getImagesUrlsCount
};
