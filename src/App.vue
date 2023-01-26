<template>
    <v-app>
        <navigation-component :items="items" @drawerClick="showSidedrawer" />
        <sidedrawer-component
            :items="items"
            :drawerProp="drawer"
            @close="hideSidedrawer"
        />

        <v-main id="main">
            <transition name="fade">
                <router-view />
            </transition>
        </v-main>
        <footer-component />
    </v-app>
</template>

<script>
import FooterComponent from './components/Footer/FooterComponent.vue';
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

export default {
    name: 'App',
    components: {
        FooterComponent,
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
                    icon: 'mdi-home',
                    text: 'Home'
                },
                {
                    href: false,
                    link: '/portfolio',
                    icon: 'mdi-folder',
                    text: 'Portfolio'
                },
                {
                    href: false,
                    link: '/contact',
                    icon: 'mdi-phone',
                    text: 'Contact'
                },
                {
                    href: true,
                    link: 'https://www.linkedin.com/in/lars-v-82455612a/',
                    icon: 'mdi-linkedin',
                    text: 'LinkedIn'
                },
                {
                    href: true,
                    link: 'https://wa.me/0639119996',
                    icon: 'mdi-whatsapp',
                    text: 'Facebook'
                },
                {
                    href: true,
                    link: 'https://github.com/thebetar',
                    icon: 'mdi-github',
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

<style>
.h-full {
    height: 100vh;
}
</style>
