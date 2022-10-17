<template>
	<v-container fluid class="background">
		<portfolio-list />
	</v-container>
</template>

<script>
import PortfolioList from '../components/Portfolio/PortfolioListComponent.vue';

export default {
	components: {
		PortfolioList
	}
};
</script>

<style scoped>
.background {
	width: 100vw;
	background-color: #333;
	background: linear-gradient(90deg, #222, #555, #222);
	background-size: 100vw 100vh;
	background-attachment: fixed;
	overflow-y: hidden;
	padding: 12rem 0;
}
</style>
