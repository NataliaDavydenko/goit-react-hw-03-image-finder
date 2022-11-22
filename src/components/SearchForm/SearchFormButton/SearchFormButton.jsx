import { SearchFormButtonStyled } from './SearchFormButton.styled';
import { BiSearch } from 'react-icons/bi';

export const SearchFormButton = () => (
  <SearchFormButtonStyled type="submit">
    <BiSearch size="34" />
  </SearchFormButtonStyled>
);
