import { Meta, Story } from "@storybook/react";
import { Container } from "@ui/primitives";
import { brand } from "@ui/tokens/colors";
import Layout from "./Layout";

export default {
  title: "Primitives/Layout",
  component: Layout,
  parameters: { layout: "fullscreen" },
  args: {
    height: "100vh",
    backgroundColor: brand.light,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      table: { category: "Design" },
    },
    height: {
      control: { type: "text" },
      table: { category: "Design" },
    },
    horizontalPosition: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      table: { category: "Positioning" },
    },
    verticalPosition: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      table: { category: "Positioning" },
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Layout {...args}>
    <Container
      padding="100px"
      backgroundColor={brand.tertiary}
      maxWidth="100px"
    />
  </Layout>
);
Default.storyName = "Layout";
