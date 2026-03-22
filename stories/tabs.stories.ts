import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Tabs",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");
    container.setAttribute("max-w", "");
    container.innerHTML = `
      <div role="tablist" aria-label="Account settings">
        <button role="tab" aria-selected="true" aria-controls="panel-account" id="tab-account">Account</button>
        <button role="tab" aria-selected="false" aria-controls="panel-password" id="tab-password">Password</button>
      </div>
      <div role="tabpanel" id="panel-account" aria-labelledby="tab-account">
        <p>Manage your account settings and preferences.</p>
      </div>
      <div role="tabpanel" id="panel-password" aria-labelledby="tab-password" hidden>
        <p>Change your password here.</p>
      </div>
    `;

    setTimeout(() => {
      const tabs = container.querySelectorAll('[role="tab"]');
      const panels = container.querySelectorAll('[role="tabpanel"]');

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
          panels.forEach((p) => p.setAttribute("hidden", ""));
          tab.setAttribute("aria-selected", "true");
          const panelId = tab.getAttribute("aria-controls");
          if (panelId) {
            container.querySelector("#" + panelId)?.removeAttribute("hidden");
          }
        });
      });
    });

    return container;
  },
};
