<template>
  <div>
    <v-row
      justify="center"
      class="align-items-end align-items-sm-center v-card-container"
      :class="$vuetify.display.mobile ? 'align-end' : 'align-center'"
    >
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-card
          class="pa-2 pa-md-5 rounded-xl"
          outlined
          elevation="12"
        >
          <v-card-title>
            <h1 class="text-h2 mb-4">Contact</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="5"
                md="5"
              >
                <h2 class="text-subtitle-1">Heeft u vragen?</h2>
                <p class="text-body-2 mb-6">
                  Vul dit formulier in en kom direct in contact met mij.
                </p>
                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Whatsapp:
                  </span>
                  <br />
                  <a
                    href="https://wa.me/0639119996"
                    target="_blank"
                  >
                    <v-icon :icon="mdiWhatsapp" />
                    Stuur een bericht
                  </a>
                </p>
                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Bellen:
                  </span>
                  <br />
                  <a href="tel:0639119996">
                    <v-icon :icon="mdiPhone" />
                    (+31) 06-39119996
                  </a>
                </p>
                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Email:
                  </span>
                  <br />
                  <a href="mailto:info@vonkprogramming.nl">
                    <v-icon :icon="mdiEmail" />
                    info@VonkProgramming.nl
                  </a>
                </p>
              </v-col>
              <v-col
                cols="12"
                sm="7"
                md="7"
              >
                <transition
                  name="fade-left"
                  mode="out-in"
                >
                  <v-form
                    v-if="show"
                    @submit.prevent="onSubmit"
                  >
                    <v-text-field
                      v-model="name"
                      outlined
                      label="Naam"
                      required
                    />
                    <v-text-field
                      v-model="email"
                      outlined
                      label="Email"
                      required
                    />
                    <v-textarea
                      v-model="description"
                      outlined
                      label="Beschrijving"
                      required
                      :rows="isMobile ? 2 : 5"
                    />
                    <v-btn
                      type="submit"
                      class="float-right"
                      color="primary"
                      :disabled="!isValid"
                      size="large"
                      :append-icon="mdiSend"
                    >
                      Stuur
                    </v-btn>
                  </v-form>
                  <div
                    v-else
                    class="d-flex justify-center align-center"
                    :style="{
                      height: '100%',
                      width: '100%'
                    }"
                  >
                    <v-img
                      :src="require('@/assets/svg/mailsent.svg')"
                      height="200"
                      width="200"
                    />
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
import axios from 'axios';
import { mdiWhatsapp, mdiPhone, mdiEmail, mdiSend } from '@mdi/js';

export default {
  data() {
    return {
      show: true,
      email: '',
      name: '',
      description: '',
      mdiWhatsapp,
      mdiPhone,
      mdiEmail,
      mdiSend
    };
  },
  computed: {
    isValid() {
      const form = {
        name: this.name,
        email: this.email,
        text: this.description
      };
      return this.validate(form);
    },
    isMobile() {
      return window.innerWidth <= 800 || window.innerHeight <= 600;
    }
  },
  methods: {
    async onSubmit() {
      const form = {
        name: this.name,
        email: this.email,
        text: this.description
      };
      if (this.validate(form)) {
        try {
          await axios.post('/server/mail.php', form);
          this.show = false;
        } catch (e) {
          console.error(e);
        }
      } else {
        this.isValid = false;
      }
    },
    validate(form) {
      const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return (
        form.name.length > 0 &&
        EMAIL_REGEX.test(form.email) &&
        form.text.length > 0
      );
    }
  }
};
</script>

<style scoped>
.v-card {
  border: 2px #aaa solid;
  border-radius: 0.5rem;
}

.v-card-container {
  min-height: 100vh;
}

@media only screen and (max-width: 600px) {
  .v-card {
    padding: 1rem 0.5rem !important;
    height: fit-content;
  }

  .v-card-container {
    min-height: 100vh;
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
