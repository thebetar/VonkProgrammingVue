<template>
  <div class="navigation-component-wrapper">
    <v-app-bar
      class="d-flex justify-space-between justify-md-center w-full"
      fixed
      flat
      :class="{ 'navigation-component-navbar__scrolled': isScroll }"
    >
      <v-app-bar-nav-icon
        aria-label="Open menu"
        class="d-flex d-sm-none"
        :icon="drawerProp ? mdiArrowLeft : mdiMenu"
        @click="emitDrawer"
      />
      <v-app-bar-title>
        <a
          href="/"
          class="navigation-component-navbar-logo"
          aria-label="Home"
        >
          <v-img
            :src="'/assets/logo-min.webp'"
            max-height="36"
            max-width="90"
            contain
            alt="Logo"
          />
        </a>
      </v-app-bar-title>
      <v-toolbar-items
        dark
        class="d-none d-sm-block mr-3"
      >
        <v-btn
          v-for="item in pageLinks"
          :key="item.link"
          variant="text"
          :href="item.link"
          :class="{
            'navigation-component-navbar__scrolled-text': isScroll,
            'navigation-component-navbar__noscroll-text': !isScroll,
          }"
          :aria-label="item.text"
          :prepend-icon="item.icon"
        >
          {{ item.text }}
        </v-btn>
        <v-btn
          v-for="item in socialLinks"
          :key="item.link"
          variant="text"
          :href="item.link"
          :class="{
            'navigation-component-navbar__scrolled-text': isScroll,
            'navigation-component-navbar__noscroll-text': !isScroll,
          }"
          target="_blank"
          :aria-label="item.text"
          icon
        >
          <v-icon :icon="item.icon" />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import {
	mdiMenu,
	mdiArrowLeft,
	mdiHome,
	mdiFolder,
	mdiPhone,
	mdiLinkedin,
	mdiWhatsapp,
	mdiGithub,
	mdiStackOverflow,
} from '@mdi/js';

export default defineComponent({
	name: 'NavigationComponent',
	props: {
		drawerProp: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['drawerClick'],
	data() {
		return {
			isScroll: this.handleScroll(),
			mdiMenu,
			mdiArrowLeft,
			pageLinks: [
				{
					link: '/',
					icon: mdiHome,
					text: 'Home',
				},
				{
					link: '/portfolio',
					icon: mdiFolder,
					text: 'Portfolio',
				},
				{
					link: '/contact',
					icon: mdiPhone,
					text: 'Contact',
				},
			],
			socialLinks: [
				{
					text: 'Linkedin',
					link: 'https://www.linkedin.com/in/lars-v-82455612a/',
					icon: mdiLinkedin,
				},
				{
					text: 'WhatsApp',
					link: 'https://wa.me/0639119996',
					icon: mdiWhatsapp,
				},
				{
					text: 'GitHub',
					link: 'https://github.com/thebetar',
					icon: mdiGithub,
				},
				{
					text: 'StackOverflow',
					link: 'https://stackoverflow.com/users/10104786/lars-vonk',
					icon: mdiStackOverflow,
				},
			],
		};
	},
	created() {
		// Check if not mobile
		if (window.screen.width >= 960) {
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
		},
	},
});
</script>

<style lang="scss">
.navigation-component-wrapper {
	& > header.v-toolbar {
		background: transparent;
		transition: 0.2s ease-in-out;

		@media only screen and (width <= 600px) {
			background: #fff;
		}
	}
}

.navigation-component-navbar {
	&-logo {
		display: inline-block;
		width: fit-content;
	}

	&__scrolled {
		background-color: #fff !important;
		box-shadow: 0 0 4px #aaa !important;

		&-text {
			color: black !important;

			& > .v-icon {
				color: black !important;
			}
		}
	}

	&__noscroll-text {
		color: white !important;

		& > .v-icon {
			color: white !important;
		}
	}
}
</style>
