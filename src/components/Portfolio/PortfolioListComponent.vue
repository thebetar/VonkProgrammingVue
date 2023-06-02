<template>
  <div class="portfolio-list-container">
    <div class="portfolio-list-header-wrapper">
      <h1 class="portfolio-list-header">
        Portfolio
      </h1>
      <div class="portfolio-list-header-hint">
        Scroll naar beneden om mijn projecten te bekijken
      </div>

      <transition name="fade">
        <div
          v-if="!isScrolled"
          class="portfolio-list-header-arrow"
          @click="scrollDown"
        >
          <img
            height="40"
            width="40"
            src="/assets/svg/arrow-down.svg"
          >
        </div>
      </transition>
    </div>
    <div
      class="portfolio-list-item-wrapper"
    >
      <portfolio-list-item
        v-for="(item) in jobs"
        :key="item.title"
        :label="labels[item.color]"
        :item="item"
        :color="colors[item.color]"
        @click="onItemClick(item)"
      />
    </div>
    <transition name="fade">
      <portfolio-preview
        v-if="selectedJob"
        :label="labels[selectedJob.color]"
        :job="selectedJob"
        :color="colors[selectedJob.color]"
        @dismiss="selectedJob = null"
      />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import PortfolioListItem from './PortfolioListItemComponent.vue';
import PortfolioPreview from './PortfolioPreviewComponent.vue'

const SCROLL_OFFSET = 100;

export default defineComponent({
  components: {
    PortfolioListItem,
    PortfolioPreview
  },
  data() {
    return {
      isScrolled: window.scrollY > SCROLL_OFFSET,
      colors: ['#ff2d6a', '#183a7d', '#7d183a'],
      labels: ['Baan', 'Klant', 'Project'],
      stepChapter: 1,
      mobile: false,
      jobs: [
        {
          title: 'Student Aan Huis',
          description:
            'Aan het einde van het eerste jaar van mijn opleiding HBO-ICT ben ik begonnen bij StudentAanHuis. Hier hielp ik mensen met hun computer problemen. Dit ging van printers opnieuw instellen tot hele Windows systemen herstellen.',
          imageUrl: 'sah-logo-min.jpg',
          color: 0,
          link: 'https://www.studentaanhuis.nl/'
        },
        {
          title: 'Kookstudio Amsterdam',
          description:
            'Ik heb tijdens mijn tweede jaar van mijn opleiding een website gebouwd voor kookstudio Amsterdam met een eigen admin paneel gemaakt in PHP',
          imageUrl: 'kookstudio-min.jpg',
          color: 1,
          link: 'https://www.kookstudioamsterdam.nl/'
        },
        {
          title: 'Sanoma',
          description:
            'In het tweede jaar van mijn opleiding HBO-ICT heb ik het volledige jaar bij Sanoma Media stage gelopen. Sanoma Media was destijds nog onderdeel van Sanoma. Hier heb ik mij bezig gehouden met software voor advertising. Dit was in de talen PHP, CSS, MySQL en HTML.',
          imageUrl: 'sanoma-logo-min.jpg',
          color: 0,
          link: 'https://www.sanoma.com/'
        },
        {
          title: 'Innovative Cycling',
          description:
            'Aan het einde van het tweede jaar van mijn opleiding HBO-ICT ben ik begonnen bij het studenten programmeur uitzendbureau Kojac. Hier kreeg ik de opdracht bij Innovative cycling de websites te onderhouden en te updaten. Hier heb ik gebruik gemaakt van Javascript, PHP, CSS, MySQL en HTML.',
          imageUrl: 'kojac-logo-min.webp',
          color: 0,
          link: 'https://www.innovativecycling.com/'
        },
        {
          title: 'BijIngrid',
          description:
            'Ik heb voor Ingrid met mijn beginnende web development ervaring een website gemaakt om workshops op te geven. Deze website heeft een zelf gemaakt admin paneel gemaakt in PHP.',
          imageUrl: 'bijingrid-min.jpg',
          color: 1,
          link: 'https://www.bijingrid.nl/'
        },
        {
          title: 'Floriade',
          description:
            'In het derde jaar van mijn opleiding HBO-ICT heb ik stage gelopen voor het Floriade project. Dit was eerst voor de gemeente Almere en werd later verplaatst naar het Floriade gebouw. Hier heb ik mij met een team bezig gehouden met een van de onderdelen van de Floriade. Hier heb ik gebruik gemaakt van PHP, CSS, MySQL en HTML.',
          imageUrl: 'floriade-logo-min.jpg',
          color: 0,
          link: 'https://www.almere.nl/'
        },
        {
          title: 'MedWeb',
          description:
            'In het laatste jaar van mijn opleiding HBO-ICT heb ik stage gelopen bij het bedrijf Medweb B.V.. Dit is een software bedrijf die zich bezig houdt met een rooster applicatie specifiek gericht op medisch specialisten en artsen. Ik heb mij hier bezig gehouden met het vernieuwen van een van de onderdelen van hun applicatie "Medspace". Hier heb ik gebruik gemaakt van VueJS/Javascript, IBM Notes, IBM Domino designer, CSS en HTML.',
          imageUrl: 'medweb-logo-min.jpg',
          color: 0,
          link: 'https://www.medweb.nl/'
        },
        {
          title: 'Hoveniersbedrijf Wouters',
          description:
            'Ik heb voor HoveniersBedrijf Wouters na mijn opleiding een website gemaakt met een professionele uitstraling en een snelle interface. Deze website is volledig gebouwd met VueJS',
          imageUrl: 'hoveniersbedrijf-wouters-min.jpg',
          color: 1,
          link: 'https://www.hoveniersbedrijfwouters.nl/'
        },
        {
          title: 'Quintor',
          description:
            'Momenteel werk ik bij IT consultancy bedrijf Quintor. Dit bedrijf houdt zich bezig met het adviseren over en bouwen van software. Dit bij grote klanten als de ING, de overheid, etc. Bij dit bedrijf houdt ik mij bezig met mijn programmeervaardigheden verbeteren zodat deze aan de hoogst mogelijke standaard kunnen voldoen.',
          imageUrl: 'quintor-logo.webp',
          color: 0,
          link: 'https://www.quintor.nl/'
        },
        {
          title: 'Chary Solutions',
          description:
            'Ik heb voor Chary Solutions software gemaakt om hun advertising data uit hun Facebook business manager te halen en dit vervolgens te exporteren naar google sheets',
          imageUrl: 'chary-min.jpg',
          color: 1,
          link: 'https://www.chary.nl/'
        },
        {
          title: 'SVB',
          description:
            'Mijn eerste opdracht vanuit Quintor is bij de SVB, hier programmeer ik voornamelijk in Javascript in het framework Angular',
          imageUrl: 'SVB-min.jpg',
          color: 0,
          link: 'https://www.svb.nl/'
        },
        {
          title: 'J-Tax Automotive',
          description:
            'Ik heb voor J-Tax Automotive solutions maatwerk software gemaakt voor het maken van taxatie rapporten. De software van J-tax is gemaakt met behulp van Vue.js en ExpressJS',
          imageUrl: 'j-tax-min.webp',
          color: 1,
          link: 'https://www.j-taxautomotive.nl//'
        },
        {
          title: 'Klets',
          description:
            'Klets is een social media app die ik gemaakt heb met behulp van Ionic. Deze app is gemaakt om op basis van een onderwerp en een aangegeven afstand mensen te zoeken en kleine groepschat (max 5) te vormen. Klets is gemaakt met behulp van Ioinic',
          imageUrl: 'klets-min.jpg',
          color: 2,
          link: 'https://vonkprogramming.nl/'
        },
        {
          title: 'ING',
          description:
            'Bij de ING werk ik momenteel als full stack developer aan verschillende interfaces die gebruikt worden door de ING. Dit met het framework Lit element',
          imageUrl: 'ing-min.webp',
          color: 0,
          link: 'https://www.ing.nl/'
        },
        {
          title: 'P.51 Design en MarkantIT',
          description:
            'Samen met P.51 design en MarkantIT werk ik aan een website voor OOMT m.b.t. de Arbo catalogus. Dit project wordt gebouwd met React',
          imageUrl: 'p51design-min.jpg',
          color: 1,
          link: 'https://www.p51design.nl/'
        },
        {
          title: 'Automotive RS',
          description:
            "Voor Automotive RS heb ik een dashboard gemaakt waarin zij hun gekochte auto's kunnen invoeren en alles overzichtelijk kunnen bijhouden. Ook heeft dit dashboard een API om gegevens automatisch op te halen zover dit kan.",
          imageUrl: 'automotive-rs-min.jpg',
          color: 1,
          link: 'https://automotive-rs.com/'
        },
        {
          title: 'Deet',
          description:
            'Ik heb met de "Deet" app het idee gehad om voor mijzelf een app te maken die het makkelijker maakt om doelen in te plannen. Dit kunnen doelen zijn als meer lezen, bepaalde oefeningen in de sportschool of een cursus volgen. Deze app maakt het makkelijker om dit bij te houden.',
          imageUrl: 'deet-min.webp',
          color: 2,
          link: 'https://vonkprogramming.nl/'
        },
        {
          title: 'Fyndyr',
          description:
            'Ik ervaarde het probleem dat ik mijn vrienden wel eens kwijt raakte terwijl ik op een dance festival mij vermaakte. Daarom heb ik een app gemaakt die het makkelijker maakt om elkaar te vinden op een festival.',
          imageUrl: 'fyndyr-min.webp',
          color: 2,
          link: 'https://vonkprogramming.nl/'
        }
      ]
        .reverse(),
        selectedJob: null,
      achievements: [
        {
          certificate: 'Certified Scrum Master (CSM)',
          where: 'Scrum.org',
          year: 'December 2022'
        },
        {
          certificate:
            'NestJS Zero to Hero - Modern Typescript Back-end Development',
          where: 'Udemy',
          year: 'Juli 2022'
        },
        {
          certificate: 'Graph Developer - Associate',
          where: 'Apollo GraphQl',
          year: 'April 2022'
        },
        {
          certificate: 'The complete React Native + Hooks course',
          where: 'Udemy',
          year: 'April 2022'
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
          certificate: 'Javascript: Understanding the weirds parts',
          where: 'Udemy',
          year: 'Maart 2021'
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
          certificate: 'MongoDB - The Complete Developer Guide 2021',
          where: 'Udemy',
          year: 'Maart 2021'
        },
        {
          certificate: 'Nuxt.js - Vue.js on Steroids',
          where: 'Udemy',
          year: 'Maart 2021'
        },
        {
          certificate: 'AWS Certified Practitioner',
          where: 'Amazon Web Services',
          year: 'Februari 2021'
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
          certificate: 'Java Programming Masterclass for Software Developers',
          where: 'Udemy',
          year: 'September 2020'
        },
        {
          certificate: 'Learn and Understand NodeJS',
          where: 'Udemy',
          year: 'Juli 2020'
        },
        {
          certificate: `Bachelor's degree, HBO-ICT`,
          where: 'Windesheim Flevoland',
          year: 2020
        },
        {
          certificate:
            'Cambridge English level 2 Certificate ESOL International',
          where: 'Cambridge University',
          year: 2016
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    onItemClick(job) {
      this.selectedJob = job;
    },
    goToGithub() {
      window.open('https://github.com/thebetar', '_blank');
    },
    handleScroll() {
      if (window.scrollY > SCROLL_OFFSET) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    },
  }
});
</script>

<style lang="scss" scoped>
.portfolio-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio-list-item-wrapper {
  padding-top: 80px;
  padding-bottom: 120px;
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (width <= 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.portfolio-list-header {
  position: relative;
  max-width: 700px;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;

  &-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-hint {
    margin-top: 10px;
    font-size: 11px;
  }

  &-arrow {
    position: absolute;
    top: calc(100vh - 50px);
    left: calc(50% - 20px);
    background-image: url('/assets/svg/arrow-down.svg');
    animation: bobble 1.5s infinite;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
}

@keyframes bobble {
  50% {
    transform: translateY(-10px);
  }
}
</style>
