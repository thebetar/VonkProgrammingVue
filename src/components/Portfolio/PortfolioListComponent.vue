<template>
    <div>
        <v-row justify="center" align="center" class="background">
            <v-col cols="1" class="d-none d-sm-flex d-md-flex">
                <v-btn class="ma-4" fab @click="previous" :disabled="stepChapter === 1">
                    <v-icon>mdi-arrow-left-bold</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="6" align="center" v-touch="{
                left: () => swipe('Left'),
                right: () => swipe('Right'),
                up: () => swipe('Up'),
                down: () => swipe('Down')
            }">
                <v-stepper v-model="stepChapter">
                    <v-stepper-items>
                        <v-stepper-content v-for="(item, index) in items" :key="item.id" :step="index + 1">
                            <portfolio-list-item :item="item"></portfolio-list-item>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-col>
            <v-col cols="1" class="d-none d-sm-flex d-md-flex">
                <v-btn class="ma-4" fab @click="next" :disabled="stepChapter === items.length">
                    <v-icon>mdi-arrow-right-bold</v-icon>
                </v-btn>
            </v-col>
            <v-dialog v-model="mobile">
                <v-card>
                    <v-card-title class="headline grey lighten-2">
                        Informatie
                    </v-card-title>

                    <v-card-text>
                        Op de portfolio pagina kunt u als u een smartphone gebruikt. Navigeren door te swipen over de gepresenteerde kaart.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="mobile = false"
                    >
                        Doorgaan
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
                    title: 'StudentAanHuis',
                    description: 'Aan het einde van het eerste jaar van mijn opleiding HBO-ICT ben ik begonnen bij StudentAanHuis. Hier hielp ik mensen met hun computer problemen. Dit ging van printers opnieuw instellen tot hele Windows systemen herstellen.',
                    imageUrl: 'assets/portfolio/sah-logo-min.jpg'
                },
                {
                    id: 2,
                    title: 'Sanoma',
                    description: 'In het tweede jaar van mijn opleiding HBO-ICT heb ik het volledige jaar bij Sanoma Media stage gelopen. Sanoma Media was destijds nog onderdeel van Sanoma. Hier heb ik mij bezig gehouden met software voor advertising. Dit was in de talen PHP, CSS, MySQL en HTML.',
                    imageUrl: 'assets/portfolio/sanoma-logo-min.jpg'
                },
                {
                    id: 3,
                    title: 'InnovativeCycling',
                    description: 'Aan het einde van het tweede jaar van mijn opleiding HBO-ICT ben ik begonnen bij het studenten programmeur uitzendbureau Kojac. Hier kreeg ik de opdracht bij Innovative cycling de websites te onderhouden en te updaten. Hier heb ik gebruik gemaakt van Javascript, PHP, CSS, MySQL en HTML.',
                    imageUrl: 'assets/portfolio/kojac-logo-min.jpg'
                },
                {
                    id: 4,
                    title: 'Floriade',
                    description: 'In het derde jaar van mijn opleiding HBO-ICT heb ik stage gelopen voor het Floriade project. Dit was eerst voor de gemeente Almere en werd later verplaatst naar het Floriade gebouw. Hier heb ik mij met een team bezig gehouden met een van de onderdelen van de Floriade. Hier heb ik gebruik gemaakt van PHP, CSS, MySQL en HTML.',
                    imageUrl: 'assets/portfolio/floriade-logo-min.jpg'
                },
                {
                    id: 5,
                    title: 'MedWeb',
                    description: 'In het laatste jaar van mijn opleiding HBO-ICT heb ik stage gelopen bij het bedrijf Medweb B.V.. Dit is een software bedrijf die zich bezig houdt met een rooster applicatie specifiek gericht op medisch specialisten en artsen. Ik heb mij hier bezig gehouden met het vernieuwen van een van de onderdelen van hun applicatie "Medspace". Hier heb ik gebruik gemaakt van VueJS/Javascript, IBM Notes, IBM Domino designer, CSS en HTML.',
                    imageUrl: 'assets/portfolio/medweb-logo-min.jpg'
                },
                {
                    id: 6,
                    title: 'Quintor',
                    description: 'Momenteel werk ik bij IT consultancy bedrijf Quintor. Dit bedrijf houdt zich bezig met het adviseren over en bouwen van software. Dit bij grote klanten als de ING, de overheid, etc. Bij dit bedrijf houdt ik mij bezig met mijn programmeervaardigheden verbeteren zodat deze aan de hoogst mogelijke standaard kunnen voldoen.',
                    imageUrl: 'assets/portfolio/quintor-logo.jpg'
                }
            ]
        }
    },
    mounted() {
        this.mobile = window.screen.width < 600;
    },
    components: {
        PortfolioListItem
    },
    methods: {
        previous() {
            if(this.stepChapter > 1) {
                this.stepChapter--;
            }
        },
        next() {
            if(this.stepChapter < this.items.length) {
                this.stepChapter++;
            }
        },
        swipe(direction) {
            if(direction === 'Left') {
                this.next();
            } else if(direction === 'Right') {
                this.previous();
            }
        }
    }
}
</script>

<style scoped>
    .background {
        height: 105vh;
        width: 100vw;
        background-image: url('../../assets/backgrounds/bg-portfolio.jpg');
        background-size: cover;
    }

    @media only screen and (max-width: 600px) {
        .background {
            height: 110vh;
        }
    }
</style>