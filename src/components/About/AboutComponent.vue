<template>
	<div>
		<v-row class="background-sizeable" justify="center" align="center">
			<v-col
				cols="4"
				align-self="end"
				style="padding: 0px;"
				class="d-none d-sm-flex"
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
				sm="4"
				md="4"
				class="white--text d-flex flex-column"
			>
				<vue-lottie
					:options="{
						animationData: workingAnimationData,
						loop: true
					}"
					:height="350"
					:width="420"
					class="align-self-center desktoponly"
				></vue-lottie>
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
		</v-row>
		<v-row class="background" justify="center" align="center">
			<v-col cols="4" class="d-none d-sm-flex">
				<v-row>
					<v-col cols="6" class="pt-12">
						<img
							class="icon"
							:src="require('@/assets/about/vuejs.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="pt-12">
						<img
							class="icon"
							:src="require('@/assets/about/angular.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="pt-12">
						<img
							class="icon"
							:src="require('@/assets/about/react.jpg')"
						/>
					</v-col>
					<v-col cols="6" class="pt-12">
						<img
							class="icon"
							:src="require('@/assets/about/express.jpg')"
						/>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" sm="4" md="4" offset-sm="1" class="white--text">
				<h5 class="display-2">Ervaringen</h5>
				<p class="body-1 mt-2">
					Hieronder staan al mijn voorgaande ervaringen beschreven
				</p>
				<v-timeline dense>
					<v-timeline-item v-for="item in items" :key="item.language">
						<v-row align="center">
							<v-col cols="6" sm="3" md="3">
								{{ item.language }}
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
		</v-row>
		<v-row class="background-sizeable" justify="center" align="center">
			<v-col
				cols="12"
				sm="4"
				md="4"
				class="text-center white--text d-flex flex-column align-center"
			>
				<h5 class="display-2">Projecten</h5>
				<p class="body-1 pt-2">
					Voor informatie over projecten die ik in het verleden gedaan
					heb of momenteel mee bezig ben zie
					<router-link
						to="/portfolio"
						style="font-weight: bold; color: white;"
						>Portfolio</router-link
					>
				</p>
				<vue-lottie
					:options="{ animationData: projectsAnimationData }"
					:height="400"
					:width="400"
				></vue-lottie>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import AboutProgressComponent from './AboutProgressComponent.vue';
import VueLottie from 'vue-lottie';
import projectsAnimationData from '../../assets/lotties/about-projects.json';
import workingAnimationData from '../../assets/lotties/about-working.json';

export default {
	data() {
		return {
			items: [
				{
					language: 'Javascript',
					color: 'yellow',
					years: 5,
					progress: 85
				},
				{
					language: 'NodeJS',
					color: 'green',
					years: 2,
					progress: 80
				},
				{
					language: 'Typescript',
					color: 'blue',
					years: 2,
					progress: 80
				},
				{
					language: 'PHP',
					color: 'purple',
					years: 5,
					progress: 75
				},
				{
					language: 'Python',
					color: 'yellow',
					years: 2,
					progress: 60
				},
				{
					language: 'CSS',
					color: 'teal',
					years: 5,
					progress: 85
				},
				{
					language: 'HTML',
					color: 'orange',
					years: 5,
					progress: 85
				}
			],
			projectsAnimationData,
			workingAnimationData
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
		AboutProgressComponent,
		VueLottie
	}
};
</script>

<style scoped>
.background,
.background-sizeable {
	background: rgb(61, 73, 89);
	background: linear-gradient(
		170deg,
		rgba(61, 73, 89, 1) 0%,
		rgba(118, 113, 106, 1) 58%,
		rgba(223, 188, 138, 1) 100%
	);
	background-attachment: fixed;
	height: 102vh !important;
}

.portrait {
	height: 600px;
	position: fixed;
	bottom: 0px;
}

.icon {
	height: 100px;
}

@media only screen and (max-width: 600px) {
	.background-sizeable {
		height: 110vh !important;
		padding: 0px 20px;
		z-index: 1;
	}
	.background {
		height: 800px !important;
		padding: 0px 20px;
		z-index: 1;
	}
}
</style>
