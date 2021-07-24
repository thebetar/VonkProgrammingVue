<template>
	<div>
		<v-row justify="center" align="center" class="background">
			<v-col cols="12" md="6" class="mt-16">
				<v-card color="red" class="pa-8">
					<v-row justify="center">
						<v-col cols="12" md="4" class="text-center">
							<lottie-player
								src="https://assets1.lottiefiles.com/packages/lf20_bp5lntrf.json"
								style="width: 300px; height: 300px;"
								speed="1"
								autoplay
							>
							</lottie-player>
						</v-col>
					</v-row>
					<v-card-title>
						Portfolio
					</v-card-title>
					<v-card-text>
						Op deze pagina kunt u al mijn ervaringen bij andere
						bedrijven zien. Alle
						<span style="color: blue; font-weight: bold;"
							>blauwe</span
						>
						kaarten zijn bedrijven waar ik gewerkt heb in vaste
						dienst, alle
						<span style="color: purple; font-weight: bold;"
							>paarse</span
						>
						bedrijven zijn bedrijven waar ik als zelfstandige voor
						gewerkt heb.
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="8" class="mt-6">
				<v-timeline :dense="isMobile">
					<v-timeline-item
						v-for="(item, index) in items"
						:class="{ 'text-right': index % 2 === 0 }"
						:key="item.id"
						:color="item.color"
						fill-dot
					>
						<portfolio-list-item
							:item="item"
							:index="index"
							:is-mobile="isMobile"
						></portfolio-list-item>
					</v-timeline-item>
				</v-timeline>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import PortfolioListItem from './PortfolioListItemComponent.vue';

export default {
	data() {
		return {
			stepChapter: 1,
			mobile: false,
			items: [
				{
					id: 1,
					title: 'Student Aan Huis',
					description:
						'Aan het einde van het eerste jaar van mijn opleiding HBO-ICT ben ik begonnen bij StudentAanHuis. Hier hielp ik mensen met hun computer problemen. Dit ging van printers opnieuw instellen tot hele Windows systemen herstellen.',
					imageUrl: 'sah-logo-min.jpg',
					color: 'indigo'
				},
				{
					id: 2,
					title: 'Sanoma',
					description:
						'In het tweede jaar van mijn opleiding HBO-ICT heb ik het volledige jaar bij Sanoma Media stage gelopen. Sanoma Media was destijds nog onderdeel van Sanoma. Hier heb ik mij bezig gehouden met software voor advertising. Dit was in de talen PHP, CSS, MySQL en HTML.',
					imageUrl: 'sanoma-logo-min.jpg',
					color: 'indigo'
				},
				{
					id: 3,
					title: 'Innovative Cycling',
					description:
						'Aan het einde van het tweede jaar van mijn opleiding HBO-ICT ben ik begonnen bij het studenten programmeur uitzendbureau Kojac. Hier kreeg ik de opdracht bij Innovative cycling de websites te onderhouden en te updaten. Hier heb ik gebruik gemaakt van Javascript, PHP, CSS, MySQL en HTML.',
					imageUrl: 'kojac-logo-min.jpg',
					color: 'indigo'
				},
				{
					id: 4,
					title: 'BijIngrid',
					description:
						'Ik heb voor Ingrid met mijn beginnende web development ervaring een website gemaakt om workshops op te geven. Deze website heeft een zelf gemaakt admin paneel',
					imageUrl: 'bijingrid-min.png',
					color: 'purple'
				},
				{
					id: 5,
					title: 'Floriade',
					description:
						'In het derde jaar van mijn opleiding HBO-ICT heb ik stage gelopen voor het Floriade project. Dit was eerst voor de gemeente Almere en werd later verplaatst naar het Floriade gebouw. Hier heb ik mij met een team bezig gehouden met een van de onderdelen van de Floriade. Hier heb ik gebruik gemaakt van PHP, CSS, MySQL en HTML.',
					imageUrl: 'floriade-logo-min.jpg',
					color: 'indigo'
				},
				{
					id: 6,
					title: 'MedWeb',
					description:
						'In het laatste jaar van mijn opleiding HBO-ICT heb ik stage gelopen bij het bedrijf Medweb B.V.. Dit is een software bedrijf die zich bezig houdt met een rooster applicatie specifiek gericht op medisch specialisten en artsen. Ik heb mij hier bezig gehouden met het vernieuwen van een van de onderdelen van hun applicatie "Medspace". Hier heb ik gebruik gemaakt van VueJS/Javascript, IBM Notes, IBM Domino designer, CSS en HTML.',
					imageUrl: 'medweb-logo-min.jpg',
					color: 'indigo'
				},
				{
					id: 7,
					title: 'Hoveniersbedrijf Wouters',
					description:
						'Ik heb voor HoveniersBedrijf Wouters na mijn opleiding een website gemaakt met een professionele uitstraling en een snelle interface.',
					imageUrl: 'hoveniersbedrijf-wouters-min.jpg',
					color: 'purple'
				},
				{
					id: 8,
					title: 'Quintor',
					description:
						'Momenteel werk ik bij IT consultancy bedrijf Quintor. Dit bedrijf houdt zich bezig met het adviseren over en bouwen van software. Dit bij grote klanten als de ING, de overheid, etc. Bij dit bedrijf houdt ik mij bezig met mijn programmeervaardigheden verbeteren zodat deze aan de hoogst mogelijke standaard kunnen voldoen.',
					imageUrl: 'quintor-logo.jpg',
					color: 'indigo'
				},
				{
					id: 9,
					title: 'Chary Solutions',
					description:
						'Ik heb voor Chary Solutions software gemaakt om hun advertising data uit hun Facebook business manager te halen en dit vervolgens te exporteren naar google sheets',
					imageUrl: 'chary-min.png',
					color: 'purple'
				},
				{
					id: 10,
					title: 'J-Tax Automotive',
					description:
						'Ik heb voor J-Tax Automotive solutions maatwerk software gemaakt voor het maken van taxatie rapporten.',
					imageUrl: 'j-tax-min.png',
					color: 'purple'
				}
			]
		};
	},
	methods: {
		previous() {
			if (this.stepChapter > 1) {
				this.stepChapter--;
			}
		},
		next() {
			if (this.stepChapter < this.items.length) {
				this.stepChapter++;
			}
		},
		swipe(direction) {
			if (direction === 'Left') {
				this.next();
			} else if (direction === 'Right') {
				this.previous();
			}
		}
	},
	computed: {
		isMobile() {
			return window.innerWidth <= 800 || window.innerHeight <= 600;
		}
	},
	components: {
		PortfolioListItem
	}
};
</script>

<style scoped>
.background {
	width: 100vw;
	padding-bottom: 80px;
	background-image: url('../../assets/backgrounds/bg-portfolio-min.jpg');
	background-size: cover;
	overflow-y: hidden;
}
</style>
