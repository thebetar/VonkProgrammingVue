<template>
  <v-footer color="white">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <span class="text-h3 mb-6"> Contact </span>
          <p class="my-2">
            <a
              href="https://wa.me/0639119996"
              target="_blank"
              aria-label="Whatsapp"
            >
              <v-icon :icon="mdiWhatsapp" /> Stuur mij een bericht
            </a>
          </p>
          <p class="my-2">
            <a
              href="tel:0639119996"
              aria-label="Bellen"
            >
              <v-icon :icon="mdiPhone" /> 06-39119996
            </a>
          </p>
          <p class="my-2">
            <a
              href="mailto:info@vonkprogramming.nl"
              aria-label="Email"
            >
              <v-icon :icon="mdiEmail" /> info@VonkProgramming.nl
            </a>
          </p>
          <p class="my-2">
            <a
              href="https://www.linkedin.com/in/lars-v-82455612a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <v-icon :icon="mdiLinkedin" /> LinkedIn
            </a>
          </p>
          <p class="my-2">
            <a
              href="https://github.com/thebetar"
              target="_blank"
              aria-label="Github"
            >
              <v-icon :icon="mdiGithub" /> Github
            </a>
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <span class="text-h3 mb-6"> Pagina's </span>
          <v-list role="list">
            <v-list-item
              class="title"
              href="/"
              role="listitem"
            >
              <v-icon class="mr-2">{{ mdiHome }}</v-icon> Home
            </v-list-item>
            <v-list-item
              class="title"
              href="/portfolio"
              role="listitem"
            >
              <v-icon class="mr-2">{{ mdiFolder }}</v-icon>
              Portfolio
            </v-list-item>
            <v-list-item
              class="title"
              href="/contact"
              role="listitem"
            >
              <v-icon class="mr-2">{{ mdiPhone }}</v-icon> Contact
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import {
  mdiWhatsapp,
  mdiPhone,
  mdiEmail,
  mdiLinkedin,
  mdiGithub,
  mdiHome,
  mdiFolder
} from '@mdi/js';

export default {
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
};
</script>
