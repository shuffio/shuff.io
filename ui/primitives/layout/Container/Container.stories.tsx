import { Meta, Story } from "@storybook/react";
import { rem } from "@ui/tokens/spacing";
import { brand } from "@ui/tokens/colors";
import { Layout } from "@ui/primitives/layout";
import Container from "./Container";

export default {
  title: "Primitives/Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  args: {
    backgroundColor: brand.secondary,
    padding: rem[48],
  },
} as Meta;

export const Default: Story = (args) => <Container {...args} />;
const WithLayoutTemplate: Story = (args) => (
  <Layout backgroundColor={brand.primary} padding={rem[48]}>
    <Container {...args} />
  </Layout>
);

export const Centered = Default.bind({});
Centered.args = { centered: true };

export const WithLayout = WithLayoutTemplate.bind({});
WithLayout.args = { centered: true };
