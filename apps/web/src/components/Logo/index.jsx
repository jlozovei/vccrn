import vittudeLogo from '@vccrn/assets/logo-vittude.svg';

import { StyledLogo } from './styled';

const Logo = ({ width, ...props }) => {
  return (
    <StyledLogo width={width} {...props}>
      <img src={vittudeLogo} alt="Vittude" />
    </StyledLogo>
  );
};

export { Logo };
