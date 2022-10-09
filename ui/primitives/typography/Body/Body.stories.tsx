import { Meta, Story } from "@storybook/react";
import Body from "./Body";

export default {
  title: "primitives/Body",
  component: Body,
  parameters: { layout: "fullscreen" },
  args: {
    children: "Body woo",
  },
} as Meta;

export const Default: Story = (args) => <Body {...args}>{args.children}</Body>;
