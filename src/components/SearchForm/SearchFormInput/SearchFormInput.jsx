import { SearchFormInputStyled } from './SearchFormInput.styled';

export const SearchFormInput = ({ value, onChange }) => (
  <SearchFormInputStyled
    type="text"
    autocomplete="off"
    autoFocus
    placeholder="Search images and photos"
    value={value}
    onChange={onChange}
  />
);
