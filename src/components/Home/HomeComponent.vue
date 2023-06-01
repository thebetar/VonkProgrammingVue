<template>
  <div>
    <div class="home-component-start-container vonk-programming-background">
      <div>
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
      </div>
      <div class="home-component-start-text">
        <h1
          class="home-component-start-text-header"
        >
          Voor elk probleem een oplossing 💪
        </h1>
        <div
          class="home-component-start-text-content"
        >
          Heeft u een probleem waar
          <span class="font-weight-bold"> maatwerk software </span>
          voor nodig is of heeft u behoefte aan een gespecialiseerde
          <span class="font-weight-bold">web applicatie</span>?
        </div>
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
    </div>
    <div
      class="home-component-info-container vonk-programming-background"
    >
      <div class="home-component-info-card">
        <h2 class="text-h3">
          Wie ben ik?
        </h2>
        <p
          class="text-body-1 mt-4"
        >
          Gedreven Software Developer | Voorvechter van Kwaliteitsborging met Uitgebreide Ervaring in CI/CD en Testing

          Ben je op zoek naar een gedreven Software Developer met een sterke focus op kwaliteitsborging en CI/CD-praktijken? Zoek niet verder! Met vele jaren ervaring ben ik gepassioneerd over het leveren van hoogwaardige code en het implementeren van robuuste teststrategieën.
        </p>
      </div>
    </div>
    <div
      class="home-component-about-container"
    >
      <div class="home-component-about-text">
        <p>
          <b>Code kwaliteit</b><br>
          Ik heb uitgebreide ervaring met eslint voor codeconsistentie en naleving van coderingsstandaarden. Als het gaat om testen, ben ik bedreven in het gebruik van cypress en jest voor unit testing en end-to-end testing, waardoor betrouwbare en performante code wordt gegarandeerd.
        </p>
        <p>
          <b>Pipelines</b><br>
          Op het gebied van CI/CD heb ik gewerkt met Azure DevOps-pipelines, Jenkins en GitHub Actions om build-, test- en implementatieprocessen te automatiseren. Deze platforms maken naadloze integratie van testen, codeanalyse en implementatie mogelijk, wat resulteert in hoogwaardige software.
        </p>
        <p>
          <b>Conventional commits</b><br>
          Ik pleit voor conventionele commitberichten en maak gebruik van commitlint voor een duidelijke en gestandaardiseerde commitgeschiedenis. Bovendien maak ik gebruik van Sonar voor codeanalyse, waarbij codegeuren en kwetsbaarheden worden geïdentificeerd om de codekwaliteit en onderhoudbaarheid voortdurend te verbeteren.
        </p>
        <p>
          <b>Communicatie</b><br>
          Samenwerking en effectieve communicatie zijn essentieel in mijn werkstijl. Ik neem actief deel aan code reviews en gezamenlijke programmeersessies om de codekwaliteit en kennisdeling te waarborgen.
        </p>
        <p>
          <b>Contact</b><br>
          Als je op zoek bent naar een gedreven Software Developer met uitgebreide ervaring in kwaliteitsborging en CI/CD, laten we dan verbinden! <br>
          <a href="/contact">Klik hier</a> om naar de contact pagina te gaan.
        </p>
      </div>
      <div class="home-component-about-image">
        <v-img
          src="/assets/home/me.jpg"
          width="260"
          class="rounded-xl"
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
      </div>
    </div>
    <div class="home-component-connect-container">
      <div class="home-component-connect-text">
        <v-img
          src="/assets/svg/connection.svg"
          :height="100"
        />
        <h3 class="home-component-connect-header">
          Verbinden
        </h3>
        <div class="home-component-connect-text">
          Ben je op zoek naar een betrouwbare netwerkverbinder die je toegang kan geven tot hoogwaardige ontwerpers, SEO-specialisten en marketingexperts? Zoek niet verder! Met mijn uitgebreide netwerk kan ik je helpen bij het vinden van de juiste professionals om jouw projecten naar een hoger niveau te tillen.
        </div>
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
    </div>
    <div
      class="home-component-wave-row"
      style="margin-bottom: -2px"
    >
      <wavey-divider-bottom />
    </div>
    <tech-row />
    <div
      class="home-component-wave-row"
      style="margin-top: -2px"
    >
      <wavey-divider-top />
    </div>
    <misc-row />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { mdiPhone } from '@mdi/js';

import WaveyDividerTop from '../shared/WaveyDividerTop.vue';
import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';
import TechRow from './TechRow.vue';
import MiscRow from './MiscRow.vue';

export default defineComponent({
  components: {
    WaveyDividerTop,
    WaveyDividerBottom,
    TechRow,
    MiscRow
  },
  data() {
    return {
      mdiPhone
    };
  }
});
</script>

<style lang="scss" scoped>
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.home-component {
  // eslint-disable-next-line vue-scoped-css/no-unused-selector
  &-start {
    &-container {
      min-height: calc(100vh + 10px);
      max-height: 1600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;

    }

    &-text { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 500px;

      &-header {
        text-align: center;
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
      }

      &-content {
        margin-top: 12px;
        text-align: center;
      }

      & > v-btn {
        margin-top: 4px;
      }
    }
  }

  // eslint-disable-next-line vue-scoped-css/no-unused-selector
  &-info {
    &-container {
      display: flex;
      justify-content: center;
    }

    &-card {
      position: relative;
      max-width: 720px;  
      padding-top: 20px;
      padding-left: 40px;
      padding-right: 40px;
      border-radius: 20px 20px 0 0 ;
      z-index: 10;
      box-shadow: 10px -10px 20px 0 rgba(0, 0, 0, 0.3);
      text-align: center;
      background: white;
      color: #333;
      
      @media screen and (width <= 1200px) {
        max-width: 600px;
        padding-bottom: 20px;
      }

      @media screen and (width <= 720px) {
        max-width: 100%;
      }
    }
  }

  // eslint-disable-next-line vue-scoped-css/no-unused-selector
  &-about {
    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 100px;
      padding-left: 100px;
      padding-right: 100px;
      padding-bottom: 40px;

      gap: 60px;

      @media screen and (width <= 600px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 20px;
        flex-wrap: wrap;
      }
    }

    &-text {
      max-width: 800px;

      & > p {
        margin-bottom: 12px;
        font-size: 14px;
      }
    }

    &-image {
      @media screen and (width <= 1200px) {
        display: none;
      }
    }
  }

  // eslint-disable-next-line vue-scoped-css/no-unused-selector
  &-connect {
    &-container {
      padding-top: 40px;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-header {
      margin-top: 10px;
      font-size: 24px;
      line-height: 30px;
    }

    &-text {
      max-width: 480px;
      margin-top: 10px;
      font-size: 14px;
      text-align: center;
    }
  }

  &-wave-row {
    position: relative;
    width: 100vw;
    height: calc(100vw / 3.5);

    @media only screen and (width <= 600px) {
      display: none;
    }
  }
}
</style>
