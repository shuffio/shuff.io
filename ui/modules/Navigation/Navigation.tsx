import styled from "styled-components";
import { brand } from "@ui/tokens/colors";
import { navigation } from "@ui/tokens/spacing";

const Navigation: React.FC = () => (
  <header>
    <Nav>Navigation</Nav>
  </header>
);

export default Navigation;

const Nav = styled.nav`
  background-color: ${brand.primary};
  padding-inline: ${navigation.small.x};
  padding-block: ${navigation.small.y};
`;
