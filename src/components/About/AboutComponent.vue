<template>
	<v-container>
		<v-row justify="center" align="center" style="height: fit-content;">
			<v-col
				cols="6"
				align-self="end"
				style="padding: 0px;"
				class="d-none d-sm-flex h-full"
			>
				<img
					id="portrait"
					ref="portait"
					class="portrait"
					:src="require('@/assets/about/lars_profielfoto_v2-min.png')"
				/>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				md="6"
				class="white--text d-flex flex-column h-full justify-center"
			>
				<h5 class="display-2">Wie ben ik?</h5>
				<p class="body-1">
					Hallo, ik ben Lars. Ik ben een gemotiveerd IT-consultant en
					programmeur met een passie voor web-development. Hiernaast
					maak ik ook apps met behulp van het Ionic framework.<br />
					Dit carrière pad is voor mij ontstaan uit een levenslange
					passie voor computers en technologie die al vanaf jonge
					leeftijd is ontstaan.<br />
					Ik ben altijd al met computers bezig geweest en het heeft
					mij altijd gefascineerd hoe een website goede interactie kan
					bieden aan de eindgebruiker.<br />
					Ik heb mijn bachelor-opleiding HBO-ICT afgerond aan de
					hogeschool Windesheim in Almere.
				</p>
			</v-col>
			<v-col cols="6" class="d-none d-sm-flex h-full justify-center">
				<v-row class="justify-center">
					<v-col cols="6" class="d-flex justify-center align-center">
						<img
							class="icon"
							:src="require('@/assets/about/vuejs.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="d-flex justify-center align-center">
						<img
							class="icon"
							:src="require('@/assets/about/angular.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="d-flex justify-center align-center">
						<img
							class="icon"
							:src="require('@/assets/about/react.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="d-flex justify-center align-center">
						<img
							class="icon"
							:src="require('@/assets/about/express.jpg')"
						/>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" sm="6" md="6" class="white--text h-full">
				<h5 class="display-2">Ervaringen</h5>
				<p class="body-1 mt-2">
					Hieronder staan al mijn voorgaande ervaringen beschreven
				</p>
				<v-timeline dense>
					<v-timeline-item v-for="item in items" :key="item.skill">
						<v-row align="center">
							<v-col cols="6" sm="3" md="3">
								{{ item.skill }}
							</v-col>
							<v-col>
								<about-progress-component
									:color="item.color"
									:years="item.years"
									:progress="item.progress"
								></about-progress-component>
							</v-col>
						</v-row>
					</v-timeline-item>
				</v-timeline>
			</v-col>
			<v-col
				cols="12"
				sm="6"
				md="6"
				class="text-center white--text h-full d-flex justify-center flex-column align-center"
			>
				<h5 class="display-2">Projecten</h5>
				<p class="body-1 pt-2">
					Voor informatie over projecten die ik in het verleden gedaan
					heb of momenteel mee bezig ben zie
					<router-link
						to="/portfolio"
						class="font-weight-bold white--text"
					>
						Portfolio
					</router-link>
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AboutProgressComponent from './AboutProgressComponent.vue';

export default {
	data() {
		return {
			items: [
				{
					skill: 'VueJs',
					color: '#42b883',
					years: 5,
					progress: 90
				},
				{
					skill: 'React',
					color: '#61dbfb',
					years: 4,
					progress: 85
				},
				{
					skill: 'Express',
					color: '#333',
					years: 6,
					progress: 80
				},
				{
					skill: 'Angular',
					color: '#dd1b16',
					years: 3,
					progress: 75
				},
				{
					skill: 'Ionic',
					color: '#498aff',
					years: 2,
					progress: 60
				},

				{
					skill: 'NodeJS',
					color: 'green',
					years: 2,
					progress: 80
				},
				{
					skill: 'Typescript',
					color: 'blue',
					years: 2,
					progress: 80
				}
			]
		};
	},
	mounted() {
		window.onscroll = function() {
			const yPos = window.pageYOffset;
			const opacity = (yPos / 300) * -1 + 1;
			const portrait = document.querySelector('#portrait');
			if (portrait) {
				portrait.style.opacity = opacity > 0 ? opacity : 0;
			}
		};
	},
	components: {
		AboutProgressComponent
	}
};
</script>

<style scoped>
.portrait {
	height: 600px;
	position: fixed;
	bottom: 0px;
}

.icon {
	height: 80px;
}
</style>
