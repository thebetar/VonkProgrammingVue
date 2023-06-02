<template>
  <v-card
    outlined
    elevation="10"
    class="portfolio-list-item"
    :class="{
      'portfolio-list-item__large': large,
      'portfolio-list-item__mobile': $vuetify.display.mobile
    }"
    @click="$emit('click')"
  >
    <v-img
      v-if="item.imageUrl"
      :src="`/assets/portfolio/${item.imageUrl}`"
      class="portfolio-list-item-pic"
    />
    <v-card-text>
      <p>
        <b
          :style="{ color }"
        >
          {{ item.title }}
        </b>
      </p>
      <p>
        {{ itemDescription }}
      </p>
      <div class="portfolio-list-item-bottom">
        <v-chip
          variant="elevated"
          class="portfolio-list-item-bottom__chip"
          :color="color"
        >
          {{ label }}
        </v-chip>
        <v-btn
          v-if="$vuetify.display.mobile"
          variant="outlined"
          class="rounded-pill"
          size="small"
          :prepend-icon="mdiCursorDefault"
          @click.stop="goTo"
        >
          Ga naar website
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';

import { mdiCursorDefault } from '@mdi/js'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['click'],
  data() {
    return {
      imageUrl: '',
      mdiCursorDefault
    };
  },
  computed: {
    itemDescription() {
      if(this.large) {
        return this.item.description;
      }
      return !this.$vuetify.display.mobile
        ? `${this.item.description.substring(0, 70)}...`
        : this.item.description;
    }
  }
});
</script>

<style lang="scss" scoped>
.portfolio-list-item {
  max-width: 210px;
  height: fit-content;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  margin: 20px 50px;;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &-pic {
    transition: all 0.3s ease-in-out;
  }

  &-bottom {
    margin-top: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__chip {
      z-index: 100;
    }
  }



  &__mobile {
    max-width: 90vw;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    cursor: default;
    opacity: 1;

    & > .portfolio-list-item-pic {
      max-width: 120px;
      margin-left: 10px;
      margin-top: 10px;
      border-radius: 10px;
    }
  }
}
</style>
