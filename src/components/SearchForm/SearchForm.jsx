import { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchFormStyled } from './SearchForm.styled';
import { SearchFormInput } from './SearchFormInput/SearchFormInput';
import { SearchFormButton } from './SearchFormButton/SearchFormButton';

export class SearchForm extends Component {
  state = {
    inputText: '',
  };

  handleTextChange = event => {
    this.setState({ inputText: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputText.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.inputText);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchFormButton />
        <SearchFormInput
          value={this.state.inputText}
          onChange={this.handleTextChange}
        />
      </SearchFormStyled>
    );
  }
}

SearchForm.propType = {
  inputText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
