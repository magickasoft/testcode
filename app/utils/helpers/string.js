const toUpperFirst = (str) => {
  const str1 = str[0].toUpperCase();
  const str2 = str.slice(1);

  return str1 + str2;
};
const removeSpaces = (string) => string.split(' ').join('');
const has = (string) => (string ? `${string} ` : '');

const getUrl = (url, name) => {
  if (url) {
    const arr = url.split('_big');
    return arr.join(name);
  }

  return undefined;
};

const validURL = (str) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
};

export {
  toUpperFirst,
  removeSpaces,
  has,
  getUrl,
  validURL
};
