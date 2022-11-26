import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem gallery={gallery} openModal={openModal} />
    </ImageGalleryStyled>
  );
};
