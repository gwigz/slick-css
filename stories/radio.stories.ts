import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Radio",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <fieldset plain stack>
      <div row>
        <input type="radio" name="plan" id="free" value="free" checked />
        <label for="free">Free</label>
      </div>
      <div row>
        <input type="radio" name="plan" id="pro" value="pro" />
        <label for="pro">Pro</label>
      </div>
      <div row>
        <input type="radio" name="plan" id="enterprise" value="enterprise" />
        <label for="enterprise">Enterprise</label>
      </div>
    </fieldset>
  `,
};
