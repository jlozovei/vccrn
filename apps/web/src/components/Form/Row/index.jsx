import { StyledRow } from './styled';

const Row = ({ children, ...props }) => <StyledRow {...props}>{children}</StyledRow>;

export { Row };
