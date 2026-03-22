import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Progress",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => '<progress value="60" max="100"></progress>',
};

export const Half: Story = {
  render: () => '<progress value="50" max="100"></progress>',
};

export const Complete: Story = {
  render: () => '<progress value="100" max="100"></progress>',
};

export const Indeterminate: Story = {
  render: () => "<progress></progress>",
};
