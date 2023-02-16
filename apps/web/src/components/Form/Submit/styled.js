import { colors } from '@vccrn/tokens';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 24px;
  background-color: ${colors.brand.primary};
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.base.white};
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:hover {
    background-color: ${darken(0.1, colors.brand.primary)};
  }
`;

export { StyledButton };
