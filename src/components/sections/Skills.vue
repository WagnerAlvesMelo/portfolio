<template>
  <Section classe="skills">
    <h3 class="title skills__title">Habilidades</h3>
    <div class="skills__carrousel">
      <carousel :nav="false" :margin=20 :key="key" :responsive="{0:{items:1,nav:false},600:{items:5,nav:false}, 1366:{items:6,nav:false}}">
        <div class="skills__carrousel__item" v-for="item in items" :key="item.name">
          <Box class="skills__carrousel__item__box" v-html="item.content"/>
          <p class="skills__carrousel__item__title">{{item.name}}</p>
        </div>
      </carousel>
    </div>
  </Section>
</template>

<script>
import Section from "../layout/Section.vue";
import Box from "../Box";
import Html from '../icons/Html'
import carousel from 'vue-owl-carousel'

export default {
  components: { Section, Box, carousel  },
  data(){
    return{
      key: 0,
      items:[
        {
          name: 'HTML5',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'CSS3',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Javascript',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'REACT JS',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'VueJS',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Angular',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'NodeJS',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Sass',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'PHP',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Laravel',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Adobe XD',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'MySQL',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'MongoDB',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'TDD',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Jest',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="130" viewBox="0 0 114 130">
              <path id="Html_5" data-name="Html 5" d="M9.032,2,19.407,119.051,65.963,132l46.684-12.935L123.032,2h-114Zm92.421,27.713L100.8,37.2l-.286,3.434H45.9l1.3,14.619h52.01L98.87,58.88,95.517,96.6l-.247,2.37-29.238,8.092v0L66,107.08,36.778,99.328,34.794,77.184H49.12l1.015,11.4,15.852,4.261h.045v-.57l15.923-4.046,1.663-18.356H34.157l-3.508-39.8-.341-4.055h71.487l-.342,3.7Z" transform="translate(-9.032 -2)" fill="#fff"/>
            </svg>
          `
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .skills__carrousel{
    margin-top: 224px;
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      &__box{
        width: 100%;
        padding: 60px 0; 
        display: flex;
        justify-content: center;
        @include d(l){
          padding: 20px 0; 
  	      svg{
            width: 7vw;
          }
        }
      }
      &__title{
        margin-top: 16px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 300;
      }
    }
  }

</style>