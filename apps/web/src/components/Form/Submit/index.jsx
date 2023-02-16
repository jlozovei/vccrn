import { StyledButton } from './styled';

const Submit = ({ text, ...props }) => {
  return (
    <StyledButton type="submit" {...props}>
      {text}
    </StyledButton>
  );
};

export { Submit };
