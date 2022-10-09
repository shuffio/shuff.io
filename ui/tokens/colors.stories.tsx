import { Meta, Story } from "@storybook/react";
import { brand } from "./colors";
import { layout } from "./shadows";
import { rem } from "./spacing";
import styled, { CSSProperties } from "styled-components";

export default {
  title: "tokens/colors",
  parameters: { layout: "fullscreen" },
} as Meta;

const ColorGrid = () => (
  <Grid>
    {Object.entries(brand).map((color, i) => (
      <Color key={i} backgroundColor={color[1]}>
        <span>{color[0]}</span>
      </Color>
    ))}
  </Grid>
);

export const Brand: Story = () => <ColorGrid />;

const Grid = styled.div`
  display: flex;
  height: 100vh;

  & > * {
    flex: 1;
  }
`;

const Color = styled.div<{ backgroundColor: CSSProperties["backgroundColor"] }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
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
