import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Select",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div stack="xs" max-w="xs">
      <label for="fruit">Fruit</label>
      <select id="fruit">
        <option value="" disabled selected>Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => `
    <select disabled>
      <option>Disabled</option>
    </select>
  `,
};
