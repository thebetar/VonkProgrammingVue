<template>
  <v-app>
    <navigation-component
      :drawer-prop="drawer"
      @drawer-click="toggleSidedrawer"
    />
    <sidedrawer-component
      :drawer-prop="drawer"
      @close="hideSidedrawer"
    />

    <slot />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationComponent,
    SidedrawerComponent
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleSidedrawer() {
      this.drawer = !this.drawer;
    },
    hideSidedrawer() {
      this.drawer = false;
    }
  }
});
</script>
