import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageGalleryItemImageStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ gallery, openModal }) => {
  return gallery.map(image => (
    <ImageGalleryItemStyled
      key={image.id}>
      <ImageGalleryItemImageStyled src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
        loading="lazy" />
    </ImageGalleryItemStyled>
  ));
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};