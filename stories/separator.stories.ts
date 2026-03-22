import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Separator",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <div max-w>
      <h4>Section One</h4>
      <p>Content above the separator.</p>
      <hr />
      <h4>Section Two</h4>
      <p>Content below the separator.</p>
    </div>
  `,
};
