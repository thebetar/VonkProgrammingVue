<template>
  <main id="home-page">
    <v-container fluid>
      <home-component />
    </v-container>

    <footer-component />
  </main>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

import HomeComponent from '../components/Home/HomeComponent.vue';

export default defineComponent({
  components: {
    HomeComponent,
    FooterComponent: defineAsyncComponent(() => import('../components/Footer/FooterComponent.vue'))
  }
})
</script>
