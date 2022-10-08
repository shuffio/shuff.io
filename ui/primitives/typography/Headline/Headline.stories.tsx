import { Meta, Story } from "@storybook/react";
import Headline from "./Headline";

export default {
  title: "primitives/Headline",
  component: Headline,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Headline />;
