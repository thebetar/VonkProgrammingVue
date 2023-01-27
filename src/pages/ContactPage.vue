<template>
    <main id="contact-page">
        <v-container fluid class="background">
            <contact-component></contact-component>
        </v-container>
    </main>
</template>

<script>
import ContactComponent from '../components/Contact/ContactComponent.vue';

export default {
    components: {
        ContactComponent
    }
};
</script>

<style scoped>
.background {
    background-color: #222;
    background-attachment: fixed;
    background-size: cover;
}
</style>
