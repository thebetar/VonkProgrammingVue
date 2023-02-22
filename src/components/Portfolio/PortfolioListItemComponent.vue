<template>
  <v-card
    class="alert-card"
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
            :src="require(`@/assets/portfolio/${item.imageUrl}`)"
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
          <p>
            {{ item.description }}
          </p>
        </v-col>
        <v-col
          v-if="isRight"
          cols="4"
          class="d-flex align-center justify-center"
        >
          <v-img
            v-if="item.imageUrl"
            :src="require(`@/assets/portfolio/${item.imageUrl}`)"
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
.v-card__text {
  font-size: 18px;
}

.alert-card {
  border-radius: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .portfolio-pic {
    max-width: 100px;
    padding: 4px;
  }
  .alert-card {
    font-size: 12px;
  }
}
</style>
