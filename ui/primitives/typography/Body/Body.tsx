import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { families } from "@ui/tokens/fonts";

export type Props = {
  children: ReactNode | string;
  fontSize?: CSSProperties["fontSize"];
  fontFamily?: CSSProperties["fontFamily"];
};

const Body: React.FC<Props> = ({
  children,
  fontSize = `16px`,
  fontFamily = families.sans,
}) => (
  <StyledBody fontSize={fontSize} fontFamily={fontFamily}>
    {children}
  </StyledBody>
);

export default Body;

type StyleProps = Omit<Props, "children">;

const StyledBody = styled.p<StyleProps>`
  ${({ fontSize }) => `font-size: ${fontSize}`};
  ${({ fontFamily }) => `font-family: ${fontFamily}`};
  line-height: 1.4;

  strong,
  b {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }
`;
