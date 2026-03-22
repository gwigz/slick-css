import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Dialog",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button id="open-dialog">Open Dialog</button>
      <dialog id="demo-dialog">
        <header>
          <h3>Are you sure?</h3>
          <p>This action cannot be undone.</p>
        </header>
        <section>
          <p>This will permanently delete your account and all associated data.</p>
        </section>
        <footer>
          <button outline id="cancel-dialog">Cancel</button>
          <button destructive id="confirm-dialog">Delete</button>
        </footer>
      </dialog>
    `;

    setTimeout(() => {
      const dialog = container.querySelector<HTMLDialogElement>("#demo-dialog");
      container.querySelector("#open-dialog")?.addEventListener("click", () => {
        dialog?.showModal();
      });
      container.querySelector("#cancel-dialog")?.addEventListener("click", () => {
        dialog?.close();
      });
      container.querySelector("#confirm-dialog")?.addEventListener("click", () => {
        dialog?.close();
      });
    });

    return container;
  },
};

export const Open: Story = {
  render: () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <dialog id="open-demo" open>
        <header>
          <h3>Dialog Title</h3>
          <p>Dialog description goes here.</p>
        </header>
        <section>
          <p>Some content inside the dialog.</p>
        </section>
        <footer>
          <button outline>Cancel</button>
          <button>Confirm</button>
        </footer>
      </dialog>
    `;
    return container;
  },
};
