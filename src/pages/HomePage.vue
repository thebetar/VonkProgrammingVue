<template>
  <main id="home-page">
    <v-container fluid>
      <home-component />
    </v-container>

    <footer-component />
  </main>
</template>

<script>
import HomeComponent from '../components/Home/HomeComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

export default {
  components: {
    HomeComponent,
    FooterComponent
  }
};
</script>
