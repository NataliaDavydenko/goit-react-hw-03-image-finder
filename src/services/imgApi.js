const KEY = '30285859-60db0152e0f1b0f784a28a816';

export const fetchImages = (inputText, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${inputText}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => responce.json());
};
