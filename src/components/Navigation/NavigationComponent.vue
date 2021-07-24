<template>
	<div>
		<v-app-bar
			class="d-flex justify-start justify-md-center"
			fixed
			flat
			dark
			:class="{ scrolled: isScroll }"
		>
			<v-app-bar-nav-icon
				@click="emitDrawer"
				class="d-flex d-sm-none"
			></v-app-bar-nav-icon>
			<v-toolbar-title>
				<router-link to="/home">
					<v-img
						src="../../assets/logo.png"
						max-height="36"
						contain
					></v-img>
				</router-link>
			</v-toolbar-title>
			<v-toolbar-items dark class="d-none d-sm-flex">
				<v-btn
					text
					v-for="item in items"
					:to="item.link"
					:key="item.link"
					:class="{ 'scrolled-text': isScroll }"
				>
					<v-icon style="margin-right: 4px;">{{ item.icon }}</v-icon>
					{{ item.text }}
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" fixed>
			<v-list nav dense>
				<v-list-item-group>
					<v-list-item v-for="item in items" :key="item.link">
						<v-list-item-title>{{ item }}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			isScroll: this.handleScroll()
		};
	},
	props: {
		items: Array
	},
	created() {
		// Check if not mobile
		if (window.screen.width >= 600) {
			window.addEventListener('scroll', () => {
				this.isScroll = this.handleScroll();
			});
		}
	},
	methods: {
		handleScroll() {
			return window.scrollY > 50;
		},
		emitDrawer() {
			this.$emit('drawerClick');
		}
	}
};
</script>

<style scoped>
header {
	background-color: transparent !important;
	transition: all 0.3s ease-in-out;
}

.v-card {
	z-index: 5;
	background-color: transparent !important;
	transition: all 0.3s ease-in-out;
}

button {
	border: none;
}

.scrolled {
	background-color: #fff !important;
	box-shadow: 0px 0px 4px #aaa !important;
}

.scrolled-text {
	color: black !important;
}

.scrolled-text .v-icon {
	color: black !important;
}

@media only screen and (max-width: 600px) {
	header {
		background-color: white !important;
	}

	.theme--dark {
		color: #333 !important;
	}

	.v-card {
		background-color: white !important;
		border-radius: 0px !important;
	}
}
</style>
