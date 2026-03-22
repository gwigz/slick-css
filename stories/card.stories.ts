import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Card",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <article max-w>
      <header>
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
      </header>
      <section>
        <p>Card content with some text to demonstrate the layout.</p>
      </section>
      <footer>
        <button>Action</button>
      </footer>
    </article>
  `,
};

export const Simple: Story = {
  render: () => `
    <article max-w>
      <header>
        <h3>Notifications</h3>
        <p>You have 3 unread messages.</p>
      </header>
      <section>
        <p>Check your inbox for the latest updates.</p>
      </section>
    </article>
  `,
};

export const EmptyDisconnected: Story = {
  render: () => `
    <article empty max-w>
      <i data-lucide="wifi-off" style="color: var(--destructive);"></i>
      <h2>Disconnected</h2>
      <b>The connection has been lost, you can close this page</b>
    </article>
  `,
};

export const EmptySuccess: Story = {
  render: () => `
    <article empty max-w>
      <i data-lucide="circle-check" style="color: #22c55e;"></i>
      <h2>All done!</h2>
      <b>Your changes have been applied successfully</b>
    </article>
  `,
};

export const EmptyNoItems: Story = {
  render: () => `
    <article empty max-w>
      <i data-lucide="inbox"></i>
      <h2>No items found</h2>
      <p>There are no patchable objects in the inventory</p>
    </article>
  `,
};
