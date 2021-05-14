<template>
  <div>
    <v-row class="home-page-media-1" justify="space-between" align="center">
      <v-col cols="10" sm="10" md="2" offset="1" offset-md="2" class="mt-4">
        <v-img src="../../assets/logo.png"></v-img>
      </v-col>
      <v-col cols="4" offset="2" class="d-none d-md-block">
        <div id="codeFadeDiv">
          <div id="autoFadeCode" style="display: inline;"></div>
          <span id="cursorCode" style="margin-top: -16px;">|</span>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row justify="center" align="center" class="pt-12">
      <v-col cols="12" sm="12" md="6" align="center">
        <h2 class="display-1">
          Welkom bij VonkProgramming!
        </h2>
        <p class="body-1 mt-4">
          VonkProgramming is een Web development bedrijf dat zich bezighoudt met
          maatwerk software solutions. Voor iedere klant maak ik op maat
          gemaakte software, afgestemd op uw behoeften.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6 pb-12">
      <v-col cols="12" sm="12" md="4" align="center">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            class="pa-4 d-flex flex-column align-center"
            :class="{ 'card-hover': hover }"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_myryne1p/lottie_step1/data.json"
              mode="bounce"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px;"
              loop
              autoplay
            ></lottie-player>
            <v-card-title class="title text-center"
              >Procesbeschrijving</v-card-title
            >
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <b>1.</b>
                </v-list-item-icon>
                <v-list-item-content>
                  Voorafgaand vindt er een kennsmakingsgesprek plaats waarin de
                  context van uw wens wordt besproken.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <b>2.</b>
                </v-list-item-icon>
                <v-list-item-content>
                  Op basis van de besproken details wordt er een product ontwerp
                  gemaakt. Gedurende dit proces is het belangrijk dat de klant
                  tevreden is met het ontwerp en dat de software voldoet aan de
                  gestelde eisen.
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <b>3.</b>
                </v-list-item-icon>
                <v-list-item-content>
                  Zodra het eindproduct klaar is zorgt VonkProgramming ervoor
                  dat enige bugs eruit gefilterd worden tot dat de klant
                  tevreden is met het eindresultaat.
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="12" md="4" align="center">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            class="pa-4 d-flex flex-column align-center"
            :class="{ 'card-hover': hover }"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_xsnsvpbs.json"
              mode="bounce"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px;"
              loop
              autoplay
            ></lottie-player>
            <v-card-title class="title">
              Webapplicatie Development
            </v-card-title>
            <v-card-text class="body-2">
              Om garantie te geven dat jij daadwerkelijk profiteert van uw
              nieuwe website, wordt ervoor gezorgd dat tijdens het ontwikkelen
              van de website er rekening gehouden wordt met interactiviteit.
              Niet alleen zorg ik ervoor dat de website direct goed vindbaar is,
              maar gebruik ik ook de nieuwste development technieken waardoor
              schaalbaarheid en snelheid vanzelfsprekend is.
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row class="home-page-media-2" justify="center" align="center">
      <v-col cols="12" sm="12" md="6" align="center">
        <h4 class="display-2">Responsief ontwerp</h4>
        <p class="body-2">Bereik uw publiek op elk apparaat</p>
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-12">
      <v-col cols="12" sm="12" md="6" align="center">
        <h5 class="display-1">Van idee naar website!</h5>
        <p class="body-1 mt-4">
          VonkProgramming heeft contact met verschillende ontwerpers om uw idee
          perfect vorm te geven. Hierbij wordt er rekening gehouden met
          <span class="highlight">responsiviteit</span>,
          <span class="highlight">schaalbaarheid</span> en
          <span class="highlight">SEO</span>.<br />
          VonkProgramming richt zich op een flexibele aanpak. Van software
          solutions tot simpele portfolio websites.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-12">
      <v-col cols="12" sm="12" md="4" align="center">
        <h6 class="title">Frameworks</h6>
        <p class="body-2">
          VonkProgramming maakt gebruik van de nieuwste JavaScript frameworks.
          Dit houdt in dat uw applicatie snel en schaalbaar is met behulp van de
          nieuwste web development technieken. Dit betekend dat als u later uw
          website wilt uitbreiden dit minder tijd kost doordat hier rekening mee
          wordt gehouden binnen de frameworks. (Angular, Vue en React).
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" align="center">
        <h6 class="title">Backend oplossingen</h6>
        <p class="body-2">
          Naast websites en webapps biedt VonkProgramming ook mogelijkheden
          binnen NodeJS en Ionic. Deze twee solutions kunnen gebruikt worden
          voor het bouwen van serversystemen en mobiele apps.
        </p>
      </v-col>
    </v-row>
    <v-row class="home-page-media-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="6" align="center">
        <h4 class="display-2 text-sm-center">Flitsende snelheid</h4>
        <p class="body-2">
          Ik maak gebruik van de nieuwste technieken om uw website zo snel als
          mogelijk te maken!
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
#codeFadeDiv {
  background-color: #000;
  padding: 8px;
  font-size: 24px;
  border-radius: 8px;
  opacity: 0.8;
  color: white;
}

.v-card {
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
}

.card-hover {
  opacity: 1;
}

.home-page-media-1 {
  top: 0px;
  height: 105vh;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("../../assets/backgrounds/bg-website-min.jpg");
}

.home-page-media-2 {
  height: 80vh;
  color: white;
  text-shadow: #333 0 0 8px;
  background-image: url("../../assets/backgrounds/bg-website-2-min.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.home-page-media-3 {
  height: 80vh;
  color: white;
  text-shadow: #333 0 0 8px;
  background-image: url("../../assets/backgrounds/bg-website-3-min.jpg");
  background-size: cover;
  background-attachment: fixed;
}

@media only screen and (max-width: 600px) {
  .home-page-media-1 {
    height: 100vh;
  }
}
</style>
