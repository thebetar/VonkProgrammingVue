<template>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        app
        class="d-sm-none"
        width="100%"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    VonkProgramming
                </v-list-item-title>
                <v-list-item-subtitle>
                    Maatwerk software
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item
                v-for="item in pageLinks"
                :key="item.link"
                :to="item.link"
                @click="$emit('close')"
                class="pa-4"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ item.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                v-for="item in socialLinks"
                :key="item.link"
                :href="item.link"
                @click="$emit('close')"
                target="_blank"
                class="pa-4"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ item.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {
    mdiBackspace,
    mdiHome,
    mdiFolder,
    mdiPhone,
    mdiLinkedin,
    mdiWhatsapp,
    mdiGithub
} from '@mdi/js';

export default {
    data() {
        return {
            drawer: this.drawerProp,
            mdiBackspace,
            pageLinks: [
                {
                    link: '/',
                    icon: mdiHome,
                    text: 'Home'
                },
                {
                    link: '/portfolio',
                    icon: mdiFolder,
                    text: 'Portfolio'
                },
                {
                    link: '/contact',
                    icon: mdiPhone,
                    text: 'Contact'
                }
            ],
            socialLinks: [
                {
                    text: 'Linkedin',
                    link: 'https://www.linkedin.com/in/lars-v-82455612a/',
                    icon: mdiLinkedin
                },
                {
                    text: 'WhatsApp',
                    link: 'https://wa.me/0639119996',
                    icon: mdiWhatsapp
                },
                {
                    text: 'GitHub',
                    link: 'https://github.com/thebetar',
                    icon: mdiGithub
                }
            ]
        };
    },
    props: {
        items: Array,
        drawerProp: Boolean
    },
    watch: {
        drawerProp() {
            this.drawer = this.drawerProp;
        },
        drawer() {
            if (!this.drawer) {
                this.$emit('close');
            }
        }
    }
};
</script>

<style scoped>
.v-navigation-drawer {
    z-index: 200;
}
.side-drawer-lottie-container {
    position: absolute;
    bottom: 20px;
    width: 100%;
    margin: auto;
}
</style>
