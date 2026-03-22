import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Input",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => '<input type="text" placeholder="Enter text..." />',
};

export const WithLabel: Story = {
  render: () => `
    <div stack="xs" max-w="xs">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="you@example.com" />
    </div>
  `,
};

export const Disabled: Story = {
  render: () => '<input type="text" placeholder="Disabled" disabled />',
};

export const Invalid: Story = {
  render: () => '<input type="text" value="Bad input" aria-invalid="true" />',
};

export const Textarea: Story = {
  render: () => '<textarea placeholder="Write something..."></textarea>',
};
