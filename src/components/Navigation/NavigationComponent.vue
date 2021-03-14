<template>
    <v-card class="ma-0 ma-md-2" flat :class="{ scrolled: isScroll }">
        <v-app-bar class="d-flex justify-start justify-md-center">
            <v-app-bar-nav-icon @click="emitDrawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/home">
                    <v-img src="../../assets/logo.png" max-height="36" contain></v-img>
                </router-link>
            </v-toolbar-title>
            <v-tabs dark class="d-none d-sm-flex">
                <v-tab v-for="item in items" :to="item.link" :key="item.link" :class="{ 'scrolled-text': isScroll }">
                    <v-icon>{{ item.icon }}</v-icon>
                    {{ item.text }}
                </v-tab>
            </v-tabs> 
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                >
                <v-list-item v-for="item in items" :key="item.link">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>

                </v-list-item-group>
            </v-list>
            </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            isScroll: this.handleScroll(),
        }
    },
    props: {
        items: Array
    },
    created() {
        window.addEventListener('scroll', () => {
            this.isScroll = this.handleScroll();
        })
    },
    methods: {
        handleScroll() {
            return window.scrollY > 100;
        },
        emitDrawer() {
            this.$emit('drawerClick');
        }
    }
}
</script>

<style scoped>
    .v-card {
        position: fixed;
        width: calc(100% - 16px);
        z-index: 1;
        background-color: transparent !important;
        transition: all 0.3s ease-in-out;
    }

    .v-toolbar {
        background-color: transparent !important;
        box-shadow: none !important;
    }

    .scrolled {
        background-color: #fff !important;
        box-shadow: 0px 0px 4px #aaa !important;
    }
    
    .scrolled-text {
        color: black !important;
    }

    .scrolled-text .v-icon {
        color: black !important;
    }

    @media only screen and (max-width: 600px) {
        .v-card {
            width: 100vw;
        }
    }
</style>