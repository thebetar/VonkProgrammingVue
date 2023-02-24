<template>
  <div>
    <v-row class="home-page-background">
      <v-container>
        <v-row
          class="custom-home-page-divider-90 align-content-center"
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            md="5"
            class="d-flex"
            :class="{
              'justify-center': $vuetify.display.mobile,
              'flex-auto': $vuetify.display.mobile,
              'pb-0': $vuetify.display.mobile
            }"
          >
            <v-img
              src="/assets/svg/programming.svg"
              :height="$vuetify.display.mobile ? 200 : 320"
              :width="$vuetify.display.mobile ? 200 : 320"
              aspect-ratio="1"
            >
              <template #placeholder>
                <v-sheet>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </v-sheet>
              </template>
            </v-img>
          </v-col>
          <v-col
            cols="12"
            md="7"
            class="d-flex flex-column"
            :class="{
              'pt-0': !$vuetify.display.mobile
            }"
            role="main"
          >
            <p
              class="text-h4 text-white"
              :class="{
                'text-center': $vuetify.display.mobile
              }"
            >
              Voor elk probleem een oplossing 💪
            </p>
            <div
              class="text-body-1 text-white"
              :class="{
                'text-center': $vuetify.display.mobile
              }"
            >
              <p>
                Heeft u een probleem waar
                <span class="font-weight-bold"> maatwerk software </span>
                voor nodig is of heeft u behoefte aan een gespecialiseerde
                <span class="font-weight-bold">web applicatie</span>?
              </p>
              <v-btn
                class="mt-4"
                variant="flat"
                size="large"
                color="primary"
                href="/contact"
                aria-label="Neem contact op"
                :prepend-icon="mdiPhone"
              >
                Neem contact op
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="pt-12"
    >
      <v-col
        cols="12"
        sm="12"
        md="6"
        align="center"
      >
        <div class="custom-home-page-header">
          <h2 class="text-h3">Hoe ga ik te werk?</h2>
          <p class="text-body-1 mt-4">
            VonkProgramming is een software ontwikkelings bedrijf dat zich
            bezighoudt met maatwerk software solutions. Voor iedere klant maken
            wij op maat gemaakte software of web applicaties, afgestemd op de
            specifieke wens van de klant. Wij hebben kennis in huis of in ons
            netwerk om voor elk probleem een oplossing te bieden.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-container
      class="pb-16"
      :class="{ 'pt-8': !$vuetify.display.mobile }"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          align="center"
        >
          <process-card />
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="d-flex justify-center"
        >
          <development-card />
        </v-col>
      </v-row>
    </v-container>
    <v-row
      v-if="rendered"
      class="custom-wave-div"
    >
      <wavey-divider-bottom />
    </v-row>
    <idea-row v-if="rendered" />
    <v-row
      v-if="rendered"
      class="custom-wave-div"
    >
      <wavey-divider-top />
    </v-row>
    <misc-row v-if="rendered" />
  </div>
</template>

<script>
import { mdiPhone } from '@mdi/js';

import WaveyDividerTop from '../shared/WaveyDividerTop.vue';
import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';
import ProcessCard from './ProcessCard.vue';
import DevelopmentCard from './DevelopmentCard.vue';
import IdeaRow from './IdeaRow.vue';
import MiscRow from './MiscRow.vue';

export default {
  components: {
    WaveyDividerTop,
    WaveyDividerBottom,
    ProcessCard,
    DevelopmentCard,
    IdeaRow,
    MiscRow
  },
  data() {
    return {
      rendered: false,
      mdiPhone
    };
  },
  mounted() {
    this.rendered = true;
  }
};
</script>

<style scoped>
.custom-home-page-header {
  margin-top: -140px !important;
  padding: 32px 80px;
  background-color: #fff;
}

.custom-home-page-divider-90 {
  height: 90vh;
}

.custom-wave-div {
  width: 100vw;
  height: calc(100vw / 3.5);
  margin: -0.2rem 0;
}

@media only screen and (max-width: 600px) {
  .custom-home-page-divider-90 {
    height: 100vh;
  }

  .custom-home-page-header {
    margin-top: 0px !important;
    padding: 32px 20px;
    background-color: #fff;
  }

  .custom-wave-div {
    display: none;
  }
}
</style>
