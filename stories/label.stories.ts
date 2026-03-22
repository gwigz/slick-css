import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Label",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => "<label>Email Address</label>",
};

export const WithInput: Story = {
  render: () => `
    <div stack="xs" max-w="xs">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="John Doe" />
    </div>
  `,
};
