<template>
  <div>
    <div class="home-component-start-container vonk-programming-background">
      <div>
        <programming-svg class="home-component-start-svg" />
      </div>
      <div class="home-component-start-text">
        <h1 class="home-component-start-text-header">
          For every problem a solution 💪
        </h1>
        <div class="home-component-start-text-content">
          Do you require a
          <span class="font-weight-bold">passionate developer</span>
          who 
          <span class="font-weight-bold">loves</span> what he does?
        </div>
        <v-btn
          class="home-component-start-button"
          variant="flat"
          size="large"
          color="primary"
          href="/contact"
          aria-label="Contact me"
          :prepend-icon="mdiPhone"
        >
          Contact me
        </v-btn>
      </div>
    </div>
    <div class="home-component-info-container vonk-programming-background">
      <div class="home-component-info-card">
        <h2 class="text-h3">
          Who am I?
        </h2>
        <p class="mt-2">
          Lars Vonk, Driven Software Developer | Advocate of Quality Assurance with Extensive Experience
          in CI/CD and Testing 
        </p>
        <p class="mt-2">
          Are you looking for a driven Software Developer with a strong focus on quality assurance and
          CI/CD practices? Look no further! With many years of experience, I am passionate about delivering
          high-quality code and implementing robust testing strategies.
        </p>
      </div>
    </div>
    <div class="home-component-about-container">
      <div class="home-component-about-text">
        <p>
          <b>Development</b><br>
          As a passionate and innovative programmer, I utilize the power of modern technologies and frameworks to build groundbreaking applications. With my expertise in Vue.js, React.js, Nuxt.js, Electron, and Ionic, I have the ability to tackle diverse projects and create innovative solutions.
        </p>
        <p>
          <b>Code quality</b><br>
          As a dedicated developer, I value code quality and ensure that my projects meet the highest standards. I utilize powerful tools such as Eslint, Stylelint, Jest, and Cypress to achieve this.
        </p>
        <p>
          <b>Pipelines</b><br>
          As an efficient developer, I understand the importance of streamlined deployment processes to ensure fast and reliable software delivery. Therefore, I make use of powerful pipeline tools such as GitHub Actions, Azure DevOps Pipelines, and Jenkins to accomplish this.
        </p>
        <p>
          <b>Deployment</b><br>
          As an experienced developer, I leverage Docker and Linux-based systems to streamline my own deployment processes. By combining Docker containerization and Linux, I ensure efficient and consistent deployment of my applications.
        </p>
        <p>
          <b>Contact</b><br>
          If you are looking for a driven Software Developer with extensive experience in quality assurance and CI/CD, let's connect! <br>
          <a href="/contact">Click here to go to the contact page</a>.
        </p>
      </div>
      <div class="home-component-about-image">
        <v-img
          src="/assets/home/me.jpg"
          width="260"
          class="rounded-xl"
          alt="Lars Vonk"
        >
          <template #placeholder>
            <v-sheet>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                />
              </v-row>
            </v-sheet>
          </template>
        </v-img>
      </div>
    </div>
    <div
      class="home-component-wave-row"
      style="margin-bottom: -2px"
    >
      <wavey-divider-bottom />
    </div>
    <tech-row />
    <div
      class="home-component-wave-row"
      style="margin-top: -2px"
    >
      <wavey-divider-top />
    </div>
    <misc-row />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { mdiPhone } from '@mdi/js';

import ProgrammingSvg from '../../assets/programming.svg?component';

import WaveyDividerTop from '../shared/WaveyDividerTop.vue';
import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';
import TechRow from './TechRow.vue';
import MiscRow from './MiscRow.vue';

export default defineComponent({
	components: {
		WaveyDividerTop,
		WaveyDividerBottom,
		TechRow,
		MiscRow,
		ProgrammingSvg,
	},
	data() {
		return {
			mdiPhone,
		};
	},
});
</script>

<style lang="scss">
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.home-component {
	// eslint-disable-next-line vue-scoped-css/no-unused-selector
	&-start {
		&-container {
			min-height: calc(100vh + 10px);
			max-height: 1600px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0px;
		}

		&-svg {
			height: fit-content;
			& > .monitor {
				&-orange-line {
					@extend %monitor-line;
				}

				&-purple-line {
					@extend %monitor-line;

					animation-delay: 0.1s !important;
				}

				&-green-line {
					@extend %monitor-line;

					animation-delay: 0.15s !important;
				}

				&-blue-line {
					@extend %monitor-line;

					animation-delay: 0.2s !important;
				}

				&-yellow-line {
					@extend %monitor-line;
          
					animation-delay: 0.25s !important;
				}

				&-red-line {
					@extend %monitor-line;

					animation-delay: 0.3s !important;
				}
			}

			@media screen and (width <= 960px) {
				max-width: 240px;
			}

			@media screen and (width <= 600px) {
				max-width: 180px;
			}
		}
    
		&-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			max-width: 500px;

			&-header {
				text-align: center;
				font-size: 24px;
				line-height: 30px;
				font-weight: 700;
        opacity: 0;
        animation-name: fade-in-right;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
			}

			&-content {
				margin-top: 12px;
				text-align: center;

        animation-name: fade-in-right;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: backwards;
        animation-delay: 0.4s;
			}

      @media screen and (width <= 600px) {
        margin-left: 14px;
        margin-right: 14px;
      }
		}

		&-button {
			opacity: 0;
			margin-top: 18px;
			animation-name: fade-in-left;
			animation-duration: 0.4s;
			animation-timing-function: ease-in-out;
			animation-fill-mode: forwards;
			animation-delay: 0.8s;
		}
	}

	// eslint-disable-next-line vue-scoped-css/no-unused-selector
	&-info {
		&-container {
			display: flex;
			justify-content: center;
		}

		&-card {
			position: relative;
			max-width: 720px;
			padding-top: 30px;
			padding-left: 40px;
			padding-right: 40px;
			padding-bottom: 20px;
			border-radius: 30px 30px 0 0;
			z-index: 10;
			box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.3);
			text-align: center;
			background: white;
			color: #333;

			& > p {
				font-size: 14px;
        line-height: 20px;
        margin-left: 30px;
        margin-right: 30px;
			}

			@media screen and (width <= 1200px) {
				max-width: 600px;
			}

			@media screen and (width <= 720px) {
				max-width: 100%;
        padding-bottom: 40px;

        & > p {
          margin-left: 10px;
          margin-right: 10px;
        }

        border-bottom: 1px solid rgba(0,0,0,0.1);
			}
		}
	}

	// eslint-disable-next-line vue-scoped-css/no-unused-selector
	&-about {
		&-container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 160px;
			padding-left: 100px;
			padding-right: 100px;
			padding-bottom: 40px;
			gap: 60px;

			@media screen and (width <= 960px) {
        padding-top: 100px;
				padding-left: 40px;
				padding-right: 40px;
				padding-bottom: 40px;
				flex-wrap: wrap;
			}
		}

		&-text {
			max-width: 800px;

			& > p {
				margin-bottom: 12px;
				font-size: 14px;
			}
		}

		&-image {
			@media screen and (width <= 1200px) {
				display: none;
			}
		}
	}

	// eslint-disable-next-line vue-scoped-css/no-unused-selector
	&-connect {
		&-container {
			padding-top: 40px;
			padding-left: 40px;
			padding-right: 40px;
			padding-bottom: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&-header {
			margin-top: 10px;
			font-size: 24px;
			line-height: 30px;
		}

		&-text {
			max-width: 480px;
			margin-top: 10px;
			font-size: 14px;
			text-align: center;
		}
	}

	&-wave-row {
		position: relative;
		width: 100vw;
		height: calc(100vw / 3.5);

		@media only screen and (width <= 600px) {
			display: none;
		}
	}
}

%monitor-line {
	opacity: 0;
	animation-name: size-line;
	animation-duration: 0.2s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
}

@keyframes size-line {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fade-in-left {
	0% {
		opacity: 0;
		transform: translateX(-20px);
	}

	90% {
		transform: translateX(2px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  90% {
    transform: translateX(-2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
