import { ReactComponent as VittudeLogo } from '@vccrn/assets/logo-vittude.svg';

import { StyledLogo } from './styled';

const Logo = ({ width, ...props }) => {
  return (
    <StyledLogo width={width} {...props}>
      <VittudeLogo />
    </StyledLogo>
  );
};

export { Logo };
