import { Meta, Story } from "@storybook/react";
import Headline from "./Headline";

export default {
  title: "Primitives/Typography/Headline",
  component: Headline,
  parameters: { layout: "fullscreen" },
} as Meta;

/** @todo: story stuff */
export const Default: Story = (args) => <Headline {...args}>Headline</Headline>;
Default.storyName = "Headline";
