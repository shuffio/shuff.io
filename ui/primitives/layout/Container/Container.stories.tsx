import { Meta, Story } from "@storybook/react";
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
  },
} as Meta;

export const Default: Story = (args) => <Container {...args} />;
Default.storyName = "Container";
