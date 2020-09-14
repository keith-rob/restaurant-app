// example theme
import { funk } from "@theme-ui/presets";
export default {
  ...funk,
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  heading: {
    fontFamily: "heading",
    color: "muted",
    fontSize: "72px",
  },
  styles: {
    ...funk.styles,
  },
};
