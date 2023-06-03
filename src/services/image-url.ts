import noimage from '../assets/no-image-placeholder.webp'

const getCroppedIamgeUrl = (url: string) => {
  if (!url) return noimage;
  const target = 'media/';
  const index = url.indexOf('media/') + 'media/'.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}


export default getCroppedIamgeUrl;