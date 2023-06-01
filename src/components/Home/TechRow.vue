<template>
  <div
    class="vonk-programming-background vonk-programming-background-gradient"
  >
    <div class="tech-row-container">
      <div class="tech-row-header">
        Tech die ik gebruik
      </div>
      <div class="tech-row-svg-row">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="tech-row-svg-row-svg"
          @click="goTo(skill.reference)"
        >
          <v-img
            :src="`/assets/svg/${skill.url}.svg`"
            width="80"
          />
          <div class="tech-row-svg-row-svg-text">
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TechRow',
  data() {
    return {
      skills: [
        {
          name: 'Vue',
          url: 'vue',
          reference: 'https://vuejs.org/',
        },
        {
          name: 'React',
          url: 'react',
          reference: 'https://reactjs.org/',
        },
        {
          name: 'node.js',
          url: 'nodejs',
          reference: 'https://nodejs.org/en/',
        },
        {
          name: 'Ionic',
          url: 'ionic',
          reference: 'https://ionicframework.com/',
        },
        {
          name: 'express.js',
          url: 'express',
          reference: 'https://expressjs.com/',
        },
        {
          name: 'Nest.js',
          url: 'nestjs',
          reference: 'https://nestjs.com/',
        },
        {
          name: 'MongoDB',
          url: 'mongodb',
          reference: 'https://www.mongodb.com/',
        },
        {
          name: 'Prisma.js',
          url: 'prisma',
          reference: 'https://www.prisma.io/',
        },
        {
          name: 'Docker',
          url: 'docker',
          reference: 'https://www.docker.com/',
        },
        {
          name: 'jest',
          url: 'jest',
          reference: 'https://jestjs.io/',
        },
        {
          name: 'Cypress',
          url: 'cypress',
          reference: 'https://www.cypress.io/',
        },
        {
          name: 'Tailwind',
          url: 'tailwind',
          reference: 'https://tailwindcss.com/',
        },
        {
          name: 'Typescript',
          url: 'typescript',
          reference: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Linux',
          url: 'linux',
          reference: 'https://www.linux.org/',
        },
        {
          name: 'Puppeteer',
          url: 'puppeteer',
          reference: 'https://pptr.dev/',
        }
      ]
    }
  },
  methods: {
    goTo(url: string) {
      window.open(url, '_blank');
    }
  }
})
</script>

<style lang="scss" scoped>
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.tech-row {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 20px;
    min-height: 400px;
  }

  &-header {
    font-size: 50px;
    font-weight: 700;
    text-align: center;

    @media screen and (width <= 600px) {
      font-size: 32px;
    }
  }

  &-svg-row {
    margin-top: 60px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:  30px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;

    &-svg {
      height: 142px;
      width: 100%;
      max-width: 116px;
      padding: 8px;
      margin-left: 30px;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;  
      border: 1px #333 solid;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: rgb(255, 255, 255, 0.2)
      }

      &-text {
        margin-top: 10px;
      }

      @media screen and (width <= 600px) {
        margin: 0;
      }
    }

    @media screen and (width <= 600px) {
      gap: 18px;
    }
  }
}
</style>