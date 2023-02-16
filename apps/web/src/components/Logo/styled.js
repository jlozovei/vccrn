import styled from 'styled-components';

const StyledLogo = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : '150px')};

  img {
    display: block;
    max-width: 100%;
  }
`;

export { StyledLogo };
