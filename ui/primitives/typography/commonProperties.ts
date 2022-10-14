import { ReactNode } from "react";
import { css, CSSProperties } from "styled-components";
import { WithBreakpoints, toBreakpointStyles } from "@ui/tokens/breakpoints";
import { neutrals } from "@ui/tokens/colors";

export type CommonProps = {
  children?: ReactNode;
  fontColor?: CSSProperties["color"];
  fontSize?: WithBreakpoints<CSSProperties["fontSize"]>;
  fontFamily?: CSSProperties["fontFamily"];
  maxWidth?: WithBreakpoints<CSSProperties["maxWidth"]>;
  margin?: WithBreakpoints<CSSProperties["margin"]>;
};

type CommonStyleProps = Omit<CommonProps, "children">;

export const commonStyles = css<CommonStyleProps>`
  color: ${({ fontColor }) => fontColor || neutrals.black};
  ${({ fontFamily }) => `font-family: ${fontFamily}`};
  ${({ fontSize }) => fontSize && toBreakpointStyles(fontSize, "font-size")};
  ${({ margin }) => margin && toBreakpointStyles(margin, "margin")};
  ${({ maxWidth }) => maxWidth && toBreakpointStyles(maxWidth, "max-width")};

  strong,
  b {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }
`;
