<template>
	<div>
		<v-row class="home-page-background">
			<v-container>
				<v-row
					class="home-page-divider-90"
					justify="center"
					align="center"
				>
					<v-col
						cols="12"
						md="6"
						:style="
							isDesktop
								? { margin: '20px 0' }
								: { paddingBottom: '0px' }
						"
					>
						<vue-lottie
							:options="{
								animationData: introAnimationData
							}"
							:width="isDesktop ? 400 : '100%'"
							style="transform: rotateY(180deg)"
						></vue-lottie>
					</v-col>
					<v-col
						offset="0"
						cols="12"
						md="6"
						class="d-flex flex-column"
						:style="isDesktop ? {} : { paddingTop: '0px' }"
					>
						<p class="text-h4 white--text">
							Wij houden van uitdaging 💪
						</p>
						<div class="text-body-1 white--text">
							<p>
								Heeft u een goed idee waar
								<span class="red--text">maatwerk software</span>
								voor nodig is, of heeft u behoefte aan een
								gespecialiseerde
								<span class="red--text">website</span>?
							</p>
							<v-btn
								class="ml-1"
								large
								color="primary"
								@click="$router.push('/contact')"
							>
								📞 Neem contact op
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-row>
		<v-row justify="center" align="center" class="pt-12">
			<v-col cols="12" sm="12" md="6" align="center">
				<div class=" home-page-header">
					<h2 class="display-2">
						🧑‍💼 Hoe gaan wij te werk?
					</h2>
					<p class="body-1 mt-4">
						VonkProgramming is een Web development bedrijf dat zich
						bezighoudt met maatwerk software solutions. Voor iedere
						klant maken wij op maat gemaakte software of websites,
						afgestemd op uw behoeften.
					</p>
				</div>
			</v-col>
		</v-row>
		<v-container>
			<v-row justify="center" class="mt-6">
				<v-col cols="12" md="12" align="center" class="mt-4">
					<v-container>
						<h3 class="display-1">Portfolio</h3>
						<p class="body-1">
							Naast een mooi verhaal over hoe alles te werk gaat
							heb ik ondertussen ook al een portfolio opgebouwd
							met een aantal bekenden en wat minder bekende
							bedrijven.
						</p>
						<v-btn to="/portfolio" color="primary" large>
							Klik hier om deze te zien
						</v-btn>
					</v-container>
				</v-col>
				<v-col cols="12" sm="12" md="6" align="center">
					<v-hover v-slot="{ hover }">
						<v-card
							:elevation="hover ? 12 : 2"
							class="pa-4 d-flex flex-column align-center card-size"
							:class="{ 'card-hover': hover }"
						>
							<vue-lottie
								:options="{
									animationData: processAnimationData
								}"
								:width="isDesktop ? 360 : 180"
								:height="isDesktop ? 300 : 160"
							/>
							<v-card-title class="title text-center"
								>Procesbeschrijving</v-card-title
							>
							<v-list>
								<v-list-item>
									<v-list-item-icon>
										<b>1.</b>
									</v-list-item-icon>
									<v-list-item-content>
										<b>Kennismaking: </b>
										Voorafgaand vindt er een
										kennsmakingsgesprek plaats waarin de
										context van uw wens wordt besproken.
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-icon>
										<b>2.</b>
									</v-list-item-icon>
									<v-list-item-content>
										<b>Ontwerp: </b>
										Op basis van de besproken details wordt
										er een product ontwerp gemaakt.
										Gedurende dit proces is het belangrijk
										dat de klant tevreden is met het ontwerp
										en dat de software voldoet aan de
										gestelde eisen.
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-icon>
										<b>3.</b>
									</v-list-item-icon>
									<v-list-item-content>
										<b>Realisatie: </b>
										Het eindproduct wordt gerealiseerd met
										meerdere feedback rondes waarbij wordt
										gekeken of het product de juiste kant op
										gaat.
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-icon>
										<b>4.</b>
									</v-list-item-icon>
									<v-list-item-content>
										<b>Afronding: </b>
										Zodra het eindproduct klaar is zorgt
										VonkProgramming ervoor dat enige bugs
										eruit gefilterd worden tot dat de klant
										tevreden is met het eindresultaat.
									</v-list-item-content>
								</v-list-item>
							</v-list>
						</v-card>
					</v-hover>
				</v-col>
				<v-col cols="12" sm="12" md="6" align="center">
					<v-hover v-slot="{ hover }">
						<v-card
							:elevation="hover ? 12 : 2"
							class="pa-4 d-flex flex-column align-center card-size"
							:class="{ 'card-hover': hover }"
						>
							<vue-lottie
								:options="{
									animationData: developmentAnimationData
								}"
								:width="isDesktop ? 400 : 300"
								:height="isDesktop ? 400 : 300"
							></vue-lottie>
							<v-card-title class="title">
								Webapplicatie Development
							</v-card-title>
							<v-card-text class="body-2">
								<p>
									VonkProgramming maakt gebruik van de
									nieuwste technieken in het maken van
									software en website binnen het web. Onze
									vaardigheden liggen bij
									<span class="red--text">VueJS</span>,
									<span class="red--text">React</span>,
									<span class="red--text">Angular</span> en
									<span class="red--text">Ionic</span>.
								</p>
								<p>
									Ook zijn wij gedreven in het maken van
									backend software in
									<span class="red--text">Express</span> en
									<span class="red--text">NestJS</span>.
								</p>
								<p>
									Verder is er ook ervaring in het gebruik van
									<span class="red--text">Jenkins</span>,
									<span class="red--text">unit testing</span>,
									<span class="red--text">E2E testing</span>
									en <span class="red--text">AWS</span>.
								</p>
								<p>
									<b>Samenvattend</b> voor de
									<b>niet technische mensen</b> is dit een
									verzameling aan tools die gebruikt kan
									worden om een enorme hoeveelheid aan
									software oplossingen te maken. Wellicht ook
									voor uw probleem. 😉
								</p>
							</v-card-text>
						</v-card>
					</v-hover>
				</v-col>
			</v-row>
		</v-container>
		<v-row class="wave-div-reverse">
			<wavey-divider-bottom></wavey-divider-bottom>
		</v-row>
		<v-row class="home-page-background home-page-background-gradient">
			<v-container>
				<v-row
					class="home-page-divider-80"
					justify="center"
					align="center"
				>
					<v-col cols="12" sm="12" md="6">
						<vue-lottie
							class="desktoponly"
							:options="{
								animationData: responsiveAnimationData
							}"
							:width="400"
							:height="400"
						/>
					</v-col>
					<v-col cols="0" md="6">
						<h4 class="display-2">Responsief ontwerp 🤯</h4>
						<p class="text-body-1">
							Het is voor uw website belangrijk dat u op elk
							apparaat goed te bereiken bent, daarom houden wij
							hier bij het ontwikkelen van uw software hier
							rekening mee.
						</p>
					</v-col>
				</v-row>
			</v-container>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-top></wavey-divider-top>
		</v-row>
		<v-container>
			<v-row justify="center">
				<v-col cols="12" sm="12" md="12" align="center">
					<vue-lottie
						class="desktoponly"
						:options="{ animationData: ideaAnimationData }"
						:width="400"
						:height="400"
					/>
					<h5 class="display-1 mt-4">Van idee naar website!</h5>
					<p class="body-1 mt-4">
						VonkProgramming heeft contact met verschillende
						ontwerpers om uw idee perfect vorm te geven. Hierbij
						wordt er rekening gehouden met
						<span class="highlight">responsiviteit</span>,
						<span class="highlight">schaalbaarheid</span> en
						<span class="highlight">SEO</span>.<br />
						VonkProgramming richt zich op een flexibele aanpak. Van
						software solutions tot simpele portfolio websites.
					</p>
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col cols="12" sm="12" md="6" align="center">
					<h6 class="title">Frameworks</h6>
					<p class="body-2">
						VonkProgramming maakt gebruik van de nieuwste JavaScript
						frameworks. Dit houdt in dat uw applicatie snel en
						schaalbaar is met behulp van de nieuwste web development
						technieken. Dit betekend dat als u later uw website wilt
						uitbreiden dit minder tijd kost doordat hier rekening
						mee wordt gehouden binnen de frameworks. (Angular, Vue
						en React).
					</p>
				</v-col>
				<v-col cols="12" sm="12" md="6" align="center">
					<h6 class="title">Backend oplossingen</h6>
					<p class="body-2">
						Naast websites en webapps biedt VonkProgramming ook
						mogelijkheden binnen NodeJS en Ionic. Deze twee
						solutions kunnen gebruikt worden voor het bouwen van
						serversystemen en mobiele apps.
					</p>
				</v-col>
			</v-row>
		</v-container>
		<v-row class="wave-div-reverse">
			<wavey-divider-bottom></wavey-divider-bottom>
		</v-row>
		<v-row class="home-page-background home-page-background-gradient">
			<v-container>
				<v-row
					class="home-page-divider-80"
					justify="center"
					align="center"
				>
					<v-col cols="12" sm="12" md="12" align="center">
						<vue-lottie
							:options="{ animationData: lightningAnimationData }"
							:width="300"
							:height="300"
						/>
						<h4 class="display-2 text-sm-center">
							Flitsende snelheid
						</h4>
						<p class="body-2">
							Ik maak gebruik van de nieuwste technieken om uw
							website zo snel als mogelijk te maken!
						</p>
					</v-col>
				</v-row>
			</v-container>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-top></wavey-divider-top>
		</v-row>
	</div>
</template>

<script>
import VueLottie from 'vue-lottie';

import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';
import WaveyDividerTop from '../shared/WaveyDividerTop.vue';

import developmentAnimationData from '../../assets/lotties/home-development.json';
import ideaAnimationData from '../../assets/lotties/home-idea.json';
import introAnimationData from '../../assets/lotties/home-intro.json';
import lightningAnimationData from '../../assets/lotties/home-lightning.json';
import processAnimationData from '../../assets/lotties/home-process.json';
import responsiveAnimationData from '../../assets/lotties/home-responsive.json';

export default {
	data() {
		return {
			introAnimationData,
			processAnimationData,
			developmentAnimationData,
			responsiveAnimationData,
			ideaAnimationData,
			lightningAnimationData
		};
	},
	computed: {
		isDesktop() {
			return window.outerWidth > 600;
		}
	},
	components: {
		VueLottie,
		WaveyDividerTop,
		WaveyDividerBottom
	}
};
</script>

<style scoped>
body {
	background-color: #333;
}

.v-card {
	transition: all 0.3s ease-in-out;
	opacity: 0.8;
}

.card-hover {
	opacity: 1;
}

.home-page-header {
	margin-top: -140px !important;
	padding: 32px 80px;
	background-color: #fff;
}

.row {
	position: relative;
}

.home-page-background {
	background-color: #333;
	color: white;
	text-shadow: #333 0 0 8px;
}

.home-page-background-gradient {
	background: linear-gradient(0deg, #333, #444, #333);
}

.home-page-divider-90 {
	height: 90vh;
}

.home-page-divider-80 {
	height: 80vh;
}

.card-size {
	height: 760px;
	display: flex;
	justify-content: center;
}

@media only screen and (max-width: 600px) {
	.home-page-divider-90 {
		height: 100vh;
	}

	.home-page-header {
		margin-top: 0px !important;
		padding: 32px 20px;
		background-color: #fff;
	}

	.home-page-divider-80 {
		height: 600px;
		color: white;
		padding: 0px 20px;
		text-shadow: #333 0 0 8px;
		background-color: #333;
	}

	.card-size {
		height: auto;
	}
	.sizeable-lottie {
		height: 300px !important;
		width: 300px !important;
	}
}
</style>

<style scoped>
.wave-div {
	width: 100vw;
	height: 50vh;
	margin-top: -20px !important;
	margin-bottom: 10vh;
}
.wave-div-reverse {
	width: 100vw;
	height: 50vh;
	margin-top: 10vh;
	margin-bottom: -20px !important;
}
@media only screen and (max-width: 600px) {
	.wave-div,
	.wave-div-reverse {
		display: none;
	}
}
</style>
