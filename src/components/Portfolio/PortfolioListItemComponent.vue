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
        <transition
          name="fade-delay"
          mode="out-in"
        >
          <v-btn
            v-if="large"
            variant="outlined"
            class="rounded-pill"
            :size="$vuetify.display.mobile ? 'small' : 'default'"
            @click.stop="goTo"
          >
            Ga naar website
          </v-btn>
        </transition>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';

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
    };
  },
  computed: {
    itemDescription() {
      if(this.large) {
        return this.item.description;
      }
      return this.item.description.length > 70
        ? `${this.item.description.substring(0, 70)}...`
        : this.item.description;
    }
  },
  methods: {
    goTo() {
      window.open(this.item.link, '_blank')
    },
  }
});
</script>

<style lang="scss" scoped>
.portfolio-list-item {
  max-width: 260px;
  height: fit-content;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  margin: 20px 50px;;
  opacity: 0.85;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &-pic {
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
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

  &__large {
    max-width: 350px;
    opacity: 1;
    margin-left: 5px;
    margin-right: 5px;

    & > .portfolio-list-item-pic {
      max-width: 120px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  &__mobile {
    margin-bottom: 60px;
    max-width: 90vw;
    cursor: default;
    opacity: 1;
  }
}
</style>
