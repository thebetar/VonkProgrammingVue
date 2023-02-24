<template>
  <v-app>
    <navigation-component
      :drawer-prop="drawer"
      @drawerClick="toggleSidedrawer"
    />
    <sidedrawer-component
      :drawer-prop="drawer"
      @close="hideSidedrawer"
    />

    <slot />
  </v-app>
</template>

<script>
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

export default {
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
};
</script>
