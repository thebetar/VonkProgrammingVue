<template>
  <div
    class="portfolio-preview-overlay"
    @click="$emit('dismiss')"
  >
    <v-card
      class="portfolio-preview-card"
      @click.stop
    >
      <v-img
        v-if="job.imageUrl"
        :src="`/assets/portfolio/${job.imageUrl}`"
        class="portfolio-preview-card-img"
        :alt="job.title"
      />
      <v-card-text>
        <p>
          <b :style="{ color }">
            {{ job.title }}
          </b>
        </p>
        <p>
          {{ job.description }}
        </p>
        <div class="portfolio-preview-card-bottom">
          <v-chip
            variant="elevated"
            class="portfolio-preview-card-bottom__chip"
            :color="color"
          >
            {{ label }}
          </v-chip>
          <v-btn
            variant="outlined"
            class="rounded-pill"
            :size="$vuetify.display.mobile ? 'small' : 'default'"
            :prepend-icon="mdiCursorDefault"
            @click.stop="goTo"
          >
            Ga naar website
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mdiCursorDefault } from '@mdi/js';

export default defineComponent({
	name: 'PortfolioPreview',
	props: {
		job: {
			type: Object,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
	},
	emits: ['dismiss'],
	data() {
		return {
			mdiCursorDefault,
		};
	},
	methods: {
		goTo() {
			window.open(this.job.link, '_blank');
		},
	},
});
</script>

<style lang="scss">
.portfolio-preview {
	&-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&-card {
		position: relative;
		width: 560px;
		min-height: 200px;
		padding-bottom: 38px !important;
		background-color: #eee;
		border-radius: 20px;
		animation: grow 0.3s forwards;

		&-bottom {
			position: absolute;
			bottom: 12px;
			width: calc(100% - 32px);
			margin-top: 8px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			&__chip {
				z-index: 100;
			}
		}

		& > .portfolio-preview-card-img {
			max-width: 120px;
			margin-left: 10px;
			margin-top: 10px;
			border-radius: 10px;
		}
	}
}

@keyframes grow {
	0% {
		transform: scale(0);
	}

	95% {
		transform: scale(1.05);
	}

	100% {
		transform: scale(1);
	}
}
</style>
