<template>
	<v-container fluid class="background-sizeable">
		<about-component></about-component>
	</v-container>
</template>

<script>
import AboutComponent from '../components/About/AboutComponent.vue';

export default {
	components: {
		AboutComponent
	}
};
</script>

<style scoped>
.background-sizeable {
	background: rgb(61, 73, 89);
	background: linear-gradient(
		170deg,
		rgba(61, 73, 89, 1) 0%,
		rgba(118, 113, 106, 1) 58%,
		rgba(223, 188, 138, 1) 100%
	);
	background-attachment: fixed;
	min-height: 100vh;
	width: 100vw;
}

@media only screen and (max-width: 600px) {
	.background-sizeable {
		height: 100vh !important;
	}
}
</style>
