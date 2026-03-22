import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Badge",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => "<kbd>Badge</kbd>",
};

export const Secondary: Story = {
  render: () => "<kbd secondary>Secondary</kbd>",
};

export const Destructive: Story = {
  render: () => "<kbd destructive>Error</kbd>",
};

export const Outline: Story = {
  render: () => "<kbd outline>Outline</kbd>",
};

export const AllVariants: Story = {
  render: () => `
    <div row>
      <kbd>Default</kbd>
      <kbd secondary>Secondary</kbd>
      <kbd destructive>Error</kbd>
      <kbd outline>Outline</kbd>
    </div>
  `,
};
