<template>
  <App>
    <main id="portfolio-page">
      <div
        fluid
        class="portfolio-page-padding vonk-programming-background"
      >
        <portfolio-list />
      </div>

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
