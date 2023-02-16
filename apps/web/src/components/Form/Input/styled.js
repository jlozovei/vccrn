import { colors } from '@vccrn/tokens';
import styled from 'styled-components';

import Eye from '@vccrn/assets/eye.svg';
import EyeSlash from '@vccrn/assets/eye-slash.svg';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1.125rem;
  color: ${colors.brand.primary};
  background-color: ${colors.base.white};
  border: 1px solid ${colors.base.gray};
  border-radius: 4px;
  outline: none;
  transition: all ease-in-out 200ms;

  &:focus {
    border-color: ${colors.brand.primary};
  }
`;

const StyledShowPassword = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 24px;
  height: 24px;
  background: no-repeat center/contain;
  background-image: url(${(props) => (props.show ? EyeSlash : Eye)});
  border: none;
  outline: none;
  cursor: pointer;
  transform: translateY(-12px);
`;

export { StyledInput, StyledShowPassword };
