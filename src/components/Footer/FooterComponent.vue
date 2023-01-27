<template>
    <v-footer color="white">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="6">
                    <span class="display-1 mb-3">
                        Contact
                    </span>
                    <a
                        href="https://wa.me/0639119996"
                        target="_blank"
                        class="contact-link"
                        aria-label="Whatsapp"
                    >
                        <v-icon>{{ mdiWhatsapp }}</v-icon> Stuur mij een bericht
                    </a>
                    <a
                        href="tel:0639119996"
                        class="contact-link"
                        aria-label="Bellen"
                    >
                        <v-icon>{{ mdiPhone }}</v-icon> 06-39119996
                    </a>
                    <a
                        href="mailto:info@vonkprogramming.nl"
                        class="contact-link"
                        aria-label="Email"
                    >
                        <v-icon>{{ mdiEmail }}</v-icon> info@VonkProgramming.nl
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lars-v-82455612a/"
                        target="_blank"
                        class="contact-link"
                        aria-label="LinkedIn"
                    >
                        <v-icon>{{ mdiLinkedin }}</v-icon> LinkedIn
                    </a>
                    <a
                        href="https://github.com/thebetar"
                        target="_blank"
                        class="contact-link"
                        aria-label="Github"
                    >
                        <v-icon>{{ mdiGithub }}</v-icon> Github
                    </a>
                </v-col>
                <v-col cols="12" offset-sm="2" sm="6" offset-md="2" md="4">
                    <span class="display-1 mb-3">
                        Pagina's
                    </span>
                    <v-list>
                        <v-list-item class="title" to="/home">
                            <v-icon class="mr-2">{{ mdiHome }}</v-icon> Home
                        </v-list-item>
                        <v-list-item class="title" to="/portfolio">
                            <v-icon class="mr-2">{{ mdiFolder }}</v-icon>
                            Portfolio
                        </v-list-item>
                        <v-list-item class="title" to="/contact">
                            <v-icon class="mr-2">{{ mdiPhone }}</v-icon> Contact
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import {
    mdiWhatsapp,
    mdiPhone,
    mdiEmail,
    mdiLinkedin,
    mdiGithub,
    mdiHome,
    mdiFolder
} from '@mdi/js';

export default {
    data() {
        return {
            show: true,
            name: '',
            email: '',
            description: '',
            mdiWhatsapp,
            mdiPhone,
            mdiEmail,
            mdiLinkedin,
            mdiGithub,
            mdiHome,
            mdiFolder
        };
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
</style>
