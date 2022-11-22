import { ModalStyled, Overlay } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener('click', this.handleBackdropClick);
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener('click', this.handleBackdropClick);
    }
    
  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={this.props.src} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}
