<template>
  <div>
    <v-row
      justify="center"
      class="contact-component-card-container"
    >
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-card
          elevation="12"
          class="contact-component-card"
        >
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="5"
                md="5"
              >
                <h1 class="text-h2 mb-4">
                  Contact
                </h1>
                <h2 class="text-subtitle-1">
                  Heeft u vragen?
                </h2>
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
                    class="contact-component-card-social-button"
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
                    class="contact-component-card-social-button"
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
                    class="contact-component-card-social-button"
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
                    class="mt-10"
                    @submit.prevent="onSubmit"
                  >
                    <v-text-field
                      v-model="name"
                      label="Naam"
                      :prepend-inner-icon="mdiAccount"
                      :rules="[
                        rules.required
                      ]"
                    />
                    <v-text-field
                      v-model="email"
                      label="Email"
                      :prepend-inner-icon="mdiEmail"
                      :rules="[
                        rules.required,
                        rules.email
                      ]"
                    />
                    <v-textarea
                      v-model="description"
                      label="Beschrijving"
                      :prepend-inner-icon="mdiPencil"
                      :rules="[
                        rules.required,
                        rules.minLength
                      ]"
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
import { mdiWhatsapp, mdiPhone, mdiEmail, mdiSend, mdiAccount, mdiPencil } from '@mdi/js';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default {
  data() {
    return {
      show: true,
      email: '',
      name: '',
      description: '',
      rules: {
        required: value => !!value || 'Dit veld is verplicht',
        email: value => EMAIL_REGEX.test(value) || 'Dit is geen geldig email adres',
        minLength: value => value.length >= 20 || 'Dit veld moet minimaal 20 karakters bevatten'
      },
      mdiWhatsapp,
      mdiPhone,
      mdiEmail,
      mdiSend,
      mdiAccount,
      mdiPencil
    };
  },
  computed: {
    isValid() {
      return (
        this.name &&
        this.name.length > 0 &&
        this.email &&
        EMAIL_REGEX.test(this.email) &&
        this.text &&
        this.text.length > 0 && this.text.length >= 20
      );
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
      if (this.isValid) {
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
  }
};
</script>

<style lang="scss" scoped>
.contact-component-card {
  border-radius: 1rem;
  
  padding: 1.5rem 2rem;
  
  @media only screen and (width <= 600px) {
  /* eslint-disable-next-line vue-scoped-css/no-unused-selector */
    padding: 2rem 1rem;
  }

  &-container {
    min-height: 100vh;

    align-items: center;
  }

  &-social-button {
    display: flex;
    width: fit-content;
    max-width: 20rem;
  }
}
</style>