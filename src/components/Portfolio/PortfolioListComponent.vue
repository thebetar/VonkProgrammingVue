<template>
	<div>
		<v-row justify="center" align="center" class="background">
			<v-col cols="12" md="6" class="mt-16">
				<v-card :color="colors[0]" class="pa-8">
					<v-row justify="center">
						<v-col cols="12" md="4" class="text-center">
							<vue-lottie
								:options="{
									animationData: jobsAnimationData,
									mode: 'bounce'
								}"
								:width="300"
								:height="300"
							></vue-lottie>
						</v-col>
					</v-row>
					<v-card-title style="font-size: 32px;">
						Portfolio
					</v-card-title>
					<v-card-text>
						Op deze pagina kunt u al mijn ervaringen bij andere
						bedrijven zien.<br />
						Bedrijven waar ik in vaste dienst heb gewerkt worden
						weergeven met
						<span
							:style="{ color: colors[1] }"
							style="font-weight: bold;"
						>
							deze kleur </span
						>.<br />
						Bedrijven waar ik tijdelijke projecten voor gemaakt heb,
						denk hierbij aan websites en<br />
						maatwerk software worden weergeven met
						<span
							:style="{ color: colors[2] }"
							style="font-weight: bold;"
						>
							deze kleur </span
						>.<br />
						Verder zijn alle projecten die ik voor mezelf heb
						gestart met
						<span
							:style="{ color: colors[3] }"
							style="font-weight: bold;"
						>
							deze kleur </span
						>weergeven.
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="8" class="mt-6">
				<v-timeline :dense="isMobile">
					<v-timeline-item
						v-for="(item, index) in jobs.reverse()"
						:class="{ 'text-right': index % 2 === 0 }"
						:key="item.id"
						:color="colors[item.color]"
						fill-dot
					>
						<portfolio-list-item
							:item="item"
							:color="colors[item.color]"
							:index="index"
							:is-mobile="isMobile"
						></portfolio-list-item>
					</v-timeline-item>
				</v-timeline>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="background">
			<v-col cols="12" md="6" class="mt-16">
				<v-card :color="colors[0]" class="pa-md-8 pa-4">
					<v-row justify="center">
						<v-col cols="12" class="text-center">
							<vue-lottie
								:options="{
									animationData: certificatesAnimationData
								}"
								:width="300"
								:height="300"
							>
							</vue-lottie>
						</v-col>
					</v-row>
					<v-card-title>
						Certificaten en diploma's
					</v-card-title>
					<v-card-text>
						Hieronder staan alle certificaten en diploma's die ik
						behaald heb.
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="8" class="mt-6">
				<v-timeline :dense="isMobile">
					<v-timeline-item
						v-for="(item, index) in achievements"
						:key="item.id"
						fill-dot
						:color="index % 2 === 0 ? colors[1] : colors[2]"
					>
						<template v-slot:opposite>
							<span
								class="headline font-weight-bold"
								:style="{
									color:
										index % 2 === 0 ? colors[1] : colors[2]
								}"
							>
								{{ item.year }}
							</span>
						</template>
						<v-alert
							dense
							class="py-6 subtitle"
							:class="{
								'text-right': index % 2 !== 0 && !isMobile
							}"
							:color="index % 2 === 0 ? colors[1] : colors[2]"
						>
							{{ item.certificate }} - {{ item.where }}
						</v-alert>
					</v-timeline-item>
				</v-timeline>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import VueLottie from 'vue-lottie';
import certificatesAnimationData from '../../assets/lotties/portfolio-certificates.json';
import jobsAnimationData from '../../assets/lotties/portfolio-jobs.json';
import PortfolioListItem from './PortfolioListItemComponent.vue';

export default {
	data() {
		return {
			colors: ['#f32c65', '#193a7f', '#5C9ead', '#d7b9d5'],
			stepChapter: 1,
			mobile: false,
			jobs: [
				{
					title: 'Student Aan Huis',
					description:
						'Aan het einde van het eerste jaar van mijn opleiding HBO-ICT ben ik begonnen bij StudentAanHuis. Hier hielp ik mensen met hun computer problemen. Dit ging van printers opnieuw instellen tot hele Windows systemen herstellen.',
					imageUrl: 'sah-logo-min.jpg',
					color: 1
				},
				{
					title: 'Kookstudio Amsterdam',
					description:
						'Ik heb tijdens mijn tweede jaar van mijn opleiding een website gebouwd voor kookstudio Amsterdam met een eigen admin paneel gemaakt in PHP',
					imageUrl: 'kookstudio-min.png',
					color: 2
				},
				{
					title: 'Sanoma',
					description:
						'In het tweede jaar van mijn opleiding HBO-ICT heb ik het volledige jaar bij Sanoma Media stage gelopen. Sanoma Media was destijds nog onderdeel van Sanoma. Hier heb ik mij bezig gehouden met software voor advertising. Dit was in de talen PHP, CSS, MySQL en HTML.',
					imageUrl: 'sanoma-logo-min.jpg',
					color: 1
				},
				{
					title: 'Innovative Cycling',
					description:
						'Aan het einde van het tweede jaar van mijn opleiding HBO-ICT ben ik begonnen bij het studenten programmeur uitzendbureau Kojac. Hier kreeg ik de opdracht bij Innovative cycling de websites te onderhouden en te updaten. Hier heb ik gebruik gemaakt van Javascript, PHP, CSS, MySQL en HTML.',
					imageUrl: 'kojac-logo-min.jpg',
					color: 1
				},
				{
					title: 'BijIngrid',
					description:
						'Ik heb voor Ingrid met mijn beginnende web development ervaring een website gemaakt om workshops op te geven. Deze website heeft een zelf gemaakt admin paneel gemaakt in PHP.',
					imageUrl: 'bijingrid-min.png',
					color: 2
				},
				{
					title: 'Floriade',
					description:
						'In het derde jaar van mijn opleiding HBO-ICT heb ik stage gelopen voor het Floriade project. Dit was eerst voor de gemeente Almere en werd later verplaatst naar het Floriade gebouw. Hier heb ik mij met een team bezig gehouden met een van de onderdelen van de Floriade. Hier heb ik gebruik gemaakt van PHP, CSS, MySQL en HTML.',
					imageUrl: 'floriade-logo-min.jpg',
					color: 1
				},
				{
					title: 'MedWeb',
					description:
						'In het laatste jaar van mijn opleiding HBO-ICT heb ik stage gelopen bij het bedrijf Medweb B.V.. Dit is een software bedrijf die zich bezig houdt met een rooster applicatie specifiek gericht op medisch specialisten en artsen. Ik heb mij hier bezig gehouden met het vernieuwen van een van de onderdelen van hun applicatie "Medspace". Hier heb ik gebruik gemaakt van VueJS/Javascript, IBM Notes, IBM Domino designer, CSS en HTML.',
					imageUrl: 'medweb-logo-min.jpg',
					color: 1
				},
				{
					title: 'Hoveniersbedrijf Wouters',
					description:
						'Ik heb voor HoveniersBedrijf Wouters na mijn opleiding een website gemaakt met een professionele uitstraling en een snelle interface. Deze website is volledig gebouwd met VueJS',
					imageUrl: 'hoveniersbedrijf-wouters-min.jpg',
					color: 2
				},
				{
					title: 'Quintor',
					description:
						'Momenteel werk ik bij IT consultancy bedrijf Quintor. Dit bedrijf houdt zich bezig met het adviseren over en bouwen van software. Dit bij grote klanten als de ING, de overheid, etc. Bij dit bedrijf houdt ik mij bezig met mijn programmeervaardigheden verbeteren zodat deze aan de hoogst mogelijke standaard kunnen voldoen.',
					imageUrl: 'quintor-logo.jpg',
					color: 1
				},
				{
					title: 'Chary Solutions',
					description:
						'Ik heb voor Chary Solutions software gemaakt om hun advertising data uit hun Facebook business manager te halen en dit vervolgens te exporteren naar google sheets',
					imageUrl: 'chary-min.png',
					color: 2
				},
				{
					title: 'SVB',
					description:
						'Mijn eerste opdracht vanuit Quintor is bij de SVB, hier programmeer ik voornamelijk in Javascript in het framework Angular',
					imageUrl: 'SVB-min.jpg',
					color: 1
				},
				{
					title: 'J-Tax Automotive',
					description:
						'Ik heb voor J-Tax Automotive solutions maatwerk software gemaakt voor het maken van taxatie rapporten. De software van J-tax is gemaakt met behulp van Vue.js en ExpressJS',
					imageUrl: 'j-tax-min.png',
					color: 2
				},
				{
					title: 'Klets',
					description:
						'Klets is een social media app die ik gemaakt heb met behulp van Ionic. Deze app is gemaakt om op basis van een onderwerp en een aangegeven afstand mensen te zoeken en kleine groepschat (max 5) te vormen. Klets is gemaakt met behulp van Ioinic',
					imageUrl: 'klets.png',
					color: 3
				},
				{
					title: 'ING',
					description:
						'Bij de ING werk ik momenteel als full stack developer aan verschillende interfaces die gebruikt worden door de ING. Dit met het framework Lit element',
					imageUrl: 'ing.png',
					color: 1
				},
				{
					title: 'P.51 Design en MarkantIT',
					description:
						'Samen met P.51 design en MarkantIT werk ik aan een website voor OOMT m.b.t. de Arbo catalogus. Dit project wordt gebouwd met React',
					imageUrl: 'p51design.png',
					color: 2
				}
			].map(this.addRandomId),
			achievements: [
				{
					certificate: `Bachelor's degree, HBO-ICT`,
					where: 'Windesheim Flevoland',
					year: 2020
				},
				{
					certificate: 'AWS Certified Practitioner',
					where: 'Amazon Web Services',
					year: 'Februari 2021'
				},
				{
					certificate: 'Young Professional Programma',
					where: 'Quintor',
					year: 'November 2021'
				},
				{
					certificate:
						'Electron From Scratch: Build Desktop Apps With JavaScript',
					where: 'Udemy',
					year: 'Juli 2021'
				},
				{
					certificate:
						'Learn DevOps: CI/CD with Jenkins using Pipelines and Docker',
					where: 'Udemy',
					year: 'Mei 2021'
				},
				{
					certificate:
						'2021 Complete Python Bootcamp from Zero to Hero in Python',
					where: 'Udemy',
					year: 'Maart 2021'
				},
				{
					certificate: 'Docker & Kubernetes: The Practical Guide',
					where: 'Udemy',
					year: 'Maart 2021'
				},
				{
					certificate: 'Nuxt.js - Vue.js on Steroids',
					where: 'Udemy',
					year: 'Maart 2021'
				},
				{
					certificate:
						'React - The Complete Guid (incl Hooks, ReactRouter, Redux)',
					where: 'Udemy',
					year: 'Februari 2021'
				},
				{
					certificate: 'Angular - The Complete Guide (2021 Edition)',
					where: 'Udemy',
					year: 'Januari 2021'
				},
				{
					certificate: 'Understanding TypeScript - 2021 Edition',
					where: 'Udemy',
					year: 'Januari 2021'
				},
				{
					certificate: 'Sales Training: Practical Sales Techniques',
					where: 'Udemy',
					year: 'December 2020'
				},
				{
					certificate:
						'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
					where: 'Udemy',
					year: 'December 2020'
				},
				{
					certificate:
						'Java Programming Masterclass for Software Developers',
					where: 'Udemy',
					year: 'September 2020'
				},
				{
					certificate: 'Learn and Understand NodeJS',
					where: 'Udemy',
					year: 'Juli 2020'
				}
			].map(this.addRandomId),
			jobsAnimationData,
			certificatesAnimationData
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
		},
		addRandomId(obj) {
			return { ...obj, id: Math.random() };
		}
	},
	computed: {
		isMobile() {
			return window.innerWidth <= 800 || window.innerHeight <= 600;
		}
	},
	components: {
		PortfolioListItem,
		VueLottie
	}
};
</script>

<style scoped>
.background {
	width: 100vw;
	padding-bottom: 80px;
	background-color: #333;
	background-size: 100vw 100vh;
	background-attachment: fixed;
	overflow-y: hidden;
}
.v-card__text {
	font-size: 18px !important;
}
</style>
