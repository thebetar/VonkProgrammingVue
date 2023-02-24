<template>
  <v-row
    class="home-page-background home-page-background-gradient"
    :class="$vuetify.display.mobile ? 'py-16' : 'py-2'"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          align="center"
        >
          <v-img
            src="/assets/svg/idea.svg"
            width="80"
            height="80"
          />
          <h3 class="text-h3 mt-4">Van idee naar website!</h3>
          <p class="text-body-1 mt-4">
            VonkProgramming heeft contact met verschillende ontwerpers om uw
            idee perfect vorm te geven. Hierbij wordt er rekening gehouden met
            <span class="font-weight-bold font-italic"> responsiviteit</span>,
            <span class="font-weight-bold font-italic"> schaalbaarheid</span>
            en
            <span class="font-weight-bold font-italic">SEO</span>.<br />
            VonkProgramming richt zich op een flexibele aanpak. Van software
            solutions tot simpele portfolio websites.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <h4 class="title">Frameworks</h4>
          <p class="text-body-1">
            VonkProgramming maakt gebruik van de nieuwste JavaScript frameworks.
            Dit houdt in dat uw applicatie snel en schaalbaar is met behulp van
            de nieuwste web development technieken. Dit betekend dat als u later
            uw website wilt uitbreiden dit minder tijd kost doordat hier
            rekening mee wordt gehouden binnen de frameworks. (Ionic, Vue en
            React).
          </p>
          <div class="d-flex justify-between">
            <v-img
              src="/assets/svg/ionic.svg"
              class="mx-2"
              width="80"
              height="80"
            />
            <v-img
              src="/assets/svg/vue.svg"
              class="mx-2"
              width="80"
              height="80"
            />
            <v-img
              src="/assets/svg/react.svg"
              class="mx-2"
              width="80"
              height="80"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <h5 class="title">Andere oplossingen</h5>
          <p class="text-body-1">
            Naast websites en webapps biedt VonkProgramming ook mogelijkheden
            binnen NodeJS. Hiermee kan bijvoorbeeld server software of web
            automation software worden gemaakt.
          </p>
          <div class="d-flex justify-between">
            <v-img
              src="/assets/svg/nodejs.svg"
              class="mx-2"
              width="80"
              height="80"
            />
            <v-img
              src="/assets/svg/mongodb.svg"
              class="mx-2"
              width="80"
              height="80"
            />
            <v-img
              src="/assets/svg/docker.svg"
              class="mx-2"
              width="80"
              height="80"
            />
            <v-img
              src="/assets/svg/puppeteer.svg"
              class="mx-2"
              width="80"
              height="80"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
