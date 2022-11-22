import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ text, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {text}
  </ButtonStyled>
);

Button.propType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
