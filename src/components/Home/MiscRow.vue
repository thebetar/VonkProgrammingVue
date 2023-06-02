<template>
  <div class="misc-row-container">
    <div class="misc-row-card-row">
      <div class="misc-row-card">
        <div>
          <v-img
            src="/assets/svg/portfolio.svg"
            width="80"
            height="80"
            class="mx-auto"
            alt="Portfolio"
          />
        </div>
        <div>
          <h4 class="text-h4">
            Portfolio
          </h4>
          <p class="text-body-2">
            Aside from a nice story about how everything works, I have also built up a portfolio with a number of
            well-known and less well-known companies and projects.
          </p>
          <div class="misc-row-card-actions">
            <v-btn
              href="/portfolio"
              color="secondary"
              arial-label="Portfolio"
              variant="outlined"
              :prepend-icon="mdiFolder"
            >
              Portfolio
            </v-btn>
            <v-btn
              href="https://github.com/thebetar"
              target="_blank"
              color="primary"
              aria-label="Github"
              variant="outlined"
              :prepend-icon="mdiGithub"
            >
              Github
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mdiFolder, mdiGithub } from '@mdi/js';

export default defineComponent({
	data() {
		return {
			mdiGithub,
			mdiFolder,
		};
	},
	methods: {
		goTo(url) {
			window.open(url, '_blank');
		},
	},
});
</script>

<style lang="scss" scoped>
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.misc-row {
	&-container {
		padding-top: 180px;
		padding-bottom: 400px;
		display: flex;
		justify-content: center;
    align-items: center;
	}
  
	&-card {
    display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: center;
		text-align: center;
    width: 100%;
		max-width: 600px;
    height: 600px;

    @media screen and (width >= 600px) {
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.3);
      box-shadow: 0 0 100px rgba(0,0,0,0.1);
  
      transition: box-shadow .8s ease-in-out;
  
      &:hover {
        box-shadow: 0 0 100px rgba(0,0,0,0.3);
      }
    }
    
		&-row {
      width: 100%;
			max-width: 1000px;
			display: flex;
			justify-content: center;
			gap: 40px;

      @media screen and (width <= 960px) {
        max-width: 90vw;
      }
		}

    & > div {
      width: 300px;
    }

		&-actions {
			margin-top: 10px;
			display: flex;
			justify-content: center;
			gap: 10px;
		}
	}
}
</style>
