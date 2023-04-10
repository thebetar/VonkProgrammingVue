<template>
  <div>
    <v-row class="vonk-programming-background">
      <v-container>
        <v-row
          class="home-component-welcome-container align-content-center"
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
                    />
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
        class="home-component-header-container"
      >
        <div class="home-component-header">
          <h2 class="text-h3">
            Hoe ga ik te werk?
          </h2>
          <p class="text-body-1 mt-4">
            Welkom bij VonkProgramming, uw partner voor maatwerk software en web
            applicaties. Ik ontwerp en bouw oplossingen die naadloos aansluiten
            op uw bedrijfsdoelen en processen. Mijn oplossingen zijn schaalbaar
            en toekomstbestendig. Neem contact met mij op om te zien hoe ik u
            kunnen helpen uw digitale ambities te realiseren.
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
    <v-row class="home-component-wave-row">
      <wavey-divider-bottom />
    </v-row>
    <idea-row />
    <v-row class="home-component-wave-row">
      <wavey-divider-top />
    </v-row>
    <misc-row />
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
      mdiPhone
    };
  }
};
</script>

<style lang="scss" scoped>
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.home-component {
  &-header {
    position: absolute;
    
    top: -140px !important;
    padding: 32px 80px;
    background-color: #fff;
    
    @media only screen and (width <= 600px) {
      left: 0;
      padding: 32px 20px;
    }

    &-container {
      position: relative;
      height: 140px;

      @media only screen and (width <= 600px) {
        height: 220px;
      }
    }
  }

  &-welcome-container {
    min-height: 90vh;

    @media only screen and (width <= 600px) {
      min-height: 100vh;
    }
  }

  &-wave-row {
    position: relative;
    width: 100vw;
    height: calc(100vw / 3.5);
    margin: 0;

    @media only screen and (width <= 600px) {
      display: none;
    }
  }
}
</style>
