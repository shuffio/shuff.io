import styled from "styled-components";
import { brand } from "@ui/tokens/colors";
import { layout } from "@ui/tokens/spacing";

const Main: React.FC = () => <StyledMain>Main</StyledMain>;

export default Main;

const StyledMain = styled.main`
  background-color: ${brand.light};
  padding-inline: ${layout.small.x};
  padding-block: ${layout.small.y};
`;
