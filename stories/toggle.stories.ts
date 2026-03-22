import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Toggle",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div row>
      <input type="checkbox" role="switch" id="airplane" />
      <label for="airplane">Airplane Mode</label>
    </div>
  `,
};

export const Checked: Story = {
  render: () => `
    <div row>
      <input type="checkbox" role="switch" id="dark" checked />
      <label for="dark">Dark Mode</label>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => `
    <div row>
      <input type="checkbox" role="switch" id="disabled" disabled />
      <label for="disabled">Disabled</label>
    </div>
  `,
};
