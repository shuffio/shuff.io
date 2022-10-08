import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Modules/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
} as Meta;

export const Default: Story = () => <Footer />;
