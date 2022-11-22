import { Component } from 'react';
import { AppStyled } from './App.styled';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { SearchForm } from './SearchForm/SearchForm';
import { fetchImages } from '../services/imgApi';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    inputText: '',
    loading: false,
    total: null,
    imageURL: null,
  };

  handleFormSubmit = inputText => {
    if (inputText.trim().length === 0) {
      return;
    }
    this.setState({ inputText, loading: true });

    fetchImages(inputText, this.state.page).then(data =>
      this.setState({
        gallery: [...data.hits],
        total: data.totalHits,
      })
    );
  };

  onClickLoadMoreBtn = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1, loading: true };
    });
    fetchImages(this.state.inputText, this.state.page).then(data =>
      this.setState(prevState => {
        return { gallery: [...prevState.gallery, ...data.hits] };
      })
    );
  };

  onClickGalleryImage = imageURL => {
    this.setState({ imageURL });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.gallery !== this.state.gallery) {
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
              onClick={this.onClickGalleryImage}
              imageURL={this.state.imageURL}
            />
            {this.state.total !== this.state.gallery.length && (
              <Button text="Load more" onClick={this.onClickLoadMoreBtn} />
            )}
          </>
        )}
        {this.state.loading && <Loader />}
      </AppStyled>
    );
  }
}
