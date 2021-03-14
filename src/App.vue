<template>
  <v-app>
    <navigation-component :items="items" @drawerClick="showSidedrawer" />
	<sidedrawer-component :items="items" :drawerProp="drawer" @close="hideSidedrawer" />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <footer-component />
  </v-app>
</template>

<script>
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';

export default {
	name: 'App',
	components: {
		FooterComponent,
		NavigationComponent,
		SidedrawerComponent
	},
	data() {
		return {
			drawer: false,
			items: [
                {
                    link: '/home',
                    icon: 'mdi-home',
                    text: 'Home'
                },
                {
                    link: '/portfolio',
                    icon: 'mdi-folder-account',
                    text: 'Portfolio'
                },
                {
                    link: '/contact',
                    icon: 'mdi-cellphone',
                    text: 'Contact'
                },
                {
                    link: '/about',
                    icon: 'mdi-emoticon-cool',
                    text: 'Over mij'
                }
            ]
		}
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