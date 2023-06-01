<template>
  <div class="misc-row-container">
    <div class="misc-row-card-row">
      <div class="misc-row-card">
        <div>
          <v-img
            src="/assets/svg/portfolio.svg"
            width="80"
            height="80"
            class="mx-auto"
          />
        </div>
        <div>
          <h6 class="text-h4">
            Portfolio
          </h6>
          <p class="text-body-2">
            Naast een mooi verhaal over hoe alles te werk gaat heb ik ondertussen
            ook al een portfolio opgebouwd met een aantal bekenden en wat minder
            bekende bedrijven.
          </p>
          <div class="misc-row-card-actions">
            <v-btn
              href="/portfolio"
              color="secondary"
              arial-label="Portfolio"
              variant="outlined"
              :prepend-icon="mdiFolder"
            >
              Portfolio
            </v-btn>
            <v-btn
              href="https://github.com/thebetar"
              target="_blank"
              color="primary"
              aria-label="Github"
              variant="outlined"
              :prepend-icon="mdiGithub"
            >
              Github
            </v-btn>
          </div>
        </div>
      </div>
      <div class="misc-row-card">
        <div>
          <v-img
            src="/assets/svg/network.svg"
            width="80"
            height="80"
            class="mx-auto"
          />
        </div>
        <h6 class="text-h4">
          Netwerk
        </h6>
        <p class="text-body-2">
          Binnen mijn netwerk heb ik meerdere connecties met mensen binnen
          design, marketing en development. Hierdoor kan ik een compleet pakket
          aanbieden voor een bedrijf. De huidige vaste partner waarmee ik
          samenwerk is:
        </p>
        <v-img
          src="/assets/partners/lightspeed-it-min.webp"
          width="240"
          class="mx-auto mt-2 rounded-lg"
          :style="{
            cursor: 'pointer'
          }"
          @click="goTo('https://lightspeed-it.nl/')"
        />
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
.misc-row {
  &-container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 120px;
  }

  &-card {
    display: flex;
    flex-direction: column;
    text-align: center;

    max-width: 400px;

    &-row {
      width: 100%;
      max-width: 1000px;

      display: flex;
      justify-content: space-between;

      gap: 40px;
    }

  &-actions {
    margin-top: 10px;

    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
}
</style>