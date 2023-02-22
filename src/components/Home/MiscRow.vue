<template>
  <v-container
    class="pb-16"
    :class="$vuetify.display.mobile ? 'pt-16' : 'mb-8'"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="d-none d-sm-block"
      >
        <v-img
          src="@/assets/svg/portfolio.svg"
          width="80"
          height="80"
          class="mx-auto"
        />
      </v-col>
      <v-col
        cols="0"
        sm="0"
        md="6"
        class="d-none d-sm-block"
      >
        <v-img
          src="@/assets/svg/network.svg"
          width="80"
          height="80"
          class="mx-auto"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        class="d-flex flex-column justify-center items-center text-center"
      >
        <v-img
          src="@/assets/svg/portfolio.svg"
          width="80"
          height="80"
          class="mx-auto mb-8 d-block d-sm-none"
        />
        <h6 class="text-h4">Portfolio</h6>
        <p class="text-body-2">
          Naast een mooi verhaal over hoe alles te werk gaat heb ik ondertussen
          ook al een portfolio opgebouwd met een aantal bekenden en wat minder
          bekende bedrijven.
        </p>
        <v-row>
          <v-col cols="6">
            <v-btn
              to="/portfolio"
              color="medium"
              class="my-2"
              arial-label="Portfolio"
              variant="outlined"
              :size="$vuetify.display.mobile ? 'default' : 'large'"
              block
              :prepend-icon="mdiFolder"
            >
              Portfolio
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              href="https://github.com/thebetar"
              target="_blank"
              color="primary"
              class="my-2"
              aria-label="Github"
              variant="outlined"
              :size="$vuetify.display.mobile ? 'default' : 'large'"
              block
              :prepend-icon="mdiGithub"
            >
              Github
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex flex-column justify-center items-center text-center">
        <v-img
          src="@/assets/svg/network.svg"
          width="80"
          height="80"
          class="mx-auto mb-8 d-block d-sm-none"
        />
        <h6 class="text-h4">Netwerk</h6>
        <p class="text-body-2">
          Binnen mijn netwerk heb ik meerdere connecties met mensen binnen
          design, marketing en development. Hierdoor kan ik een compleet pakket
          aanbieden voor een bedrijf. De huidige vaste partner waarmee ik
          samenwerk is:
        </p>
        <v-img
          src="@/assets/partners/lightspeed-it-min.webp"
          width="240"
          class="mx-auto mb-8 rounded-lg"
          :style="{
            cursor: 'pointer'
          }"
          @click="goTo('https://lightspeed-it.nl/')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import { mdiFolder, mdiGithub } from '@mdi/js';

export default defineComponent({
  data() {
    return {
      mdiGithub,
      mdiFolder
    };
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank');
    }
  }
});
</script>
