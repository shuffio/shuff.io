import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Modules",
  component: Footer,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Footer />;
Default.storyName = "Footer";
