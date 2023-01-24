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
                            !isMobile
                                ? { margin: '20px 0' }
                                : {
                                      paddingBottom: '0px',
                                      display: 'flex',
                                      justifyContent: 'center'
                                  }
                        "
                    >
                        <img
                            :src="require('@/assets/svg/programming.svg')"
                            :height="isMobile ? 200 : 400"
                            :width="isMobile ? 200 : 400"
                        />
                    </v-col>
                    <v-col
                        offset="0"
                        cols="12"
                        md="6"
                        class="d-flex flex-column"
                        :style="!isMobile ? {} : { paddingTop: '0px' }"
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
                        afgestemd op uw behoeften. Wij hebben de kennis in huis
                        om voor elk probleem een oplossing te bieden.
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="6" align="center">
                    <v-hover v-slot="{ hover }">
                        <v-card
                            :elevation="hover ? 12 : 2"
                            class="pa-4 d-flex flex-column align-center card-size"
                            :class="{ 'card-hover': hover }"
                        >
                            <img
                                :src="require('@/assets/svg/process.svg')"
                                class="p-4"
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
                                        er een product ontwerp gemaakt. Door
                                        middel van schetsen van schermontwerpen.
                                        Gedurende dit proces is het belangrijk
                                        dat de klant tevreden is met het ontwerp
                                        en dat de voorgestelde uitwerking het
                                        gestelde probleem zal oplossen.
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
                                        eruit gefilterd worden.
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
                            <img
                                :src="require('@/assets/svg/webpage.svg')"
                                width="150"
                                height="150"
                            />
                            <v-card-title class="title">
                                Webapplicatie Development
                            </v-card-title>
                            <v-card-text class="body-2">
                                <p>
                                    VonkProgramming maakt gebruik van de
                                    nieuwste technieken in het maken van
                                    software en websites binnen het web. Onze
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
                                    <b>Samenvattend</b> voor
                                    <b>niet nerds</b> is dit een verzameling aan
                                    tools die gebruikt kan worden om een enorme
                                    hoeveelheid aan software oplossingen te
                                    maken. Wellicht ook voor uw probleem. 😉
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
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="12" align="center">
                        <img :src="require('@/assets/svg/idea.svg')" />
                        <h5 class="display-1 mt-4">Van idee naar website!</h5>
                        <p class="body-1 mt-4">
                            VonkProgramming heeft contact met verschillende
                            ontwerpers om uw idee perfect vorm te geven. Hierbij
                            wordt er rekening gehouden met
                            <span class="highlight">responsiviteit</span>,
                            <span class="highlight">schaalbaarheid</span> en
                            <span class="highlight">SEO</span>.<br />
                            VonkProgramming richt zich op een flexibele aanpak.
                            Van software solutions tot simpele portfolio
                            websites.
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col
                        cols="12"
                        sm="12"
                        md="6"
                        class="d-flex flex-column justify-center align-center text-center"
                    >
                        <h6 class="title">Frameworks</h6>
                        <p class="body-2">
                            VonkProgramming maakt gebruik van de nieuwste
                            JavaScript frameworks. Dit houdt in dat uw
                            applicatie snel en schaalbaar is met behulp van de
                            nieuwste web development technieken. Dit betekend
                            dat als u later uw website wilt uitbreiden dit
                            minder tijd kost doordat hier rekening mee wordt
                            gehouden binnen de frameworks. (Ionic, Vue en
                            React).
                        </p>
                        <div class="d-flex justify-between ">
                            <img
                                :src="require('@/assets/svg/ionic.svg')"
                                class="mx-2"
                            />
                            <img
                                :src="require('@/assets/svg/vue.svg')"
                                class="mx-2"
                            />
                            <img
                                :src="require('@/assets/svg/react.svg')"
                                class="mx-2"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        md="6"
                        class="d-flex flex-column justify-center align-center text-center"
                    >
                        <h6 class="title">Andere oplossingen</h6>
                        <p class="body-2">
                            Naast websites en webapps biedt VonkProgramming ook
                            mogelijkheden binnen NodeJS. Hiermee kan ook server
                            software worden gemaakt.
                        </p>
                        <div class="d-flex justify-between ">
                            <img
                                :src="require('@/assets/svg/nodejs.svg')"
                                class="mx-2"
                            />
                            <img
                                :src="require('@/assets/svg/mongodb.svg')"
                                class="mx-2"
                            />
                            <img
                                :src="require('@/assets/svg/docker.svg')"
                                class="mx-2"
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-row class="wave-div">
            <wavey-divider-top></wavey-divider-top>
        </v-row>
        <v-container class="mb-8">
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="6"
                    class="d-flex flex-column justify-center text-center"
                >
                    <img
                        :src="require('@/assets/svg/portfolio.svg')"
                        height="80"
                    />
                    <h3 class="display-1">Portfolio</h3>
                    <p class="body-1">
                        Naast een mooi verhaal over hoe alles te werk gaat heb
                        ik ondertussen ook al een portfolio opgebouwd met een
                        aantal bekenden en wat minder bekende bedrijven.
                    </p>
                    <v-btn to="/portfolio" color="primary" class="my-2" large>
                        Ga naar portfolio pagina
                    </v-btn>
                    <v-btn to="/portfolio" color="secondary" class="my-2" large>
                        <img
                            :src="require('@/assets/svg/github.svg')"
                            height="16"
                            class="mr-2"
                        />
                        Mijn Github pagina
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import WaveyDividerBottom from '../shared/WaveyDividerBottom.vue';
import WaveyDividerTop from '../shared/WaveyDividerTop.vue';

export default {
    computed: {
        isMobile() {
            return window.innerWidth <= 800 || window.innerHeight <= 600;
        }
    },
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
    height: fit-content;
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
}
.wave-div-reverse {
    width: 100vw;
    height: 50vh;
}
@media only screen and (max-width: 600px) {
    .wave-div,
    .wave-div-reverse {
        display: none;
    }

    .row {
        padding: 2rem 0;
    }
}
</style>
