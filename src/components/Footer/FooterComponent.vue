<template>
  <v-footer color="white">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <span class="text-h3 mb-6"> Contact </span>
          <a
            href="https://wa.me/0639119996"
            target="_blank"
            class="contact-link"
            aria-label="Whatsapp"
          >
            <v-icon :icon="mdiWhatsapp" /> Stuur mij een bericht
          </a>
          <a
            href="tel:0639119996"
            class="contact-link"
            aria-label="Bellen"
          >
            <v-icon :icon="mdiPhone" /> 06-39119996
          </a>
          <a
            href="mailto:info@vonkprogramming.nl"
            class="contact-link"
            aria-label="Email"
          >
            <v-icon :icon="mdiEmail" /> info@VonkProgramming.nl
          </a>
          <a
            href="https://www.linkedin.com/in/lars-v-82455612a/"
            target="_blank"
            class="contact-link"
            aria-label="LinkedIn"
          >
            <v-icon :icon="mdiLinkedin" /> LinkedIn
          </a>
          <a
            href="https://github.com/thebetar"
            target="_blank"
            class="contact-link"
            aria-label="Github"
          >
            <v-icon :icon="mdiGithub" /> Github
          </a>
        </v-col>
        <v-col
          cols="12"
          offset-sm="6"
          sm="3"
          offset-md="6"
          md="3"
        >
          <span class="text-h3 mb-6"> Pagina's </span>
          <v-list role="list">
            <v-list-item
              class="title"
              to="/"
              role="listitem"
            >
              <v-icon class="mr-2">{{ mdiHome }}</v-icon> Home
            </v-list-item>
            <v-list-item
              class="title"
              to="/portfolio"
              role="listitem"
            >
              <v-icon class="mr-2">{{ mdiFolder }}</v-icon>
              Portfolio
            </v-list-item>
            <v-list-item
              class="title"
              to="/contact"
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

<style scoped>
a.contact-link {
  display: block;
  color: #333;
  text-decoration: none;
  margin: 0.8rem auto;
  transition: all 0.3s ease-in-out;
}

a.contact-link:hover,
a.contact-link:hover .v-icon {
  color: #f22 !important;
}
</style>
