<template>
  <v-app>
    <navigation-component @drawerClick="showSidedrawer" />
    <sidedrawer-component
      :drawer-prop="drawer"
      @close="hideSidedrawer"
    />

    <transition name="fade">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router';

import NavigationComponent from './components/Navigation/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    NavigationComponent,
    SidedrawerComponent: defineAsyncComponent(() =>
      import('./components/Navigation/SidedrawerComponent.vue')
    )
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    showSidedrawer() {
      this.drawer = true;
    },
    hideSidedrawer() {
      this.drawer = false;
    }
  }
};
</script>
