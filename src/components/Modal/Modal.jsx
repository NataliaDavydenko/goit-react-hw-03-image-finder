import { ModalStyled, Overlay } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={this.props.largeImageUrl} alt={this.props.tags} />
        </ModalStyled>
      </Overlay>
    );
  }
}
