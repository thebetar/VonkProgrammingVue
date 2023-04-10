<template>
  <v-card
    :class="{ 'pa-4': !$vuetify.display.mobile }"
    outlined
    elevation="10"
  >
    <v-card-text>
      <v-row :class="{ 'flex-column': $vuetify.display.mobile }">
        <v-col
          cols="12"
          md="2"
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
          md="10"
          :class="{ 'text-left': $vuetify.display.mobile }"
        >
          <p
            :class="{
              'text-center': $vuetify.display.mobile
            }"
          >
            <b
              :style="{ color }"
              :class="{
                title: !$vuetify.display.mobile
              }"
            >
              {{ item.title }}
            </b>
          </p>
          <p>
            {{ item.description }}
          </p>
          <v-chip
            variant="elevated"
            :class="{ 'mt-4': !$vuetify.display.mobile, 'mt-2': $vuetify.display.mobile }"
            :color="color"
          >
            {{ label }}
          </v-chip>
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

@media only screen and (width <= 600px) {
  .portfolio-pic {
    max-width: 100px;
    padding: 4px;
  }
}
</style>
