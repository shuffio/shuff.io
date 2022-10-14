import { Meta, Story } from "@storybook/react";
import { rem } from "@ui/tokens/spacing";
import Container from "./Container";

export default {
  title: "Primitives/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  args: {
    backgroundColor: {
      xs: "tomato",
      md: "teal",
      lg: "beige",
    },
    padding: rem[16],
  },
} as Meta;

export const Default: Story = (args) => (
  <Container {...args}>{args.children}</Container>
);
Default.storyName = "Container";
