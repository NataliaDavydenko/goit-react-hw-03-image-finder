import { ImageGalleryStyled } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery, onClick, imageURL }) => (
    <ImageGalleryStyled>
        <ImageGalleryItem gallery={gallery} onClick={onClick} imageURL={imageURL} />
    </ImageGalleryStyled>
);