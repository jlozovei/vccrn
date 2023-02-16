import { StyledLabel } from './styled';

const Label = ({ text, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export { Label };
