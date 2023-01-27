<template>
    <main id="contact-page">
        <v-container fluid class="background">
            <contact-component></contact-component>
        </v-container>

        <footer-component />
    </main>
</template>

<script>
import ContactComponent from '../components/Contact/ContactComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

export default {
    components: {
        ContactComponent,
        FooterComponent
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
