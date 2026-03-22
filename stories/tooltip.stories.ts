import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Tooltip",
};

export default meta;
type Story = StoryObj;

export const Top: Story = {
  render: () => `
    <div style="padding: 3rem; display: flex; justify-content: center;">
      <button tooltip-top="This is a tooltip">Hover me (top)</button>
    </div>
  `,
};

export const Bottom: Story = {
  render: () => `
    <div style="padding: 3rem; display: flex; justify-content: center;">
      <button tooltip-bottom="Tooltip below">Hover me (bottom)</button>
    </div>
  `,
};
