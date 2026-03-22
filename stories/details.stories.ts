import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Details",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div max-w>
      <details>
        <summary>Is it accessible?</summary>
        <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
      </details>
      <details>
        <summary>Is it styled?</summary>
        <p>Yes. It comes with default styles that match shadcn/ui aesthetics.</p>
      </details>
      <details>
        <summary>Is it animated?</summary>
        <p>The chevron rotates on open/close with a CSS transition.</p>
      </details>
    </div>
  `,
};

export const Open: Story = {
  render: () => `
    <details open max-w>
      <summary>Click to collapse</summary>
      <p>This accordion item starts in the open state.</p>
    </details>
  `,
};
