<template>
    <v-app>
        <navigation-component @drawerClick="showSidedrawer" />
        <sidedrawer-component :drawerProp="drawer" @close="hideSidedrawer" />

        <transition name="fade">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

export default {
    name: 'App',
    components: {
        NavigationComponent,
        SidedrawerComponent
    },
    data() {
        return {
            drawer: false
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
