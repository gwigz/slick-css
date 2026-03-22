import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Table",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <table>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th align="right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INV-001</td>
          <td>Paid</td>
          <td align="right">$250.00</td>
        </tr>
        <tr>
          <td>INV-002</td>
          <td>Pending</td>
          <td align="right">$150.00</td>
        </tr>
        <tr>
          <td>INV-003</td>
          <td>Unpaid</td>
          <td align="right">$350.00</td>
        </tr>
        <tr>
          <td>INV-004</td>
          <td>Paid</td>
          <td align="right">$450.00</td>
        </tr>
        <tr>
          <td>INV-005</td>
          <td>Paid</td>
          <td align="right">$550.00</td>
        </tr>
      </tbody>
    </table>
  `,
};

export const WithFooter: Story = {
  render: () => `
    <table>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th align="right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INV-001</td>
          <td>Paid</td>
          <td align="right">$250.00</td>
        </tr>
        <tr>
          <td>INV-002</td>
          <td>Pending</td>
          <td align="right">$150.00</td>
        </tr>
        <tr>
          <td>INV-003</td>
          <td>Unpaid</td>
          <td align="right">$350.00</td>
        </tr>
        <tr>
          <td>INV-004</td>
          <td>Paid</td>
          <td align="right">$450.00</td>
        </tr>
        <tr>
          <td>INV-005</td>
          <td>Paid</td>
          <td align="right">$550.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td align="right">$1,750.00</td>
        </tr>
      </tfoot>
    </table>
  `,
};

export const WithCaption: Story = {
  render: () => `
    <table>
      <caption>A list of your recent invoices.</caption>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th align="right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INV-001</td>
          <td>Paid</td>
          <td align="right">$250.00</td>
        </tr>
        <tr>
          <td>INV-002</td>
          <td>Pending</td>
          <td align="right">$150.00</td>
        </tr>
        <tr>
          <td>INV-003</td>
          <td>Unpaid</td>
          <td align="right">$350.00</td>
        </tr>
        <tr>
          <td>INV-004</td>
          <td>Paid</td>
          <td align="right">$450.00</td>
        </tr>
        <tr>
          <td>INV-005</td>
          <td>Paid</td>
          <td align="right">$550.00</td>
        </tr>
      </tbody>
    </table>
  `,
};
