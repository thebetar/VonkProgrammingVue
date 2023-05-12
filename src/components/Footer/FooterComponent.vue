<template>
  <v-footer color="white">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          sm="4"
          md="4"
        >
          <span class="text-h3 mb-6"> Contact </span>
          <v-list role="list">
            <v-list-item
              href="https://wa.me/0639119996"
              target="_blank"
              aria-label="Whatsapp"
              density="compact"
              role="listitem"
              :prepend-icon="mdiWhatsapp"
            >
              Stuur mij een bericht
            </v-list-item>
            <v-list-item
              href="tel:0639119996"
              aria-label="Bellen"
              density="compact"
              role="listitem"
              :prepend-icon="mdiPhone"
            >
              (+31) 06-39119996
            </v-list-item>
            <v-list-item
              href="mailto:info@vonkprogramming.nl"
              aria-label="Email"
              density="compact"
              role="listitem"
              :prepend-icon="mdiEmail"
            >
              info@Vonkprogramming.nl
            </v-list-item>
            <v-list-item
              href="https://www.linkedin.com/in/lars-v-82455612a/"
              target="_blank"
              aria-label="LinkedIn"
              density="compact"
              role="listitem"
              :prepend-icon="mdiLinkedin"
            >
              LinkedIn
            </v-list-item>
            <v-list-item
              href="https://github.com/thebetar"
              target="_blank"
              aria-label="Github"
              density="compact"
              role="listitem"
              :prepend-icon="mdiGithub"
            >
              Github
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <span class="text-h3 mb-6"> Pagina's </span>
          <v-list role="list">
            <v-list-item
              href="/"
              role="listitem"
              :prepend-icon="mdiHome"
              density="compact"
            >
              Home
            </v-list-item>
            <v-list-item
              href="/portfolio"
              role="listitem"
              :prepend-icon="mdiFolder"
              density="compact"
            >
              Portfolio
            </v-list-item>
            <v-list-item
              href="/contact"
              role="listitem"
              :prepend-icon="mdiPhone"
              density="compact"
            >
              Contact
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { defineComponent } from 'vue';

import {
  mdiWhatsapp,
  mdiPhone,
  mdiEmail,
  mdiLinkedin,
  mdiGithub,
  mdiHome,
  mdiFolder
} from '@mdi/js';

export default defineComponent({
  data() {
    return {
      show: true,
      name: '',
      email: '',
      description: '',
      mdiWhatsapp,
      mdiPhone,
      mdiEmail,
      mdiLinkedin,
      mdiGithub,
      mdiHome,
      mdiFolder
    };
  }
});
</script>
