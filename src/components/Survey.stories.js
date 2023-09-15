import Survey from "./Survey.svelte";
import { LONELINESS_SCALE } from "../scales.ts";

export default {
  component: Survey,
};

export const Primary = {
  render: () => ({
    Component: Survey,
    props: {
      primary: true,
      label: "Survey",
      scale: LONELINESS_SCALE,
    },
  }),
};
