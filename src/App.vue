<template>
	<v-app>
		<navigation-component :items="items" @drawerClick="showSidedrawer" />
		<sidedrawer-component
			:items="items"
			:drawerProp="drawer"
			@close="hideSidedrawer"
		/>

		<v-main id="main">
			<v-container fluid id="container">
				<transition name="fade">
					<router-view />
				</transition>
			</v-container>
		</v-main>
		<footer-component />
	</v-app>
</template>

<script>
import FooterComponent from './components/Footer/FooterComponent.vue';
import NavigationComponent from './components/Navigation/NavigationComponent.vue';
import SidedrawerComponent from './components/Navigation/SidedrawerComponent.vue';

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
					icon: 'mdi-folder',
					text: 'Portfolio'
				},
				{
					link: '/contact',
					icon: 'mdi-phone',
					text: 'Contact'
				},
				{
					link: '/about',
					icon: 'mdi-account',
					text: 'Over mij'
				}
			]
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
