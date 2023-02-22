<template>
  <main id="portfolio-page">
    <v-container
      fluid
      class="background"
    >
      <portfolio-list />
    </v-container>

    <footer-component />
  </main>
</template>

<script>
import PortfolioList from '../components/Portfolio/PortfolioListComponent.vue';
import FooterComponent from '../components/Footer/FooterComponent.vue';

export default {
  components: {
    PortfolioList,
    FooterComponent
  }
};
</script>

<style scoped>
.background {
  background-color: #222222;
  overflow-x: hidden;
  padding: 12rem 0;
}

@media only screen and (max-width: 600px) {
  .background {
    padding: 0.5rem 0;
  }
}
</style>
