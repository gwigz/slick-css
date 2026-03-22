import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Spinner",
};

export default meta;
type Story = StoryObj;

export const ButtonLoading: Story = {
  render: () => '<button aria-busy="true">Loading...</button>',
};

export const AllVariants: Story = {
  render: () => `
    <div row>
      <button aria-busy="true">Primary</button>
      <button secondary aria-busy="true">Secondary</button>
      <button destructive aria-busy="true">Delete</button>
      <button outline aria-busy="true">Outline</button>
      <button ghost aria-busy="true">Ghost</button>
    </div>
  `,
};

export const Skeleton: Story = {
  render: () => `
    <article aria-busy="true" max-w style="min-height: 8rem;">
      <header><h3>Loading...</h3></header>
    </article>
  `,
};
