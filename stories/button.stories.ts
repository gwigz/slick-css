import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Button",
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => "<button>Primary</button>",
};

export const Secondary: Story = {
  render: () => "<button secondary>Secondary</button>",
};

export const Destructive: Story = {
  render: () => "<button destructive>Delete</button>",
};

export const Outline: Story = {
  render: () => "<button outline>Outline</button>",
};

export const Ghost: Story = {
  render: () => "<button ghost>Ghost</button>",
};

export const Link: Story = {
  render: () => "<button link>Link Button</button>",
};

export const Disabled: Story = {
  render: () => "<button disabled>Disabled</button>",
};

export const AllVariants: Story = {
  render: () => `
    <div row>
      <button>Primary</button>
      <button secondary>Secondary</button>
      <button destructive>Destructive</button>
      <button outline>Outline</button>
      <button ghost>Ghost</button>
      <button link>Link</button>
      <button disabled>Disabled</button>
    </div>
  `,
};
