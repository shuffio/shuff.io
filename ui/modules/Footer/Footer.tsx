import styled from "styled-components";
import { brand } from "@ui/tokens/colors";
import { footer } from "@ui/tokens/spacing";

const Footer: React.FC = () => <StyledFooter>Footer</StyledFooter>;

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${brand.secondary};
  padding-inline: ${footer.small.x};
  padding-block: ${footer.small.y};
`;
