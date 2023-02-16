import { colors } from '@vccrn/tokens';
import styled from 'styled-components';

import { StyledRow } from '@/components/Form/Row/styled';
import { StyledInput } from '@/components/Form/Input/styled';

const StyledField = styled(StyledRow)`
  margin-bottom: 16px;
  padding: 12px;
  color: ${colors.brand.primary};
  background-color: ${colors.base.white};
  border: 1px solid ${colors.base.gray};
  border-radius: 4px;
  outline: none;
  text-align: left;
  transition: all ease-in-out 200ms;

  &:focus-within {
    border-color: ${colors.brand.primary};
  }

  ${StyledInput} {
    padding: 0;
    border: none;
  }
`;

const StyledError = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.context.error};
`;

export { StyledField, StyledError };
