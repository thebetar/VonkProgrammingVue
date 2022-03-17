<template>
	<v-navigation-drawer v-model="drawer" fixed app dark>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="title">
					VonkProgramming
				</v-list-item-title>
				<v-list-item-subtitle>
					Maatwerk software
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list nav dense>
			<v-list-item v-for="item in items" :key="item.link" :to="item.link">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>
						{{ item.text }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<div class="side-drawer-lottie-container">
			<vue-lottie
				:options="{ animationData: searchAnimationData }"
				:width="260"
				:height="160"
			/>
		</div>
	</v-navigation-drawer>
</template>

<script>
import VueLottie from 'vue-lottie';
import searchAnimationData from '../../assets/lotties/sidedrawer-search.json';

export default {
	data() {
		return {
			drawer: this.drawerProp,
			searchAnimationData
		};
	},
	props: {
		items: Array,
		drawerProp: Boolean
	},
	watch: {
		drawerProp() {
			this.drawer = this.drawerProp;
		},
		drawer() {
			if (!this.drawer) {
				this.$emit('close', this.drawer);
			}
		}
	},
	components: {
		VueLottie
	}
};
</script>

<style scoped>
.v-navigation-drawer {
	z-index: 200;
}
.side-drawer-lottie-container {
	position: absolute;
	bottom: 20px;
	width: 100%;
	margin: auto;
}
</style>
