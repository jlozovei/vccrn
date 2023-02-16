import { StyledButton } from './styled';

const Submit = ({ text, isLoading = false, ...props }) => {
  return (
    <StyledButton type="submit" {...props} disabled={isLoading} isLoading={isLoading}>
      {text}
    </StyledButton>
  );
};

export { Submit };
