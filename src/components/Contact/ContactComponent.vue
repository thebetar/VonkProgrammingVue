<template>
  <div>
    <v-row class="background" justify="center" align="center">
      <v-col cols="12" sm="6" md="6">
        <v-card class="pa-2 pa-md-5 rounded-xl media-card" height="520">
          <v-card-title>
            <h1 class="display-3">
              Contact
            </h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="5" md="5">
                <h5 class="title">
                  Heeft u vragen?
                </h5>
                <p class="body-2">
                  Vul dit formulier in en kom direct in contact met mij.
                </p>
                <p>
                  <span class="grey--text subtitle">
                    <v-icon>mdi-cellphone</v-icon>
                    Phone: </span
                  ><br />
                  <a class="contact-link" href="tel:0639119996"
                    >(+31) 06-39119996</a
                  >
                </p>
                <p>
                  <span class="grey--text subtitle">
                    <v-icon>mdi-email</v-icon>
                    Email: </span
                  ><br />
                  <a href="mailto:info@vonkprogramming.nl" class="contact-link"
                    >info@VonkProgramming.nl</a
                  >
                </p>
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_t8x0cxa7.json"
                  mode="bounce"
                  background="transparent"
                  speed="1"
                  style="width: 200px; height: 200px;"
                  loop
                  autoplay
                ></lottie-player>
              </v-col>
              <v-col cols="12" sm="7" md="7">
                <transition name="fade" mode="out-in">
                  <v-form @submit.prevent="onSubmit" v-if="show">
                    <v-text-field
                      outlined
                      label="Naam"
                      v-model="name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      label="Email"
                      v-model="email"
                      required
                    ></v-text-field>
                    <v-textarea
                      outlined
                      label="Beschrijving"
                      v-model="description"
                      required
                    ></v-textarea>
                    <v-btn
                      type="submit"
                      class="float-right pa-5"
                      color="primary"
                      >Stuur</v-btn
                    >
                  </v-form>
                  <div class="display-1 mt-4" v-else>
                    Verstuurd
                  </div>
                </transition>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: true,
      email: "",
      name: "",
      description: "",
    };
  },
  methods: {
    async onSubmit() {
      const form = {
        name: this.name,
        email: this.email,
        text: this.description,
      };
      try {
        await axios.post("/server/mail.php", form);
        this.show = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/backgrounds/bg-contact-min.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 102vh !important;
}

a.contact-link {
  display: block;
  color: #333;
  text-decoration: none;
  margin-top: 8px;
  transition: all 0.3s ease-in-out;
}

a.contact-link:hover,
a.contact-link:hover .v-icon {
  color: #f22 !important;
}

@media only screen and (max-width: 600px) {
  .media-card {
    height: 800px !important;
  }

  .background {
    height: 950px !important;
  }
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
