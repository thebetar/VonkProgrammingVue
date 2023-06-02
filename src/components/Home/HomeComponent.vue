<template>
  <div>
    <div class="home-component-start-container vonk-programming-background">
      <div>
        <programming-svg class="home-component-start-svg" />
      </div>
      <div class="home-component-start-text">
        <h1 class="home-component-start-text-header">
          Voor elk probleem een oplossing 💪
        </h1>
        <div class="home-component-start-text-content">
          Heeft u een probleem waar
          <span class="font-weight-bold"> maatwerk software </span>
          voor nodig is of heeft u behoefte aan een gespecialiseerde
          <span class="font-weight-bold">web applicatie</span>?
        </div>
        <v-btn
          class="home-component-start-button"
          variant="flat"
          size="large"
          color="primary"
          href="/contact"
          aria-label="Neem contact op"
          :prepend-icon="mdiPhone"
        >
          Neem contact op
        </v-btn>
      </div>
    </div>
    <div class="home-component-info-container vonk-programming-background">
      <div class="home-component-info-card">
        <h2 class="text-h3">
          Wie ben ik?
        </h2>
        <p class="mt-2">
          Lars Vonk, Gedreven Software Developer | Voorvechter van Kwaliteitsborging met Uitgebreide Ervaring
          in CI/CD en Testing
        </p>
        <p class="mt-2">
          Ben je op zoek naar een gedreven Software Developer met een sterke focus op kwaliteitsborging en
          CI/CD-praktijken? Zoek niet verder! Met vele jaren ervaring ben ik gepassioneerd over het leveren
          van hoogwaardige code en het implementeren van robuuste teststrategieën.
        </p>
      </div>
    </div>
    <div class="home-component-about-container">
      <div class="home-component-about-text">
        <p>
          <b>Development</b><br>
          Als een innovatieve developer ben ik bedreven in het gebruik van moderne technologieën om
          baanbrekende applicaties te bouwen. Met mijn expertise in Vue.js, React.js, Nuxt.js, Electron en
          Ionic kan ik diverse projecten aanpakken.
        </p>
        <p>
          <b>Code kwaliteit</b><br>
          Als een toegewijde developer hecht ik grote waarde aan codekwaliteit en zorg ik ervoor dat mijn
          projecten voldoen aan de hoogste normen. Ik maak gebruik van krachtige tools zoals Eslint,
          Stylelint, Jest en Cypress om dit te bereiken.
        </p>
        <p>
          <b>Pipelines</b><br>
          Als een efficiënte developer begrijp ik het belang van gestroomlijnde deployment-processen om snelle
          en betrouwbare levering van software te garanderen. Daarom maak ik gebruik van krachtige
          pipeline-tools zoals GitHub Actions, Azure DevOps Pipelines en Jenkins om dit te realiseren.
        </p>
        <p>
          <b>Deployment</b><br>
          Als een ervaren developer maak ik optimaal gebruik van Docker en Linux-gebaseerde systemen om mijn
          eigen deployment-processen te stroomlijnen. Door Docker-containerisatie en Linux te combineren, zorg
          ik voor een efficiënte en consistente implementatie van mijn applicaties.
        </p>
        <p>
          <b>Contact</b><br>
          Als je op zoek bent naar een gedreven Software Developer met uitgebreide ervaring in
          kwaliteitsborging en CI/CD, laten we dan verbinden! <br>
          <a href="/contact">Klik hier</a> om naar de contact pagina te gaan.
        </p>
      </div>
      <div class="home-component-about-image">
        <v-img
          src="/assets/home/me.jpg"
          width="260"
          class="rounded-xl"
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
			gap: 40px;
		}

		&-svg {
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
					animation-delay: 0.2s !important;
				}

				&-blue-line {
					@extend %monitor-line;
					animation-delay: 0.3s !important;
				}

				&-yellow-line {
					@extend %monitor-line;
					animation-delay: 0.4s !important;
				}

				&-red-line {
					@extend %monitor-line;
					animation-delay: 0.5s !important;
				}
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
			}

			&-content {
				margin-top: 12px;
				text-align: center;
			}
		}

		&-button {
			opacity: 0;
			margin-top: 12px;
			animation-name: fade-in;
			animation-duration: 0.4s;
			animation-timing-function: ease-in-out;
			animation-fill-mode: forwards;
			animation-delay: 0.55s;
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
			box-shadow: 10px -10px 20px 0 rgba(0, 0, 0, 0.3);
			text-align: center;
			background: white;
			color: #333;

			& > p {
				font-size: 18px;
				line-height: 24px;
			}

			@media screen and (width <= 1200px) {
				max-width: 600px;
			}

			@media screen and (width <= 720px) {
				max-width: 100%;
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

			@media screen and (width <= 600px) {
				padding-left: 40px;
				padding-right: 40px;
				padding-bottom: 20px;
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

@keyframes fade-in {
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
</style>
