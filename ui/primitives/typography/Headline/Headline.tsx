import styled from "styled-components";
import { families } from "@ui/tokens/fonts";
import { CommonProps, commonStyles } from "../commonProperties";

export type Props = CommonProps;

const defaults = {
  fontSize: { xs: `32px`, md: `48px`, lg: `64px` },
  fontFamily: families.serif,
};

const Headline: React.FC<Props> = ({
  children,
  fontSize = defaults.fontSize,
  fontFamily = defaults.fontFamily,
  ...props
}) => (
  <StyledHeadline fontSize={fontSize} fontFamily={fontFamily} {...props}>
    {children}
  </StyledHeadline>
);

export default Headline;

type StyleProps = Omit<Props, "children">;

const StyledHeadline = styled.h1<StyleProps>`
  ${commonStyles};
  line-height: 1.1;
`;
