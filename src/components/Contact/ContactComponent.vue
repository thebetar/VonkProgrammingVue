<template>
  <div>
    <v-row
      justify="center"
      class="align-items-center align-center custom-card-container"
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
                <p
                  v-if="!$vuetify.display.mobile"
                  class="text-body-2 mb-6"
                >
                  Vul dit formulier in en kom direct in contact met mij.
                </p>
                <p
                  v-else
                  class="text-body-2 mb-6"
                >
                  U kunt mij bereiken op de volgende manieren:
                </p>

                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Whatsapp:
                  </span>
                  <v-btn
                    href="https://wa.me/0639119996"
                    target="_blank"
                    :prepend-icon="mdiWhatsapp"
                    variant="outlined"
                    aria-label="Whatsapp"
                    block
                  >
                    Stuur een bericht
                  </v-btn>
                </p>
                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Bellen:
                  </span>
                  <v-btn
                    href="tel:0639119996"
                    :prepend-icon="mdiPhone"
                    variant="outlined"
                    aria-label="Bellen"
                    block
                  >
                    (+31) 06-39119996
                  </v-btn>
                </p>
                <p>
                  <span class="text-blue-grey-darken-1 text-subtitle-1">
                    Email:
                  </span>
                  <v-btn
                    href="mailto:info@vonkprogramming.nl"
                    :prepend-icon="mdiEmail"
                    variant="outlined"
                    aria-label="Email"
                    block
                  >
                    info@VonkProgramming.nl
                  </v-btn>
                </p>
              </v-col>
              <v-col
                v-if="!$vuetify.display.mobile"
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
                      src="/assets/svg/mailsent.svg"
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
          await fetch('/server/mail.php', {
            method: 'POST',
            body: JSON.stringify(form)
          });
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
.custom-card-container {
  min-height: 100vh;
}

@media only screen and (max-width: 600px) {
  .v-card {
    padding: 1rem 0.5rem !important;
    height: fit-content;
  }
}
</style>
