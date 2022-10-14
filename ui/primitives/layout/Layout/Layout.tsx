import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { WithBreakpoints, toBreakpointStyles } from "@ui/tokens/breakpoints";

type LayoutProps = {
  children: ReactNode;
  backgroundColor?: WithBreakpoints<CSSProperties["backgroundColor"]>;
  background?: WithBreakpoints<CSSProperties["background"]>;
  height?: WithBreakpoints<CSSProperties["height"]>;
  padding?: WithBreakpoints<CSSProperties["padding"]>;
  horizontalPosition?: "left" | "center" | "right";
  verticalPosition?: "top" | "center" | "bottom";
};

type PositionType =
  | LayoutProps["horizontalPosition"]
  | LayoutProps["verticalPosition"];

const convertPositionProp = (position: PositionType) => {
  if (position === "left" || position === "top") {
    return "flex-start";
  } else if (position === "right" || position === "bottom") {
    return "flex-end";
  } else {
    return "center";
  }
};

const Layout: React.FC<LayoutProps> = ({ children = "", ...props }) => (
  <StyledLayout {...props} styledHeight={props.height}>
    {children}
  </StyledLayout>
);

export default Layout;

type StyledLayoutProps = Omit<LayoutProps, "children" | "height"> & {
  styledHeight: LayoutProps["height"];
};

const StyledLayout = styled.section<StyledLayoutProps>`
  width: 100%;
  display: flex;
  margin-inline: auto;
  flex-direction: column;
  ${({ styledHeight }) =>
    styledHeight && toBreakpointStyles(styledHeight, "height")};
  ${({ padding }) => padding && toBreakpointStyles(padding, "padding")};
  ${({ backgroundColor }) =>
    backgroundColor && toBreakpointStyles(backgroundColor, "background-color")};
  ${({ background }) =>
    background && toBreakpointStyles(background, "background")};
  ${({ horizontalPosition }) =>
    horizontalPosition &&
    toBreakpointStyles(convertPositionProp(horizontalPosition), "align-items")};
  ${({ verticalPosition }) =>
    verticalPosition &&
    toBreakpointStyles(
      convertPositionProp(verticalPosition),
      "justify-content"
    )};
`;
