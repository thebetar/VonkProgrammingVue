<template>
  <div>
    <v-row class="background" justify="center" align="center">
      <v-col
        cols="4"
        align-self="end"
        style="padding: 0px;"
        class="d-none d-sm-flex"
      >
        <img
          class="portrait"
          :src="require('@/assets/about/lars_profielfoto_v2-min.png')"
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" class="white--text d-flex flex-column">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_vEfHlN.json"
          mode="bounce"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px; margin: 16px;"
          loop
          autoplay
          class="align-self-center"
        ></lottie-player>
        <h5 class="display-2">Wie ben ik?</h5>
        <p class="body-1">
          Hallo, ik ben Lars. Ik ben een gemotiveerd IT-consultant en
          programmeur met een passie voor web-development. Hiernaast maak ik ook
          apps met behulp van het Ionic framework.<br />
          Dit carrière pad is voor mij ontstaan uit een levenslange passie voor
          computers en technologie die al vanaf jonge leeftijd is ontstaan.<br />
          Ik ben altijd al met computers bezig geweest en het heeft mij altijd
          gefascineerd hoe een website goede interactie kan bieden aan de
          eindgebruiker.<br />
          Ik heb mijn bachelor-opleiding HBO-ICT afgerond aan de hogeschool
          Windesheim in Almere.
        </p>
      </v-col>
    </v-row>
    <v-row class="background" justify="center" align="center">
      <v-col cols="4" class="d-none d-sm-flex">
        <v-row>
          <v-col cols="6" class="pt-12">
            <img class="icon" :src="require('@/assets/about/vuejs.jpg')" />
          </v-col>
          <v-col cols="6" class="pt-12">
            <img class="icon" :src="require('@/assets/about/angular.jpg')" />
          </v-col>
          <v-col cols="6" class="pt-12">
            <img class="icon" :src="require('@/assets/about/react.jpg')" />
          </v-col>
          <v-col cols="6" class="pt-12">
            <img class="icon" :src="require('@/assets/about/express.jpg')" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" md="4" offset-sm="1" class="white--text">
        <h5 class="display-2">Ervaringen</h5>
        <p class="body-1 mt-2">
          Hieronder staan al mijn voorgaande ervaringen beschreven
        </p>
        <v-timeline dense>
          <v-timeline-item v-for="item in items" :key="item.language">
            <v-row align="center">
              <v-col cols="6" sm="3" md="3">
                {{ item.language }}
              </v-col>
              <v-col>
                <about-progress-component
                  :color="item.color"
                  :years="item.years"
                  :progress="item.progress"
                ></about-progress-component>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row class="background" justify="center" align="center">
      <v-col
        cols="12"
        sm="4"
        md="4"
        class="text-center white--text d-flex flex-column align-center"
      >
        <h5 class="display-2">Projecten</h5>
        <p class="body-1 pt-2">
          Voor informatie over projecten die ik in het verleden gedaan heb of
          momenteel mee bezig ben zie
          <router-link to="/portfolio">Portfolio</router-link>
        </p>
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_h59xofz0.json"
          mode="bounce"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px; margin: 16px;"
          loop
          autoplay
        ></lottie-player>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AboutProgressComponent from "./AboutProgressComponent.vue";

export default {
  data() {
    return {
      items: [
        {
          language: "Javascript",
          color: "yellow",
          years: 5,
          progress: 85,
        },
        {
          language: "NodeJS",
          color: "green",
          years: 2,
          progress: 70,
        },
        {
          language: "Ionic",
          color: "blue",
          years: 1,
          progress: 50,
        },
        {
          language: "PHP",
          color: "purple",
          years: 5,
          progress: 75,
        },
        {
          language: "Python",
          color: "yellow",
          years: 2,
          progress: 60,
        },
        {
          language: "CSS",
          color: "teal",
          years: 5,
          progress: 85,
        },
        {
          language: "HTML",
          color: "orange",
          years: 5,
          progress: 85,
        },
      ],
    };
  },
  components: {
    AboutProgressComponent,
  },
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/backgrounds/bg-about-min.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 102vh !important;
}

.portrait {
  height: 600px;
}

.icon {
  height: 100px;
}

@media only screen and (max-width: 600px) {
  .background {
    height: 800px !important;
    z-index: 1;
  }
}
</style>
