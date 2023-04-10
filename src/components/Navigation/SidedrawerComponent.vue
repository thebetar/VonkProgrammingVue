<template>
  <v-navigation-drawer
    v-model="drawer"
    touchless
    class="d-sm-none"
    :width="500"
  >
    <v-list-item>
      <v-list-item-title class="title">
        VonkProgramming
      </v-list-item-title>
      <v-list-item-subtitle> Maatwerk software </v-list-item-subtitle>
    </v-list-item>

    <v-divider />

    <v-list
      nav
      dense
      role="list"
    >
      <v-list-item
        v-for="item in pageLinks"
        :key="item.link"
        class="pa-4"
        role="listitem"
        :href="item.link"
        :prepend-icon="item.icon"
        @click="$emit('close')"
      >
        <v-list-item-title class="title ml-2">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="item in socialLinks"
        :key="item.link"
        target="_blank"
        class="pa-4"
        role="listitem"
        :href="item.link"
        :prepend-icon="item.icon"
        @click="$emit('close')"
      >
        <v-list-item-title class="title ml-2">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {
  mdiBackspace,
  mdiHome,
  mdiFolder,
  mdiPhone,
  mdiLinkedin,
  mdiWhatsapp,
  mdiGithub
} from '@mdi/js';

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    drawerProp: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  data() {
    return {
      drawer: this.drawerProp,
      mdiBackspace,
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
  watch: {
    drawerProp() {
      this.drawer = this.drawerProp;
    },
    drawer() {
      if (!this.drawer) {
        this.$emit('close');
      }
    }
  }
};
</script>
