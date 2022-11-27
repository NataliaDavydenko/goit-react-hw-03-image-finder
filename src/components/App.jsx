import { Component } from 'react';
import { AppStyled } from './App.styled';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { SearchForm } from './SearchForm/SearchForm';
import { fetchImages } from '../services/imgApi';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    inputText: '',
    loading: false,
    total: null,
    largeImageURL: null,
  };

  handleFormSubmit = inputText => {
    if (inputText.trim().length === 0) {
      return;
    }
    this.setState({ inputText, gallery: [] });
  };

  onClickLoadMoreBtn = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  showModalImg = largeImageURL => {
    const item = this.state.gallery.find(
      item => item.largeImageURL === largeImageURL
    );
    this.setState({
      showModal: {
        largeImageURL: item.largeImageURL,
        tags: item.tags,
      },
    });
  };

  closeModalImg = () => {
    this.setState({ showModal: null });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.inputText !== this.state.inputText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
        await fetchImages(this.state.inputText, this.state.page).then(data =>
          this.setState(prevState => {
            return { gallery: [...prevState.gallery, ...data.hits], total: data.totalHits };
          })
        );
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <AppStyled>
        <Searchbar>
          <SearchForm onSubmit={this.handleFormSubmit} />
        </Searchbar>
        {this.state.gallery.length > 0 && (
          <>
            <ImageGallery
              gallery={this.state.gallery}
              openModal={this.showModalImg} 
            />
            {this.state.gallery.length < this.state.total && (
              <Button text="Load more" onClick={this.onClickLoadMoreBtn} />
            )}
          </>
        )}
        {this.state.loading && <Loader />}
        {this.state.showModal && (
          <Modal
            largeImageUrl={this.state.showModal.largeImageURL}
            tags={this.state.showModal.tags}
            closeModal={this.closeModalImg}
          />
        )}
      </AppStyled>
    );
  }
}
