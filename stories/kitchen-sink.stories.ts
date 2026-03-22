import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Kitchen Sink",
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => {
    const container = document.createElement("div");
    container.setAttribute("stack", "2xl");
    container.setAttribute("max-w", "xl");
    container.style.width = "100%";

    container.innerHTML = `
      <!-- Buttons -->
      <section stack>
        <h2>Buttons</h2>
        <div row>
          <button>Primary</button>
          <button secondary>Secondary</button>
          <button destructive>Destructive</button>
          <button outline>Outline</button>
          <button ghost>Ghost</button>
          <button link>Link</button>
          <button disabled>Disabled</button>
        </div>
        <div row>
          <button aria-busy="true">Loading</button>
          <button secondary aria-busy="true">Loading</button>
          <button destructive aria-busy="true">Loading</button>
          <button outline aria-busy="true">Loading</button>
        </div>
      </section>

      <hr />

      <!-- Badges -->
      <section stack>
        <h2>Badges</h2>
        <div row>
          <kbd>Default</kbd>
          <kbd secondary>Secondary</kbd>
          <kbd destructive>Error</kbd>
          <kbd outline>Outline</kbd>
        </div>
      </section>

      <hr />

      <!-- Tooltips -->
      <section stack>
        <h2>Tooltips</h2>
        <div row="md" style="padding: 2rem 0;">
          <button outline tooltip-top="Tooltip on top">Hover (top)</button>
          <button outline tooltip-bottom="Tooltip on bottom">Hover (bottom)</button>
        </div>
      </section>

      <hr />

      <!-- Alerts -->
      <section stack>
        <h2>Alerts</h2>
        <aside>
          <i data-lucide="info"></i>
          <strong>Heads up!</strong>
          <p>Changes you make here will be applied to all selected items.</p>
        </aside>
        <aside destructive>
          <i data-lucide="circle-alert"></i>
          <strong>Error</strong>
          <p>Your session has expired. Please log in again.</p>
        </aside>
      </section>

      <hr />

      <!-- Cards -->
      <section stack>
        <h2>Cards</h2>
        <div grid>
          <article>
            <header>
              <h3>Notifications</h3>
              <p>You have 3 unread messages.</p>
            </header>
            <section>
              <p>Check your inbox for the latest updates from your team.</p>
            </section>
            <footer>
              <button outline>Dismiss</button>
              <button>View All</button>
            </footer>
          </article>
          <article>
            <header>
              <h3>Team Members</h3>
              <p>Manage your team and permissions.</p>
            </header>
            <section>
              <div stack="xs">
                <div row>
                  <input type="checkbox" id="ks-alice" checked />
                  <label for="ks-alice">Alice (Admin)</label>
                </div>
                <div row>
                  <input type="checkbox" id="ks-bob" checked />
                  <label for="ks-bob">Bob (Editor)</label>
                </div>
                <div row>
                  <input type="checkbox" id="ks-carol" />
                  <label for="ks-carol">Carol (Viewer)</label>
                </div>
              </div>
            </section>
          </article>
          <article empty>
            <i data-lucide="inbox"></i>
            <h2>No items found</h2>
            <b>There are no patchable objects in the inventory</b>
          </article>
        </div>
      </section>

      <hr />

      <!-- Tabs -->
      <section stack>
        <h2>Tabs</h2>
        <div>
          <div role="tablist" aria-label="Account settings">
            <button role="tab" aria-selected="true" aria-controls="ks-panel-account" id="ks-tab-account">Account</button>
            <button role="tab" aria-selected="false" aria-controls="ks-panel-password" id="ks-tab-password">Password</button>
            <button role="tab" aria-selected="false" aria-controls="ks-panel-billing" id="ks-tab-billing">Billing</button>
          </div>
          <div role="tabpanel" id="ks-panel-account" aria-labelledby="ks-tab-account">
            <div stack style="padding-top: 0.25rem;">
              <div stack="xs">
                <label for="ks-display-name">Display Name</label>
                <input type="text" id="ks-display-name" placeholder="Your display name" value="Jane Doe" />
              </div>
              <div stack="xs">
                <label for="ks-email">Email</label>
                <input type="email" id="ks-email" placeholder="you@example.com" value="jane@example.com" />
              </div>
              <div><button>Save Changes</button></div>
            </div>
          </div>
          <div role="tabpanel" id="ks-panel-password" aria-labelledby="ks-tab-password" hidden>
            <div stack style="padding-top: 0.25rem;">
              <div stack="xs">
                <label for="ks-current-pw">Current Password</label>
                <input type="password" id="ks-current-pw" placeholder="Enter current password" />
              </div>
              <div stack="xs">
                <label for="ks-new-pw">New Password</label>
                <input type="password" id="ks-new-pw" placeholder="Enter new password" />
              </div>
              <div><button>Update Password</button></div>
            </div>
          </div>
          <div role="tabpanel" id="ks-panel-billing" aria-labelledby="ks-tab-billing" hidden>
            <div stack style="padding-top: 0.25rem;">
              <p>Your current plan: <kbd>Pro</kbd></p>
              <progress value="75" max="100"></progress>
              <p style="font-size: 0.875rem; color: var(--muted-foreground);">75% of storage used</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Table -->
      <section stack>
        <h2>Table</h2>
        <table>
          <caption>Recent invoices</caption>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Status</th>
              <th>Method</th>
              <th align="right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-001</td>
              <td><kbd>Paid</kbd></td>
              <td>Credit Card</td>
              <td align="right">$250.00</td>
            </tr>
            <tr>
              <td>INV-002</td>
              <td><kbd secondary>Pending</kbd></td>
              <td>PayPal</td>
              <td align="right">$150.00</td>
            </tr>
            <tr>
              <td>INV-003</td>
              <td><kbd destructive>Overdue</kbd></td>
              <td>Bank Transfer</td>
              <td align="right">$350.00</td>
            </tr>
            <tr>
              <td>INV-004</td>
              <td><kbd>Paid</kbd></td>
              <td>Credit Card</td>
              <td align="right">$450.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total</td>
              <td align="right">$1,200.00</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <hr />

      <!-- Form Elements -->
      <section stack>
        <h2>Form Elements</h2>
        <div grid style="gap: 1.5rem;">
          <fieldset>
            <legend>Contact Details</legend>
            <div stack>
              <div stack="xs">
                <label for="ks-fname">First Name</label>
                <input type="text" id="ks-fname" placeholder="John" />
              </div>
              <div stack="xs">
                <label for="ks-lname">Last Name</label>
                <input type="text" id="ks-lname" placeholder="Doe" />
              </div>
              <div stack="xs">
                <label for="ks-invalid">Invalid Field</label>
                <input type="text" id="ks-invalid" value="Bad input" aria-invalid="true" />
              </div>
              <div stack="xs">
                <label for="ks-disabled-input">Disabled</label>
                <input type="text" id="ks-disabled-input" placeholder="Disabled" disabled />
              </div>
            </div>
          </fieldset>

          <div stack="lg" style="align-content: start;">
            <div stack="xs">
              <label for="ks-select">Select</label>
              <select id="ks-select">
                <option value="" disabled selected>Choose a framework</option>
                <option value="next">Next.js</option>
                <option value="remix">Remix</option>
                <option value="astro">Astro</option>
              </select>
            </div>

            <div stack="xs">
              <label for="ks-message">Message</label>
              <textarea id="ks-message" placeholder="Write something..."></textarea>
            </div>
          </div>

          <div stack="lg" style="align-content: start;">
            <fieldset plain>
              <legend>Notification Preferences</legend>
              <div stack>
                <div row>
                  <input type="radio" name="ks-notify" id="ks-all" value="all" checked />
                  <label for="ks-all">All notifications</label>
                </div>
                <div row>
                  <input type="radio" name="ks-notify" id="ks-mentions" value="mentions" />
                  <label for="ks-mentions">Mentions only</label>
                </div>
                <div row>
                  <input type="radio" name="ks-notify" id="ks-none" value="none" />
                  <label for="ks-none">None</label>
                </div>
              </div>
            </fieldset>

            <hr />

            <div stack>
              <div row>
                <input type="checkbox" role="switch" id="ks-dark" checked />
                <label for="ks-dark">Dark Mode</label>
              </div>
              <div row>
                <input type="checkbox" role="switch" id="ks-airplane" />
                <label for="ks-airplane">Airplane Mode</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Details / Accordion -->
      <section stack>
        <h2>Accordion</h2>
        <div max-w="md">
          <details open>
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
      </section>

      <hr />

      <!-- Progress -->
      <section stack>
        <h2>Progress</h2>
        <div stack max-w>
          <progress value="25" max="100"></progress>
          <progress value="60" max="100"></progress>
          <progress value="100" max="100"></progress>
          <progress></progress>
        </div>
      </section>

      <hr />

      <!-- Dialog -->
      <section stack>
        <h2>Dialog</h2>
        <div>
          <button id="ks-open-dialog" outline>Open Dialog</button>
          <dialog id="ks-dialog">
            <header>
              <h3>Are you sure?</h3>
              <p>This action cannot be undone.</p>
            </header>
            <section>
              <p>This will permanently delete the selected items and remove all associated data.</p>
            </section>
            <footer>
              <button outline id="ks-cancel-dialog">Cancel</button>
              <button destructive id="ks-confirm-dialog">Delete</button>
            </footer>
          </dialog>
        </div>
      </section>

      <hr />

      <!-- Skeleton / Loading -->
      <section stack>
        <h2>Loading Skeleton</h2>
        <article aria-busy="true" max-w style="min-height: 8rem;">
          <header><h3>Loading...</h3></header>
        </article>
      </section>
    `;

    // Wire up tabs
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

      // Wire up dialog
      const dialog = container.querySelector<HTMLDialogElement>("#ks-dialog");
      container.querySelector("#ks-open-dialog")?.addEventListener("click", () => dialog?.showModal());
      container.querySelector("#ks-cancel-dialog")?.addEventListener("click", () => dialog?.close());
      container.querySelector("#ks-confirm-dialog")?.addEventListener("click", () => dialog?.close());
    });

    return container;
  },
};
