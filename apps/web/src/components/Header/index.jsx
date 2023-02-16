import { useState } from 'react';

import { StyledContainer } from '@/styled';
import { Logo } from '@/components';

import {
  StyledHeader,
  StyledMenu,
  StyledMenuList,
  StyledMenuListItem,
  StyledMenuLink,
  StyledHamburger
} from './styled';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResponsibleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader data-testid="header">
      <StyledContainer>
        <Logo width="130" data-testid="header-logo" />

        <StyledHamburger
          onClick={() => handleResponsibleMenu()}
          open={menuOpen}
          data-testid="header-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </StyledHamburger>

        <StyledMenu data-testid="header-menu" open={menuOpen} aria-expanded={menuOpen}>
          <StyledMenuList>
            <StyledMenuListItem>
              <StyledMenuLink>Como funciona</StyledMenuLink>
            </StyledMenuListItem>
            <StyledMenuListItem>
              <StyledMenuLink>Para você</StyledMenuLink>
            </StyledMenuListItem>
            <StyledMenuListItem>
              <StyledMenuLink>Para psicólogos</StyledMenuLink>
            </StyledMenuListItem>
            <StyledMenuListItem>
              <StyledMenuLink>Para empresas</StyledMenuLink>
            </StyledMenuListItem>
            <StyledMenuListItem>
              <StyledMenuLink>Blog</StyledMenuLink>
            </StyledMenuListItem>
          </StyledMenuList>
        </StyledMenu>
      </StyledContainer>
    </StyledHeader>
  );
};

export { Header };
