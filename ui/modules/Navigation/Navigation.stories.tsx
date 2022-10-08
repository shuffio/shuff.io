import { Meta, Story } from "@storybook/react";
import Navigation from "./Navigation";

export default {
  title: "Modules/Navigation",
  component: Navigation,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Navigation />;
