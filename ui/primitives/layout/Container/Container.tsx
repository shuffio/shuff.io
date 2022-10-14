import styled, { CSSProperties } from "styled-components";
import { WithBreakpoints, toBreakpointStyles } from "@ui/tokens/breakpoints";

type ContainerProps = {
  backgroundColor?: WithBreakpoints<CSSProperties["backgroundColor"]>;
  maxWidth?: WithBreakpoints<CSSProperties["maxWidth"]>;
};

const Container: React.FC<ContainerProps> = ({ ...props }) => (
  <StyledContainer {...props}>Container</StyledContainer>
);

export default Container;

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 50px;
  background-color: gold;
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ backgroundColor }) =>
    backgroundColor && toBreakpointStyles(backgroundColor, "background-color")};
  ${({ maxWidth }) => maxWidth && toBreakpointStyles(maxWidth, "max-width")};
`;
