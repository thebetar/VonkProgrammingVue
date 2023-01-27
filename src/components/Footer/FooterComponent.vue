<template>
    <v-footer color="white">
        <v-container>
            <v-row justify="space-between">
                <v-col cols="12" sm="4" md="4">
                    <h5 class="display-1 mb-3">
                        Contact
                    </h5>
                    <a
                        href="https://wa.me/0639119996"
                        target="_blank"
                        class="contact-link"
                    >
                        <v-icon>mdi-whatsapp</v-icon> Stuur mij een bericht
                    </a>
                    <a href="tel:0639119996" class="contact-link">
                        <v-icon>mdi-cellphone</v-icon> 06-39119996
                    </a>
                    <a
                        href="mailto:info@vonkprogramming.nl"
                        class="contact-link"
                    >
                        <v-icon>mdi-email</v-icon> info@VonkProgramming.nl
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lars-v-82455612a/"
                        target="_blank"
                        class="contact-link"
                    >
                        <v-icon>mdi-linkedin</v-icon> LinkedIn
                    </a>
                    <a
                        href="https://github.com/thebetar"
                        target="_blank"
                        class="contact-link"
                    >
                        <v-icon>mdi-github</v-icon> Github
                    </a>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <h6 class="display-1 mb-3">
                        Pagina's
                    </h6>
                    <v-list>
                        <v-list-item class="title" to="/home">
                            <v-icon>mdi-home</v-icon> Home
                        </v-list-item>
                        <v-list-item class="title" to="/portfolio">
                            <v-icon>mdi-folder-account</v-icon> Portfolio
                        </v-list-item>
                        <v-list-item class="title" to="/contact">
                            <v-icon>mdi-cellphone</v-icon> Contact
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            show: true,
            name: '',
            email: '',
            description: ''
        };
    },
    methods: {
        async onSubmit() {
            const form = {
                show: true,
                name: this.name,
                email: this.email,
                text: this.description
            };
            try {
                await axios.post('/server/mail.php', form);
                this.show = false;
            } catch (e) {
                console.error(e);
            }
        }
    }
};
</script>

<style scoped>
a.contact-link {
    display: block;
    color: #333;
    text-decoration: none;
    margin: 0.8rem auto;
    transition: all 0.3s ease-in-out;
}

a.contact-link:hover,
a.contact-link:hover .v-icon {
    color: #f22 !important;
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
