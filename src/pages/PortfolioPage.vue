<template>
  <App>
    <main id="portfolio-page">
      <v-container
        fluid
        class="portfolio-page-padding vonk-programming-background"
      >
        <portfolio-list />
      </v-container>

      <footer-component />
    </main>
  </App>
</template>

<script>
import { defineComponent } from 'vue';

import App from '../App.vue';
import PortfolioList from '../components/Portfolio/PortfolioListComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

export default defineComponent({
  components: {
    App,
    PortfolioList,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>
.portfolio-page-padding {
  padding: 12rem 0;
  
  @media only screen and (width <= 600px) {
    padding: 0.5rem 0;
  }
}
</style>
