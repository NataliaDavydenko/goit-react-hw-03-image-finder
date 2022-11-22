import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import { ImageGalleryItemImage } from './ImageGalleryItemImage/ImageGalleryItemImage';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openGalleryItemModal = id => {
    this.showModal();
    const galleryItem = this.props.gallery.filter(item => item.id === id);
    this.setState({ largeImage: galleryItem[0].largeImageURL });
  };

  render() {
    return (
      <>
        {this.props.gallery.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItemStyled
              key={id}
              onClick={() => {
                this.props.onClick(largeImageURL);
                this.showModal();
              }}
            >
              <ImageGalleryItemImage src={webformatURL} />
            </ImageGalleryItemStyled>
          );
        })}
        {this.state.showModal && (
          <Modal src={this.props.imageURL} onClose={this.showModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propType = {
  gallery: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
