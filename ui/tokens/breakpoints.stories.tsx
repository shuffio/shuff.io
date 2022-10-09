import { Meta, Story } from "@storybook/react";
import { brand } from "./colors";
import { layout } from "./shadows";
import { rem } from "./spacing";
import { breakpoints, WidthType } from "./breakpoints";
import styled, { CSSProperties } from "styled-components";

const colorsArray = Object.values(brand);

export default {
  title: "tokens",
  parameters: { layout: "fullscreen" },
} as Meta;

const BreakpointBar = () => (
  <Container>
    {Object.entries(breakpoints).map((breakpoint, i) => (
      <Bar key={i} barWidth={breakpoint[1]} backgroundColor={colorsArray[i]}>
        <span>
          {breakpoint[0]}:&nbsp;{breakpoint[1]}
        </span>
      </Bar>
    ))}
  </Container>
);

export const Breakpoints: Story = () => <BreakpointBar />;

const Container = styled.div`
  width: 100%;
  background-color: ${brand.light};
  margin-inline: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Bar = styled.div<{
  barWidth: WidthType;
  backgroundColor: CSSProperties["backgroundColor"];
}>`
  flex: 1;
  width: ${({ barWidth }) => barWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};
  max-width: 100%;
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${layout.close};

  & > span {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    font-size: 12px;
    box-shadow: ${layout.close};
    padding: ${rem[8]};
    margin: ${rem[16]};
  }
`;
