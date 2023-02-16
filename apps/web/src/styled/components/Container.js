import { sizes } from '@vccrn/tokens';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: ${sizes.grid.large}px;
  margin: 0 auto;

  @media screen and (max-width: ${sizes.viewports.medium}px) {
    padding: 0 24px;
  }
`;

export { StyledContainer };
