<template>
    <div>
        <v-app-bar
            class="d-flex justify-space-between justify-md-center w-full"
            fixed
            flat
            dark
            :class="{ scrolled: isScroll }"
        >
            <v-app-bar-nav-icon
                @click="emitDrawer"
                class="d-flex d-sm-none"
                aria-label="Open menu"
            >
                <v-icon large>{{ mdiMenu }}</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/home" aria-label="Home">
                    <v-img
                        src="../../assets/logo.png"
                        max-height="36"
                        max-width="90"
                        contain
                    ></v-img>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-items dark class="d-none d-sm-block">
                <v-btn
                    text
                    v-for="item in items.filter(item => !item.href)"
                    :to="item.link"
                    :key="item.link"
                    :class="{ 'scrolled-text': isScroll }"
                    :aria-label="item.text"
                >
                    <v-icon style="margin-right: 4px;">{{ item.icon }}</v-icon>
                    {{ item.text }}
                </v-btn>
                <v-btn
                    text
                    v-for="item in items.filter(item => item.href)"
                    :href="item.link"
                    :key="item.link"
                    :class="{ 'scrolled-text': isScroll }"
                    target="_blank"
                    :aria-label="item.text"
                >
                    <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
import { mdiMenu } from '@mdi/js';

export default {
    data() {
        return {
            isScroll: this.handleScroll(),
            mdiMenu
        };
    },
    props: {
        items: Array
    },
    created() {
        // Check if not mobile
        if (window.screen.width >= 600) {
            window.addEventListener('scroll', () => {
                this.isScroll = this.handleScroll();
            });
        }
    },
    methods: {
        handleScroll() {
            return window.scrollY > 50;
        },
        emitDrawer() {
            this.$emit('drawerClick');
        }
    }
};
</script>

<style scoped>
header {
    background-color: transparent !important;
    transition: all 0.3s ease-in-out;
}

.v-card {
    z-index: 5;
    background-color: transparent !important;
    transition: all 0.3s ease-in-out;
}

button {
    border: none;
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
    header {
        background-color: white !important;
    }

    .theme--dark {
        color: #333 !important;
    }

    .v-card {
        background-color: white !important;
        border-radius: 0px !important;
    }
}
</style>
