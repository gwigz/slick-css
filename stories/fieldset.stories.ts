import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Fieldset",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <fieldset max-w>
      <legend>Personal Information</legend>
      <div stack>
        <div stack="xs">
          <label for="fname">First Name</label>
          <input type="text" id="fname" placeholder="John" />
        </div>
        <div stack="xs">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Doe" />
        </div>
      </div>
    </fieldset>
  `,
};

export const RadioGroup: Story = {
  render: () => `
    <fieldset max-w>
      <legend>Preferred Contact Method</legend>
      <div stack>
        <div row>
          <input type="radio" name="contact" id="contact-email" value="email" checked />
          <label for="contact-email">Email</label>
        </div>
        <div row>
          <input type="radio" name="contact" id="contact-phone" value="phone" />
          <label for="contact-phone">Phone</label>
        </div>
        <div row>
          <input type="radio" name="contact" id="contact-mail" value="mail" />
          <label for="contact-mail">Mail</label>
        </div>
      </div>
    </fieldset>
  `,
};
