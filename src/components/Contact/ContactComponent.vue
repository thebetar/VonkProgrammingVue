<template>
  <div class="contact-component-container">
    <v-card
      elevation="12"
      class="contact-component-card"
    >
      <v-card-text>
        <div class="contact-component-card-content">
          <div class="contact-component-card-content-left">
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
              <span class="text-blue-grey-darken-1 text-subtitle-1"> Whatsapp: </span>
              <v-btn
                href="https://wa.me/0639119996"
                target="_blank"
                :prepend-icon="mdiWhatsapp"
                variant="outlined"
                aria-label="Whatsapp"
                class="contact-component-card-social-button"
                :size="$vuetify.display.mobile ? 'small' : 'default'"
              >
                Stuur een bericht
              </v-btn>
            </p>
            <p>
              <span class="text-blue-grey-darken-1 text-subtitle-1"> Bellen: </span>
              <v-btn
                href="tel:0639119996"
                :prepend-icon="mdiPhone"
                variant="outlined"
                aria-label="Bellen"
                class="contact-component-card-social-button"
                :size="$vuetify.display.mobile ? 'small' : 'default'"
              >
                (+31) 06-39119996
              </v-btn>
            </p>
            <p>
              <span class="text-blue-grey-darken-1 text-subtitle-1"> Email: </span>
              <v-btn
                href="mailto:info@vonkprogramming.nl"
                :prepend-icon="mdiEmail"
                variant="outlined"
                aria-label="Email"
                class="contact-component-card-social-button"
                :size="$vuetify.display.mobile ? 'small' : 'default'"
              >
                info@VonkProgramming.nl
              </v-btn>
            </p>
          </div>
          <div
            v-if="!$vuetify.display.mobile"
            class="contact-component-card-content-right"
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
                  name="name"
                  :prepend-inner-icon="mdiAccount"
                  :rules="[rules.required]"
                  variant="outlined"
                  aria-label="Naam"
                />
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  :prepend-inner-icon="mdiEmail"
                  :rules="[rules.required, rules.email]"
                  variant="outlined"
                  aria-label="Email"
                />
                <v-textarea
                  v-model="description"
                  label="Beschrijving"
                  name="description"
                  :prepend-inner-icon="mdiPencil"
                  :rules="[rules.required, rules.minLength]"
                  :rows="isMobile ? 2 : 5"
                  auto-grow
                  variant="outlined"
                  aria-label="Beschrijving"
                />
                <v-btn
                  name="submit"
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
                  width: '100%',
                }"
              >
                <v-img
                  src="/assets/svg/mailsent.svg"
                  height="200"
                  width="200"
                  alt="Mail sent"
                />
              </div>
            </transition>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mdiWhatsapp, mdiPhone, mdiEmail, mdiSend, mdiAccount, mdiPencil } from '@mdi/js';

import isEmail from 'validator/es/lib/isEmail';
import isLength from 'validator/es/lib/isLength';

export default defineComponent({
	data() {
		return {
			show: true,
			email: '',
			name: '',
			description: '',
			rules: {
				required: (value: string) => !!value || 'Dit veld is verplicht',
				email: (value: string) => isEmail(value) || 'Dit is geen geldig email adres',
				minLength: (value: string) =>
					isLength(value, { min: 20 }) || 'Dit veld moet minimaal 20 karakters bevatten',
			},
			mdiWhatsapp,
			mdiPhone,
			mdiEmail,
			mdiSend,
			mdiAccount,
			mdiPencil,
		};
	},
	computed: {
		isValid() {
			return (
				this.name &&
				this.name.length > 0 &&
				this.email &&
				isEmail(this.email) &&
				this.description &&
				this.description.length > 0 &&
				this.description.length >= 20
			);
		},
		isMobile() {
			return window.innerWidth <= 800 || window.innerHeight <= 600;
		},
	},
	methods: {
		async onSubmit() {
			const form = {
				name: this.name,
				email: this.email,
				text: this.description,
			};
			if (this.isValid) {
				await this.sendRequest(form);
				this.show = false;
			} else {
				this.isValid = false;
			}
		},
		async sendRequest(form: { name: string; email: string; text: string }) {
			try {
				await fetch('/server/mail.php', {
					method: 'POST',
					body: JSON.stringify(form),
				});
			} catch (e) {
				console.error(e);
			}
		},
	},
});
</script>

<style lang="scss" scoped>
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.contact-component {
	&-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&-card {
		border-radius: 20px;
		padding: 1.5rem 2rem;
    padding-bottom: 1rem;
    width: 100%;
		max-width: 960px;

    @media only screen and (width <= 960px) {
      max-width: 400px;
    }

		@media only screen and (width <= 960px) {
			/* eslint-disable-next-line vue-scoped-css/no-unused-selector */
			padding: 2rem 1rem;
		}

		&-social-button {
			display: flex;
			width: fit-content;
			max-width: 20rem;
		}

    &-content {
      width: 100%;
      display: flex;  
      align-items: center;
      justify-content: center;

      &-left {
        flex: 2;
      }

      &-right {
        flex: 2;
      }
    }
	}
}
</style>
