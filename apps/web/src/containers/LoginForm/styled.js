import { colors } from '@vccrn/tokens';
import styled, { css } from 'styled-components';

import { StyledContainer } from '@/styled';
import { StyledRow } from '@/components/Form/Row/styled';

const StyledSection = styled.section`
  padding: 72px 0;

  h2 {
    margin-bottom: 48px;
  }

  ${StyledContainer} {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
  }

  ${StyledRow} {
    a {
      display: inline-block;
      color: ${colors.brand.primary};
    }

    button {
      border-radius: 0 0 4px 4px;
    }
  }
`;

const StyledProfile = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledProfileItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  width: 50%;
  padding: 12px;
  font-size: 1.125rem;
  transition: all ease-in-out 200ms;

  ${(props) =>
    props.active
      ? css`
          color: ${colors.brand.primary};
        `
      : css`
          color: ${colors.base.gray};
          filter: grayscale(100%);
        `}

  svg {
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: center;
  padding: 24px 24px 0;
  background-color: #fafafa;
  box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
  border-radius: 4px 4px 0 0;
`;

const StyledForgotPassword = styled(StyledRow)`
  margin-bottom: 16px;
  text-align: right;
`;

const StyledCreateAccount = styled(StyledRow)`
  margin-top: 32px;
`;

export {
  StyledSection,
  StyledProfile,
  StyledProfileItem,
  StyledFormContainer,
  StyledForgotPassword,
  StyledCreateAccount
};
