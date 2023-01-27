<template>
    <v-app>
        <navigation-component :items="items" @drawerClick="showSidedrawer" />
        <sidedrawer-component
            :items="items"
            :drawerProp="drawer"
            @close="hideSidedrawer"
        />

        <transition name="fade">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

import {
    mdiHome,
    mdiFolder,
    mdiPhone,
    mdiLinkedin,
    mdiWhatsapp,
    mdiGithub
} from '@mdi/js';

export default {
    name: 'App',
    components: {
        NavigationComponent,
        SidedrawerComponent
    },
    data() {
        return {
            drawer: false,
            items: [
                {
                    href: false,
                    link: '/home',
                    icon: mdiHome,
                    text: 'Home'
                },
                {
                    href: false,
                    link: '/portfolio',
                    icon: mdiFolder,
                    text: 'Portfolio'
                },
                {
                    href: false,
                    link: '/contact',
                    icon: mdiPhone,
                    text: 'Contact'
                },
                {
                    href: true,
                    link: 'https://www.linkedin.com/in/lars-v-82455612a/',
                    icon: mdiLinkedin,
                    text: 'LinkedIn'
                },
                {
                    href: true,
                    link: 'https://wa.me/0639119996',
                    icon: mdiWhatsapp,
                    text: 'WhatsApp'
                },
                {
                    href: true,
                    link: 'https://github.com/thebetar',
                    icon: mdiGithub,
                    text: 'GitHub'
                }
            ]
        };
    },
    methods: {
        showSidedrawer() {
            this.drawer = true;
        },
        hideSidedrawer() {
            this.drawer = false;
        }
    }
};
</script>
