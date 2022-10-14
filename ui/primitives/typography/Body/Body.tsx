import styled from "styled-components";
import { families } from "@ui/tokens/fonts";
import { CommonProps, commonStyles } from "../commonProperties";

export type Props = CommonProps;

const defaults = {
  fonSize: `16px`,
  fontFamily: families.sans,
};

const Body: React.FC<Props> = ({
  children,
  fontSize = `16px`,
  fontFamily = families.sans,
  ...props
}) => (
  <StyledBody fontSize={fontSize} fontFamily={fontFamily} {...props}>
    {children}
  </StyledBody>
);

export default Body;

type StyleProps = Omit<Props, "children">;

const StyledBody = styled.p<StyleProps>`
  ${commonStyles};
  line-height: 1.4;
`;
