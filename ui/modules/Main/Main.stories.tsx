import { Meta, Story } from "@storybook/react";
import Main from "./Main";

export default {
  title: "Modules/Main",
  component: Main,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Main />;
