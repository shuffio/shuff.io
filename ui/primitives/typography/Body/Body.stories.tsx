import { Meta, Story } from "@storybook/react";
import Body from "./Body";

export default {
  title: "primitives/Body",
  component: Body,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Body />;
