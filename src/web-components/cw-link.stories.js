import { html } from "lit";
import "./cw-link.ts";

export default {
  title: "CW Link",
  render: ({ href, label }) => html`<cw-link href="${href}">${label}</usa-link>`,
};

export const Default = {
  args: {
    label: "Casey Watts' Website",
    href: "https://www.caseywatts.com/",
  },
};
