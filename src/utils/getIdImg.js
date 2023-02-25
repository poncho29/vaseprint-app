export const getIdImg = (url = '') => {
  if (!url) return;

  const urlArr = url.split('/');
  const name = urlArr[urlArr.length - 1];
  const [public_id] = name.split('.');

  return public_id;
}