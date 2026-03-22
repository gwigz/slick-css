import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Alert",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <aside max-w>
      <strong>Heads up!</strong>
      <p>Changes you make here will be applied to all selected items.</p>
    </aside>
  `,
};

export const WithIcon: Story = {
  render: () => `
    <aside max-w>
      <i data-lucide="info"></i>
      <strong>Heads up!</strong>
      <p>Changes you make here will be applied to all selected items.</p>
    </aside>
  `,
};

export const Destructive: Story = {
  render: () => `
    <aside destructive max-w>
      <i data-lucide="circle-alert"></i>
      <strong>Error</strong>
      <p>Your session has expired. Please log in again.</p>
    </aside>
  `,
};

export const DestructiveNoIcon: Story = {
  render: () => `
    <aside destructive max-w>
      <strong>Error</strong>
      <p>Something went wrong. Please try again.</p>
    </aside>
  `,
};

export const Info: Story = {
  render: () => `
    <aside max-w>
      <p>This is an informational message with no title.</p>
    </aside>
  `,
};
