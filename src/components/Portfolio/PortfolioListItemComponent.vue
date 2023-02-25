<template>
  <v-card
    :class="{ 'pa-4': !isMobile }"
    outlined
    elevation="10"
  >
    <v-card-text>
      <v-row :class="{ 'flex-column': isMobile }">
        <v-col
          v-if="!isRight"
          cols="12"
          md="4"
          class="d-flex align-center justify-center"
        >
          <v-img
            v-if="item.imageUrl"
            :src="`/assets/portfolio/${item.imageUrl}`"
            class="portfolio-pic"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          :class="{ 'text-left': isMobile }"
        >
          <p
            :class="{
              'text-center': isMobile
            }"
          >
            <b
              :style="{ color }"
              :class="{
                title: !isMobile
              }"
            >
              {{ item.title }}
            </b>
          </p>
          <p>{{ item.description }}</p>
          <v-chip
            :color="color"
            variant="elevated"
            class="mt-2"
          >
            {{ label }}
          </v-chip>
        </v-col>
        <v-col
          v-if="isRight"
          cols="4"
          class="d-flex align-center justify-center"
        >
          <v-img
            v-if="item.imageUrl"
            :src="`/assets/portfolio/${item.imageUrl}`"
            class="portfolio-pic"
          />
        </v-col>
      </v-row>
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
    index: {
      type: Number,
      required: true,
      default: 0
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
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
    }
  },
  data() {
    return {
      imageUrl: ''
    };
  },
  computed: {
    isRight() {
      return this.index % 2 === 0 && !this.isMobile;
    }
  }
});
</script>

<style scoped>
.portfolio-pic {
  max-width: 140px;
  height: auto;
  border-radius: 8px;
  border: 2px solid black;
  padding: 8px;
  background: white;
}

@media only screen and (max-width: 600px) {
  .portfolio-pic {
    max-width: 100px;
    padding: 4px;
  }
}
</style>
