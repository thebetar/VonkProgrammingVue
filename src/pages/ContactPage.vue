<template>
  <App>
    <main id="contact-page">
      <v-container
        fluid
        class="background"
      >
        <contact-component />
      </v-container>
    </main>
  </App>
</template>

<script>
import { defineComponent } from 'vue';

import App from '../App.vue';
import ContactComponent from '../components/Contact/ContactComponent.vue';

export default defineComponent({
  components: {
    App,
    ContactComponent
  }
});
</script>

<style scoped>
.background {
  background-color: #222;
  background-attachment: fixed;
  background-size: cover;
}
</style>
