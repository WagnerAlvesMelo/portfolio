<template>
  <Section classe="skills">
    <h3 class="title skills__title">Habilidades</h3>
    <div class="skills__carrousel">
      <carousel :nav="false" :margin=20 :key="key" :responsive="{0:{items:2,nav:false},600:{items:5,nav:false}, 1366:{items:6,nav:false}}">
        <div data-aos="zoom-in" :data-aos-duration="1000 + index * 300" class="skills__carrousel__item" v-for="(item, index) in items" :key="item.name">
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
          name: 'REACT JS',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="125.2" height="111.8" viewBox="0 0 125.2 111.8">
              <g id="react-icon" transform="translate(-1.4 -8.1)">
                <circle id="Elipse_3" data-name="Elipse 3" cx="11.4" cy="11.4" r="11.4" transform="translate(52.6 52.6)" fill="#fff"/>
                <path id="Caminho_24" data-name="Caminho 24" d="M107.3,45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4,1.1-4.8,1.5-7.1,2.1-13.2-.2-22.5-6.6-26.1a12.422,12.422,0,0,0-6.4-1.6C81.9,8.1,73,13.3,64,22,55,13.3,46.1,8.1,39.1,8.1a12.422,12.422,0,0,0-6.4,1.6c-6.4,3.7-8.7,13-6.6,26.1.4,2.3.9,4.7,1.5,7.1a69.738,69.738,0,0,0-6.9,2.3C8.2,50,1.4,56.6,1.4,64S8.3,78,20.7,82.8c2.2.8,4.5,1.6,6.9,2.3-.6,2.4-1.1,4.8-1.5,7.1-2.1,13.2.2,22.5,6.6,26.1a12.422,12.422,0,0,0,6.4,1.6c7.1,0,16-5.2,24.9-13.9,9,8.7,17.9,13.9,24.9,13.9a12.422,12.422,0,0,0,6.4-1.6c6.4-3.7,8.7-13,6.6-26.1-.4-2.3-.9-4.7-1.5-7.1a69.737,69.737,0,0,0,6.9-2.3C119.8,78,126.6,71.4,126.6,64S119.8,50,107.3,45.2ZM92.5,14.7c4.1,2.4,5.5,9.8,3.8,20.3a60.218,60.218,0,0,1-1.4,6.6,118.8,118.8,0,0,0-16.5-2.5A144.284,144.284,0,0,0,68,26.1c7.4-7.3,14.9-12.3,21-12.3a6.756,6.756,0,0,1,3.5.9ZM81.3,74c-1.8,3.2-3.9,6.4-6.1,9.6-3.7.3-7.4.4-11.2.4-3.9,0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10,1.6-3.3,3.4-6.7,5.3-10,1.8-3.2,3.9-6.4,6.1-9.6,3.7-.3,7.4-.4,11.2-.4,3.9,0,7.6.1,11.2.4q3.3,4.8,6,9.6c1.9,3.3,3.7,6.7,5.3,10C84.9,67.3,83.2,70.6,81.3,74Zm8.3-3.3c1.5,3.5,2.7,6.9,3.8,10.3-3.4.8-7,1.4-10.8,1.9,1.2-1.9,2.5-3.9,3.6-6,1.2-2.1,2.3-4.2,3.4-6.2ZM64,97.8c-2.4-2.6-4.7-5.4-6.9-8.3,2.3.1,4.6.2,6.9.2s4.6-.1,6.9-.2C68.7,92.4,66.4,95.2,64,97.8Zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9,1.1-3.3,2.3-6.8,3.8-10.3,1.1,2,2.2,4.1,3.4,6.1,1.2,2.2,2.4,4.1,3.6,6.1Zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3,3.4-.8,7-1.4,10.8-1.9-1.2,1.9-2.5,3.9-3.6,6C40.6,53.2,39.5,55.3,38.4,57.3ZM64,30.2c2.4,2.6,4.7,5.4,6.9,8.3-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9,4.5-5.7,6.9-8.3Zm22.2,21-3.6-6c3.8.5,7.4,1.1,10.8,1.9-1.1,3.3-2.3,6.8-3.8,10.3C88.5,55.3,87.4,53.2,86.2,51.2ZM31.7,35c-1.7-10.5-.3-17.9,3.8-20.3a6.756,6.756,0,0,1,3.5-.9c6,0,13.5,4.9,21,12.3a131.453,131.453,0,0,0-10.4,13,135.957,135.957,0,0,0-16.5,2.5c-.6-2.3-1-4.5-1.4-6.6ZM7,64c0-4.7,5.7-9.7,15.7-13.4a59.957,59.957,0,0,1,6.4-2.1,145.757,145.757,0,0,0,6,15.6,126.01,126.01,0,0,0-6,15.5C15.3,75.6,7,69.6,7,64Zm28.5,49.3c-4.1-2.4-5.5-9.8-3.8-20.3a60.216,60.216,0,0,1,1.4-6.6,118.805,118.805,0,0,0,16.5,2.5,144.284,144.284,0,0,0,10.4,13c-7.4,7.3-14.9,12.3-21,12.3a6.756,6.756,0,0,1-3.5-.9ZM96.3,93c1.7,10.5.3,17.9-3.8,20.3a6.756,6.756,0,0,1-3.5.9c-6,0-13.5-4.9-21-12.3a131.453,131.453,0,0,0,10.4-13,135.956,135.956,0,0,0,16.5-2.5C95.5,88.7,95.9,90.9,96.3,93Zm9-15.6a59.955,59.955,0,0,1-6.4,2.1,145.756,145.756,0,0,0-6-15.6,126.01,126.01,0,0,0,6-15.5c13.8,4,22.1,10,22.1,15.6C121,68.7,115.2,73.7,105.3,77.4Z" fill="#fff"/>
              </g>
            </svg>
          `
        },
        {
          name: 'Vue JS',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="110.141" viewBox="0 0 128 110.141">
              <g id="vuejs-icon" transform="translate(0 -8.934)">
                <path id="Caminho_26" data-name="Caminho 26" d="M0,8.934l49.854.159,14.167,24.47L78.453,9.092,128,8.935,64.166,119.075Zm126.98.637-24.36.021L64.144,75.644,25.691,9.592.942,9.572l63.211,107.89Zm-25.149-.008-22.745.168L64.033,34.378,49.216,9.731,26.422,9.563,64.153,74.039ZM26,9.393,49,9.4M26,9.393,49,9.4" fill="none"/>
                <path id="Caminho_27" data-name="Caminho 27" d="M26,9.393,49,9.4,64.035,34.36,79.018,9.4,102,9.4,64.15,75.053Z" fill="#fff"/>
                <path id="Caminho_28" data-name="Caminho 28" d="M.911,9.569,25.977,9.4,64.128,75.055,101.98,9.4l25.11.026L64.124,117.488Z" fill="#fff"/>
              </g>
            </svg>
          `
        },
        {
          name: 'Angular',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="118.894" height="125.948" viewBox="0 0 118.894 125.948">
              <path id="angularjs-icon" d="M52.864,64h23.28L63.769,38.123ZM63.81,1.026,4.553,21.88l9.363,77.637,49.957,27.457,50.214-27.828,9.36-77.635L63.81,1.026ZM48.044,75,40.779,93.176,27.2,93.232,63.806,12.153,63.736,12h-.064v-.133l.063.133h.141L64,11.726V12h-.124l-.069.153L102,93.57l-13.074-.287L80.88,74.7l-17.173.082" transform="translate(-4.553 -1.026)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'JQuery',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="124.571" height="120.005" viewBox="0 0 124.571 120.005">
              <path id="jquery-icon" d="M65.283,106.928c-.828-.187-1.633-.446-2.441-.685l-.609-.185q-1.185-.363-2.352-.765l-.323-.117c-.7-.245-1.388-.5-2.074-.769l-.582-.229c-.752-.3-1.5-.607-2.238-.931l-.447-.2c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.173-.646-1.751-.982L47,99.343c-.769-.452-1.529-.921-2.28-1.4l-.615-.41c-.546-.351-1.088-.709-1.623-1.079l-.523-.367q-.774-.547-1.534-1.109l-.679-.514c-.464-.355-.927-.713-1.384-1.082l-.617-.5c-.581-.479-1.156-.959-1.724-1.453l-.188-.159c-.614-.539-1.217-1.092-1.812-1.647l-.51-.491c-.441-.42-.875-.843-1.3-1.277l-.51-.509q-.814-.834-1.6-1.69l-.078-.084c-.553-.6-1.092-1.221-1.621-1.844l-.424-.5q-.593-.712-1.167-1.442l-.427-.532c-.459-.6-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.8-58.2L9.625,32.181C-1.4,48.032-.031,68.657,8.394,85.5c.2.4.411.8.617,1.2l.4.759.245.437.439.786q.393.691.805,1.379l.458.756c.3.491.615.976.934,1.46l.4.614c.438.655.888,1.309,1.352,1.951l.039.05.228.308c.4.553.814,1.1,1.232,1.639l.463.59q.559.7,1.139,1.4l.435.52c.518.61,1.047,1.217,1.586,1.812l.032.033.062.068c.526.575,1.066,1.137,1.612,1.7l.517.521c.423.426.853.845,1.287,1.262l.526.5c.58.547,1.166,1.083,1.764,1.607l.028.022.307.262c.526.456,1.062.909,1.6,1.353l.664.529q.661.531,1.336,1.044l.714.543q.743.547,1.5,1.075l.546.387.15.107c.478.329.967.646,1.456.963l.63.42c.749.474,1.51.943,2.278,1.4l.63.355q.847.489,1.711.959c.312.168.632.327.946.488.407.213.811.429,1.225.636l.283.137.5.242c.641.306,1.287.607,1.94.9l.41.184q1.122.491,2.263.941l.551.217c.7.271,1.418.539,2.135.791l.268.093c.786.275,1.581.53,2.381.779l.575.172a23.224,23.224,0,0,0,2.458.693c53.339,9.727,68.833-32.053,68.833-32.053-13.014,16.954-36.112,21.426-58,16.447ZM46.069,63.7a28.013,28.013,0,0,0,4.1,5.127c.575.633,1.176,1.251,1.79,1.858l.472.465c.6.578,1.2,1.146,1.828,1.7l.074.064.018.018c.693.608,1.408,1.191,2.135,1.767l.484.378c.729.559,1.472,1.107,2.233,1.631l.065.049c.336.232.679.448,1.02.672l.482.319c.544.349,1.1.689,1.656,1.015l.234.136c.483.278.973.552,1.463.818l.521.271c.339.177.678.358,1.024.53l.155.07c.7.346,1.411.68,2.136,1l.472.194c.578.246,1.163.486,1.75.71l.75.275c.533.2,1.068.378,1.608.559l.727.233a17.794,17.794,0,0,0,2.324.672c41.183,6.823,50.69-24.886,50.69-24.886-8.57,12.343-25.168,18.233-42.879,13.635-.787-.207-1.562-.431-2.333-.674l-.7-.227q-.822-.266-1.632-.562l-.736-.274c-.591-.228-1.176-.462-1.756-.708l-.473-.2q-1.09-.474-2.148-1c-.364-.177-.721-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.106-.661-1.65-1.008l-.5-.332c-.358-.232-.717-.469-1.069-.707-.759-.524-1.5-1.072-2.226-1.628l-.5-.4A49.66,49.66,0,0,1,47.476,39.462c-3.062-9.836-2.4-20.878,2.9-29.84l-6.517,9.2C35.885,30.3,36.319,45.666,42.541,57.805A50.37,50.37,0,0,0,46.069,63.7ZM89.476,49.5c.339.125.678.237,1.022.354l.451.143a13.08,13.08,0,0,0,1.467.424c22.739,4.394,28.908-11.669,30.549-14.034-5.4,7.779-14.482,9.646-25.623,6.942-.88-.213-1.848-.531-2.7-.832a32.575,32.575,0,0,1-8.813-4.753C75.864,30.177,69.671,15.748,76.176,4l-3.52,4.851A24,24,0,0,0,70.755,32,32.617,32.617,0,0,0,89.476,49.5Z" transform="translate(-1.714 -3.997)" fill="#fff"/>
            </svg>
          `
        },
        {
          name: 'Next JS',
          content: `
            <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/landscape/nextjs.png" />
          `
        },
         {
          name: 'Typescript',
          content:`
            <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125">
              <path id="typescript-icon" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.339,9.339,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87a31.66,31.66,0,0,1,9.49.26ZM73.39,64.15v5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1H73.33Z" transform="translate(-2 -1.41)" fill="#fff"/>
            </svg>
          `
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .skills__title{
    margin-top: 128px;
    @include d(m){
      margin-top: 64px;
    }
  }
  .skills__carrousel{
    margin-top: 128px;
    padding-bottom: 128px;
    @include d(m){
      margin-top: 64px;
    }
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      &__box{
        width: 100%;
        padding: 60px 0;
        display: flex;
        justify-content: center;
        height: 250px;
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
