import { colors, sizes } from '@vccrn/tokens';
import styled from 'styled-components';

import { StyledContainer } from '@/styled';

const StyledFooter = styled.footer`
  ${StyledContainer} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    max-width: ${sizes.grid.large}px;
  }
`;

const StyledDisclaimer = styled.div`
  padding: 48px 0;
  background-color: #313a4d;
  color: ${colors.base.white};

  ${StyledContainer} {
    @media screen and (max-width: ${sizes.viewports.medium}px) {
      flex-flow: column;
      align-items: stretch;
      justify-content: center;
    }
  }
`;

const StyledResponsible = styled.div`
  flex-basis: 40%;
  width: 40%;

  @media screen and (max-width: ${sizes.viewports.medium}px) {
    flex-basis: 100%;
    width: 100%;
    margin-bottom: 24px;
    text-align: center;
  }
`;

const StyledNotice = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 60%;
  width: 60%;

  img {
    width: 38px;
    margin-right: 24px;
  }

  p {
    flex: 1;
  }

  @media screen and (max-width: ${sizes.viewports.medium}px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const StyledInstitutional = styled.div`
  padding: 24px 0;
  background-color: ${colors.base.white};
`;

export { StyledFooter, StyledDisclaimer, StyledResponsible, StyledNotice, StyledInstitutional };
