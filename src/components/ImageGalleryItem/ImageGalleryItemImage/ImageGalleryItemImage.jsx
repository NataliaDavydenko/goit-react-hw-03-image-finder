import { ImageGalleryItemImageStyled } from "./ImageGalleryItemImage.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItemImage = ({ src }) => (
    <ImageGalleryItemImageStyled src={src} /> 
)


ImageGalleryItemImage.propType = {
  src: PropTypes.string.isRequired,
};