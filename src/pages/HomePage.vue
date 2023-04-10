<template>
  <App>
    <main id="home-page">
      <div class="home-page-container">
        <home-component />
      </div>

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
