import { colors } from '@vccrn/tokens';
import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 24px;
  background-color: ${colors.brand.primary};
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.isLoading ? colors.brand.primary : colors.base.white)};
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:hover {
    background-color: ${darken(0.1, colors.brand.primary)};
  }

  &:after {
    display: ${(props) => (props.isLoading ? 'block' : 'none')};
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
    width: 24px;
    height: 24px;
    border: 4px solid ${colors.base.white};
    border-top-color: ${colors.base.gray};
    border-radius: 50%;
    content: '';
    animation: ${rotate} 1s linear infinite;
  }
`;

export { StyledButton };
