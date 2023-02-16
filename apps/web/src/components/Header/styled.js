import { colors, sizes } from '@vccrn/tokens';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { StyledContainer } from '@/styled';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 24px 0;
  background-color: ${colors.base.white};
  border-bottom: 12px solid ${colors.brand.primary};
  z-index: 1;

  ${StyledContainer} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

const StyledMenu = styled.nav`
  @media screen and (max-width: ${sizes.viewports.medium}px) {
    position: fixed;
    right: -100vw;
    top: 0;
    background: ${rgba(colors.base.black, 0.5)};
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transition: all ease-in-out 350ms;

    ${(props) =>
      props.open &&
      css`
        right: 0;
      `}
  }
`;

const StyledMenuList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${sizes.viewports.medium}px) {
    position: absolute;
    right: 0;
    width: 70vw;
    height: 100%;
    flex-flow: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding-top: 128px;
    background-color: ${colors.base.white};
  }

  @media screen and (min-width: ${sizes.viewports.medium}px) {
    height: 100%;
  }
`;

const StyledMenuListItem = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 24px 12px;

  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.brand.primary};
    content: '';
    transition: all ease-in-out 200ms;
  }

  &:hover {
    a {
      color: ${colors.brand.primary};
    }

    &:after {
      left: 0;
      width: 100%;
    }
  }

  @media screen and (min-width: ${sizes.viewports.medium}px) {
    height: 100%;
    padding: 8px;
  }
`;

const StyledMenuLink = styled.a`
  cursor: pointer;
  transition: color ease-in-out 200ms;
`;

const StyledHamburger = styled.button`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
  appearance: none;
  border: 0;
  outline: 0;
  background-color: transparent;
  z-index: 2;

  @media screen and (min-width: ${sizes.viewports.medium}px) {
    display: none;
  }

  span {
    display: block;
    position: relative;
    height: 0.125rem;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #595959;
    border-radius: 10px;
    opacity: 1;
    pointer-events: none;
    transition: all 0.31s cubic-bezier(0.4, 0, 0.2, 1);

    & + span {
      margin-top: 0.35rem;
    }
  }

  ${(props) =>
    props.open &&
    css`
      span {
        &:nth-child(1) {
          transform: rotate(40deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-40deg);
          top: -4px;
        }

        & + span {
          margin-top: 0;
        }
      }
    `}
`;

export {
  StyledHeader,
  StyledMenu,
  StyledMenuList,
  StyledMenuListItem,
  StyledMenuLink,
  StyledHamburger
};
