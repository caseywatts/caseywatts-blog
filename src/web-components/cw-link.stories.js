import { html } from "lit";

export default {
  title: "CW Link",
  component: "cw-link",
  render: ({ href, label }) => html`<cw-link href="${href}">${label}</usa-link>`,
};

export const Default = {
  args: {
    label: "Casey Watts' Website",
    href: "https://www.caseywatts.com/",
  },
};
