<template>
    <home-component></home-component>
</template>

<script>
import HomeComponent from '../components/Home/HomeComponent.vue';
import { startTextAnimation, stopTextAnimation } from '../scripts/script';

export default {
    components: {
        HomeComponent
    },
    mounted() {
        startTextAnimation();
    },
    destroyed() {
        stopTextAnimation();
    }
}
</script>