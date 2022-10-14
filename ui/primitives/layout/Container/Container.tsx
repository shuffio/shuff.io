import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { WithBreakpoints, toBreakpointStyles } from "@ui/tokens/breakpoints";
import { layout } from "@ui/tokens/spacing";

type ContainerProps = {
  children: ReactNode;
  backgroundColor?: WithBreakpoints<CSSProperties["backgroundColor"]>;
  maxWidth?: WithBreakpoints<CSSProperties["maxWidth"]>;
  padding?: WithBreakpoints<CSSProperties["padding"]>;
};

const defaults: Omit<ContainerProps, "children"> = {
  maxWidth: layout.maxWidth,
  padding: `${layout.padding.x} ${layout.padding.y}`,
};

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = defaults.maxWidth,
  padding = defaults.padding,
  ...props
}) => (
  <StyledContainer maxWidth={maxWidth} padding={padding} {...props}>
    {children}
  </StyledContainer>
);

export default Container;

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin-inline: auto;
  ${({ backgroundColor }) =>
    backgroundColor && toBreakpointStyles(backgroundColor, "background-color")};
  ${({ maxWidth }) => maxWidth && toBreakpointStyles(maxWidth, "max-width")};
  ${({ padding }) => padding && toBreakpointStyles(padding, "padding")};
`;
