import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Checkbox",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div row>
      <input type="checkbox" id="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>
  `,
};

export const Checked: Story = {
  render: () => `
    <div row>
      <input type="checkbox" id="checked" checked />
      <label for="checked">Checked</label>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => `
    <div row>
      <input type="checkbox" id="disabled" disabled />
      <label for="disabled">Disabled</label>
    </div>
  `,
};
