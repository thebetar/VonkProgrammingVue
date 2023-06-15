<template>
  <div
    class="vonk-programming-background vonk-programming-background-gradient"
  >
    <div class="tech-row-container">
      <div class="tech-row-header">
        My arsenal
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
            :width="$vuetify.display.mobile ? 40 : 80"
            :alt="skill.name"
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
          name: 'Material design',
          url: 'material-design',
          reference: 'https://material.io/',
        },
        {
          name: 'Typescript',
          url: 'typescript',
          reference: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Sass',
          url: 'sass',
          reference: 'https://sass-lang.com/',
        },
        {
          name: 'Linux',
          url: 'linux',
          reference: 'https://www.linux.org/',
        },
        {
          name: 'Git',
          url: 'git',
          reference: 'https://git-scm.com/',
        },
        {
          name: 'ESLint',
          url: 'eslint',
          reference: 'https://eslint.org/',
        },
        {
          name: 'Stylelint',
          url: 'stylelint',
          reference: 'https://stylelint.io/',
        },
        {
          name: 'Puppeteer',
          url: 'puppeteer',
          reference: 'https://pptr.dev/',
        },
        {
          name: 'nginx',
          url: 'nginx',
          reference: 'https://www.nginx.com/',
        },
        {
          name: 'VSCode',
          url: 'vscode',
          reference: 'https://code.visualstudio.com/',
        },
        {
          name: 'Github',
          url: 'github',
          reference: 'https://github.com/thebetar'
        },
        {
          name: 'StackOverflow',
          url: 'stackoverflow',
          reference: 'https://stackoverflow.com/users/10104786/lars-vonk'
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

<style lang="scss">
// eslint-disable-next-line vue-scoped-css/no-unused-selector
.tech-row {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 40px;
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
    max-width: 1260px;
    width: 100%;
    display: flex;
    padding-left: 60px;
    padding-right: 60px;
    justify-content: center;
    flex-wrap: wrap;
    gap:  30px;

    &-svg {
      height: 142px;
      width: 100%;
      max-width: 116px;
      padding: 8px;
      margin-left: 15px;
      margin-right: 15px;
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
        overflow-x: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 16px;
        line-height: 24px;

        @media screen and (width <= 600px) {
          font-size: 12px;
        }
      }

      @media screen and (width <= 960px) {
        margin-left: 7px;
        margin-right: 7px;
      }

      @media screen and (width <= 600px) {
        height: 100px;
        max-width: 70px;
      }
    }

    @media screen and (width <= 600px) {
      gap: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>