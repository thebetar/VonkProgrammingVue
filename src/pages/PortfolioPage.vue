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
	background-color: #333;
	overflow-y: hidden;
	padding: 12rem 0;
}

@media only screen and (max-width: 600px) {
	.background {
		padding: 0.5rem 0;
	}
}
</style>
