<template>
    <div>
        <v-row class="background" justify="center" align="center">
            <v-col cols="12" sm="6" md="6">
                <v-card class="pa-2 pa-md-5 rounded-xl media-card" height="540">
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
                                    Vul dit formulier in en kom direct in
                                    contact met mij.
                                </p>
                                <p>
                                    <span class="grey--text subtitle">
                                        <v-icon>mdi-whatsapp</v-icon>
                                        Whatsapp:
                                    </span>
                                    <br />
                                    <a
                                        class="contact-link"
                                        href="https://wa.me/0639119996"
                                        target="_blank"
                                    >
                                        Stuur een bericht
                                    </a>
                                </p>
                                <p>
                                    <span class="grey--text subtitle">
                                        <v-icon>mdi-cellphone</v-icon>
                                        Bellen:
                                    </span>
                                    <br />
                                    <a
                                        class="contact-link"
                                        href="tel:0639119996"
                                    >
                                        (+31) 06-39119996
                                    </a>
                                </p>
                                <p>
                                    <span class="grey--text subtitle">
                                        <v-icon>mdi-email</v-icon>
                                        Email:
                                    </span>
                                    <br />
                                    <a
                                        href="mailto:info@vonkprogramming.nl"
                                        class="contact-link"
                                    >
                                        info@VonkProgramming.nl
                                    </a>
                                </p>
                            </v-col>
                            <v-col cols="12" sm="7" md="7">
                                <transition name="fade-left" mode="out-in">
                                    <v-form
                                        @submit.prevent="onSubmit"
                                        v-if="show"
                                    >
                                        <v-text-field
                                            outlined
                                            label="Naam"
                                            v-model="name"
                                            required
                                        />
                                        <v-text-field
                                            outlined
                                            label="Email"
                                            v-model="email"
                                            required
                                        />
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
                                            :disabled="!isValid"
                                            >Stuur</v-btn
                                        >
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
                                            :src="
                                                require('@/assets/svg/mailsent.svg')
                                            "
                                            height="200"
                                            width="200"
                                        >
                                            <template #placeholder>
                                                <v-sheet>
                                                    <v-skeleton-loader
                                                        height="200"
                                                        width="200"
                                                        type="image"
                                                    />
                                                </v-sheet>
                                            </template>
                                        </v-img>
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

export default {
    data() {
        return {
            show: true,
            email: '',
            name: '',
            description: ''
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
.background {
    background-color: #222;
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
        margin-top: 20px;
        height: 1000px !important;
    }

    .background {
        height: 1120px !important;
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
