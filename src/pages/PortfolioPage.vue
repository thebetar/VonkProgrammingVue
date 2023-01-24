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
</style>
