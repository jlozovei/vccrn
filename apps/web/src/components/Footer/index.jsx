import { ReactComponent as BlankAlert } from '@vccrn/assets/blank-alert.svg';

import { Logo } from '@/components';

import { StyledContainer } from '@/styled';
import {
  StyledFooter,
  StyledDisclaimer,
  StyledResponsible,
  StyledNotice,
  StyledInstitutional
} from './styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter data-testid="footer">
      <StyledDisclaimer data-testid="footer-disclaimer">
        <StyledContainer>
          <StyledResponsible>
            <h6>Responsável Técnico</h6>
            <p>Fábio Camillo da Silva</p>
            <p>CRP (06/84133)</p>
          </StyledResponsible>

          <StyledNotice>
            <BlankAlert />

            <p>
              Atenção: este site não oferece tratamento ou aconselhamento imediato para pessoas em
              crise suicida. Em caso de crise, ligue para <strong>188 (CVV)</strong> ou acesse o
              site <strong>www.cvv.org.br</strong>. Em caso de emergência, procure atendimento em um
              hospital mais próximo.
            </p>
          </StyledNotice>
        </StyledContainer>
      </StyledDisclaimer>

      <StyledInstitutional data-testid="footer-copy">
        <StyledContainer>
          <small>Copyright &copy; {currentYear}</small>

          <Logo width="100" data-testid="footer-logo" />
        </StyledContainer>
      </StyledInstitutional>
    </StyledFooter>
  );
};

export { Footer };
