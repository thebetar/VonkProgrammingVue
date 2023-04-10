<template>
  <div>
    <v-app-bar
      class="d-flex justify-space-between justify-md-center w-full"
      fixed
      flat
      :class="{ scrolled: isScroll }"
    >
      <v-app-bar-nav-icon
        aria-label="Open menu"
        class="d-flex d-sm-none"
        :icon="drawerProp ? mdiArrowLeft : mdiMenu"
        @click="emitDrawer"
      />
      <v-app-bar-title>
        <a
          href="/home"
          aria-label="Home"
        >
          <v-img
            :src="'/assets/logo-min.webp'"
            max-height="36"
            max-width="90"
            contain
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
            'scrolled-text': isScroll,
            'noscroll-text': !isScroll
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
            'scrolled-text': isScroll,
            'noscroll-text': !isScroll
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
import {
  mdiMenu,
  mdiArrowLeft,
  mdiHome,
  mdiFolder,
  mdiPhone,
  mdiLinkedin,
  mdiWhatsapp,
  mdiGithub
} from '@mdi/js';

export default {
  name: 'NavigationComponent',
  props: {
    drawerProp: {
      type: Boolean,
      default: false
    }
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
          text: 'Home'
        },
        {
          link: '/portfolio',
          icon: mdiFolder,
          text: 'Portfolio'
        },
        {
          link: '/contact',
          icon: mdiPhone,
          text: 'Contact'
        }
      ],
      socialLinks: [
        {
          text: 'Linkedin',
          link: 'https://www.linkedin.com/in/lars-v-82455612a/',
          icon: mdiLinkedin
        },
        {
          text: 'WhatsApp',
          link: 'https://wa.me/0639119996',
          icon: mdiWhatsapp
        },
        {
          text: 'GitHub',
          link: 'https://github.com/thebetar',
          icon: mdiGithub
        }
      ]
    };
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

.noscroll-text {
  color: white !important;
}

.noscroll-text .v-icon {
  color: white !important;
}

@media only screen and (max-width: 600px) {
  header {
    background-color: white !important;
  }
}
</style>
