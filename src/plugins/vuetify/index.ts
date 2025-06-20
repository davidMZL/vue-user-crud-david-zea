import { createVuetify } from "vuetify"
import { es } from "vuetify/locale"
import "vuetify/styles"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default createVuetify({
  components,
  directives,
  locale: {
    locale: "es",
    fallback: "es",
    messages: { es },
  },
})
