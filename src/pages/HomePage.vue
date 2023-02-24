<template>
  <App>
    <main id="home-page">
      <v-container fluid>
        <home-component />
      </v-container>

      <footer-component />
    </main>
  </App>
</template>

<script>
import { defineComponent } from 'vue';

import App from '../App.vue';
import HomeComponent from '../components/Home/HomeComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

export default defineComponent({
  components: {
    App,
    HomeComponent,
    FooterComponent
  }
});
</script>
