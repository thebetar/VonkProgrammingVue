// Styles
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
// import * as directives from 'vuetify/directives';
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default createVuetify({
  ssr: false,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#ff2d6a",
          secondary: "#183a7d",
        },
      },
    },
  },
  components,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  display: {
    mobileBreakpoint: 960,
  }
});
