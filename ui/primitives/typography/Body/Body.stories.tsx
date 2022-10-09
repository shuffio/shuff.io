import { Meta, Story } from "@storybook/react";
import styled, { CSSProperties } from "styled-components";
import { brand } from "@ui/tokens/colors";
import { rem } from "@ui/tokens/spacing";
import Body from "./Body";

const paragraphText = (
  <>
    <strong>Shuffleboard</strong>, more precisely{" "}
    <strong>deck shuffleboard</strong>, and also known as{" "}
    <strong>floor shuffleboard</strong>, is a game in which players use cues to
    push weighted discs, sending them gliding down a narrow court, with the
    purpose of having them come to rest within a marked scoring area. As a more
    generic term, it refers to the family of shuffleboard-variant games as a
    whole.
  </>
);

const Container = styled.div<{
  backgroundColor?: CSSProperties["backgroundColor"];
  textColor?: CSSProperties["color"];
}>`
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  ${({ color }) => `color: ${color};`}
  padding: ${rem[16]};
`;

export default {
  title: "Primitives/Typography",
  component: Body,
  args: {
    children: (
      <>
        <Container backgroundColor={brand.light}>{paragraphText}</Container>
        <Container backgroundColor={brand.primary}>{paragraphText}</Container>
        <Container backgroundColor={brand.secondary}>{paragraphText}</Container>
        <Container backgroundColor={brand.tertiary} color="white">
          {paragraphText}
        </Container>
        <Container backgroundColor={brand.dark} color="white">
          {paragraphText}
        </Container>
      </>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: `640px` }}>
    <Body {...args}>{args.children}</Body>
  </div>
);
Default.storyName = "Body";
