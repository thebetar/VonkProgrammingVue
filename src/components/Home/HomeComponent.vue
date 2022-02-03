<template>
	<div>
		<v-row class="home-page-media-1" justify="center" align="center">
			<v-col cols="0" md="3">
				<lottie-player
					src="https://assets2.lottiefiles.com/packages/lf20_jamhkybo.json"
					mode="bounce"
					background="transparent"
					speed="1"
					style="width: 500px; height: 500px; margin: 16px;"
					loop
					autoplay
					class="align-self-center desktoponly"
				></lottie-player>
			</v-col>
			<v-col offset="0" cols="12" md="3" class="d-flex flex-column">
				<p class="text-h4 white--text">
					Wij houden van uitdaging
				</p>
				<div class="text-body-1 white--text">
					<p>
						Speelt er een
						<span class="red--text">technische uitdaging</span>
						binnen uw bedrijf of heeft u behoefte aan specifieke
						<span class="red--text">maatwerksoftware</span>?
					</p>
					<p>
						Wij kunnen het voor u maken.
					</p>
				</div>
				<div class="mt-4">
					<v-btn
						class="ml-1"
						large
						color="primary"
						@click="$router.push('/contact')"
					>
						Neem contact op
					</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="pt-12">
			<v-col cols="12" sm="12" md="6" align="center">
				<div class=" home-page-header">
					<h2 class="display-1">
						Hoe gaan wij te werk?
					</h2>
					<p class="body-1 mt-4">
						VonkProgramming is een Web development bedrijf dat zich
						bezighoudt met maatwerk software solutions. Voor iedere
						klant maken wij op maat gemaakte software, afgestemd op
						uw behoeften.
					</p>
				</div>
			</v-col>
		</v-row>
		<v-row justify="center" class="mt-6">
			<v-col cols="12" sm="12" md="4" align="center">
				<v-hover v-slot="{ hover }">
					<v-card
						:elevation="hover ? 12 : 2"
						class="pa-4 d-flex flex-column align-center card-size"
						:class="{ 'card-hover': hover }"
					>
						<lottie-player
							src="https://assets2.lottiefiles.com/packages/lf20_myryne1p/lottie_step1/data.json"
							mode="bounce"
							background="transparent"
							speed="1"
							style="width: 300px; height: 300px;"
							loop
							autoplay
						></lottie-player>
						<v-card-title class="title text-center"
							>Procesbeschrijving</v-card-title
						>
						<v-list>
							<v-list-item>
								<v-list-item-icon>
									<b>1.</b>
								</v-list-item-icon>
								<v-list-item-content>
									Voorafgaand vindt er een kennsmakingsgesprek
									plaats waarin de context van uw wens wordt
									besproken.
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-icon>
									<b>2.</b>
								</v-list-item-icon>
								<v-list-item-content>
									Op basis van de besproken details wordt er
									een product ontwerp gemaakt. Gedurende dit
									proces is het belangrijk dat de klant
									tevreden is met het ontwerp en dat de
									software voldoet aan de gestelde eisen.
								</v-list-item-content>
							</v-list-item>
							<v-list-item>
								<v-list-item-icon>
									<b>3.</b>
								</v-list-item-icon>
								<v-list-item-content>
									Zodra het eindproduct klaar is zorgt
									VonkProgramming ervoor dat enige bugs eruit
									gefilterd worden tot dat de klant tevreden
									is met het eindresultaat.
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>
				</v-hover>
			</v-col>
			<v-col cols="12" sm="12" md="4" align="center">
				<v-hover v-slot="{ hover }">
					<v-card
						:elevation="hover ? 12 : 2"
						class="pa-4 d-flex flex-column align-center card-size"
						:class="{ 'card-hover': hover }"
					>
						<lottie-player
							src="https://assets9.lottiefiles.com/packages/lf20_hrkmmhjf.json"
							mode="bounce"
							background="transparent"
							speed="1"
							style="width: 300px; height: 300px;"
							loop
							autoplay
						></lottie-player>
						<v-card-title class="title">
							Webapplicatie Development
						</v-card-title>
						<v-card-text class="body-2">
							Om garantie te geven dat jij daadwerkelijk
							profiteert van uw nieuwe website, wordt ervoor
							gezorgd dat tijdens het ontwikkelen van de website
							er rekening gehouden wordt met interactiviteit. Niet
							alleen zorg ik ervoor dat de website direct goed
							vindbaar is, maar gebruik ik ook de nieuwste
							development technieken waardoor schaalbaarheid en
							snelheid vanzelfsprekend is.
						</v-card-text>
					</v-card>
				</v-hover>
			</v-col>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-bottom></wavey-divider-bottom>
		</v-row>
		<v-row class="home-page-media-2" justify="center" align="center">
			<v-col cols="12" sm="12" md="4">
				<lottie-player
					src="https://assets1.lottiefiles.com/packages/lf20_wjtudqmw.json"
					mode="bounce"
					background="transparent"
					speed="1"
					class="sizeable-lottie"
					style="width: 600px; height: 600px;"
					loop
					autoplay
				></lottie-player>
			</v-col>
			<v-col cols="0" md="4">
				<h4 class="display-2">Responsief ontwerp</h4>
				<p class="text-body-1">
					Het is voor uw website belangrijk dat u op elk apparaat goed
					te bereiken bent, daarom houden wij hier bij het ontwikkelen
					van uw software hier rekening mee.
				</p>
			</v-col>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-top></wavey-divider-top>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" sm="12" md="6" align="center">
				<lottie-player
					src="https://assets9.lottiefiles.com/packages/lf20_jt4mhmk1.json"
					mode="bounce"
					background="transparent"
					speed="1"
					style="width: 300px; height: 300px;"
					loop
					autoplay
				></lottie-player>
				<h5 class="display-1">Van idee naar website!</h5>
				<p class="body-1 mt-4">
					VonkProgramming heeft contact met verschillende ontwerpers
					om uw idee perfect vorm te geven. Hierbij wordt er rekening
					gehouden met
					<span class="highlight">responsiviteit</span>,
					<span class="highlight">schaalbaarheid</span> en
					<span class="highlight">SEO</span>.<br />
					VonkProgramming richt zich op een flexibele aanpak. Van
					software solutions tot simpele portfolio websites.
				</p>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" sm="12" md="3" align="center">
				<h6 class="title">Frameworks</h6>
				<p class="body-2">
					VonkProgramming maakt gebruik van de nieuwste JavaScript
					frameworks. Dit houdt in dat uw applicatie snel en
					schaalbaar is met behulp van de nieuwste web development
					technieken. Dit betekend dat als u later uw website wilt
					uitbreiden dit minder tijd kost doordat hier rekening mee
					wordt gehouden binnen de frameworks. (Angular, Vue en
					React).
				</p>
			</v-col>
			<v-col cols="12" sm="12" md="3" align="center">
				<h6 class="title">Backend oplossingen</h6>
				<p class="body-2">
					Naast websites en webapps biedt VonkProgramming ook
					mogelijkheden binnen NodeJS en Ionic. Deze twee solutions
					kunnen gebruikt worden voor het bouwen van serversystemen en
					mobiele apps.
				</p>
			</v-col>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-bottom></wavey-divider-bottom>
		</v-row>
		<v-row class="home-page-media-3" justify="center" align="center">
			<v-col cols="12" sm="12" md="6" align="center">
				<lottie-player
					src="https://assets7.lottiefiles.com/packages/lf20_Dlpepx.json"
					mode="bounce"
					background="transparent"
					speed="1"
					style="width: 300px; height: 300px;"
					loop
					autoplay
				></lottie-player>
				<h4 class="display-2 text-sm-center">Flitsende snelheid</h4>
				<p class="body-2">
					Ik maak gebruik van de nieuwste technieken om uw website zo
					snel als mogelijk te maken!
				</p>
			</v-col>
		</v-row>
		<v-row class="wave-div">
			<wavey-divider-top></wavey-divider-top>
		</v-row>
	</div>
</template>

<script>
import WaveyDividerTop from '../shared/WaveyDividerTop.vue';
import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';

export default {
	components: {
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

.home-page-media-1 {
	top: 0px;
	height: 90vh;
	background-color: #333;
}

.home-page-media-2 {
	height: 80vh;
	color: white;
	text-shadow: #333 0 0 8px;
	background-color: #333;
}

.home-page-media-3 {
	height: 80vh;
	color: white;
	text-shadow: #333 0 0 8px;
	background-color: #333;
}

.card-size {
	height: 760px;
	display: flex;
	justify-content: center;
}

@media only screen and (max-width: 600px) {
	.home-page-media-1 {
		height: 100vh;
	}

	.home-page-header {
		margin-top: 0px !important;
		padding: 32px 20px;
		background-color: #fff;
	}

	.home-page-media-2 {
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

<style>
.wave-div {
	width: 100vw;
	height: 60vh;
	margin-bottom: -140px !important;
	margin-top: -100px !important;
}
@media only screen and (max-width: 600px) {
	.wave-div {
		display: none;
	}
}
</style>
