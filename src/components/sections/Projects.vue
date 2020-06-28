<template>
  <Section classe="projects">
    <h3 class="title projects__title">Projetos</h3>
    <div class="projects__items">
      <Box v-for="rep in myRepos" @click="windowOpen('a')" class="projects__items__item" :key="rep.id">
        <svg xmlns="http://www.w3.org/2000/svg" class="projects__items__item__icon" width="256.331" height="250" viewBox="0 0 256.331 250">
          <g id="github-icon" transform="translate(-3.612 -5.103)">
            <path id="Caminho_33" data-name="Caminho 33" d="M131.777,5.1A128.18,128.18,0,0,0,91.259,254.885c6.4,1.188,8.755-2.78,8.755-6.165,0-3.056-.119-13.152-.174-23.862-35.656,7.753-43.179-15.122-43.179-15.122-5.83-14.814-14.23-18.753-14.23-18.753-11.63-7.955.877-7.789.877-7.789,12.868.9,19.647,13.207,19.647,13.207,11.431,19.589,29.982,13.927,37.3,10.654,1.15-8.284,4.472-13.94,8.137-17.14-28.467-3.237-58.394-14.228-58.394-63.337A49.611,49.611,0,0,1,63.2,92.175c-1.333-3.226-5.72-16.261,1.239-33.915,0,0,10.76-3.445,35.252,13.137a121.471,121.471,0,0,1,64.191,0c24.462-16.582,35.21-13.137,35.21-13.137,6.976,17.652,2.589,30.689,1.259,33.915a49.512,49.512,0,0,1,13.19,34.4c0,49.226-29.982,60.063-58.522,63.238,4.6,3.977,8.7,11.779,8.7,23.734,0,17.149-.149,30.95-.149,35.172,0,3.411,2.309,7.407,8.8,6.148A128.181,128.181,0,0,0,131.777,5.105Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
            <path id="Caminho_34" data-name="Caminho 34" d="M28.3,92.953c-.282.637-1.284.828-2.2.393-.934-.416-1.454-1.284-1.152-1.923.276-.658,1.28-.838,2.207-.4.934.418,1.464,1.295,1.14,1.931Zm-1.577-1.167,6.768,6.959c-.609.567-1.8.3-2.615-.594-.84-.891-1-2.086-.376-2.661s1.791-.3,2.632.594,1,2.088.361,2.664Zm-1.22-1.312,6.276,8.691c-.785.548-2.071.036-2.865-1.1s-.785-2.511.021-3.056,2.059-.053,2.865,1.076c.781,1.157.781,2.526-.021,3.082Zm0,0,6.921,7.133c-.7.775-2.2.567-3.294-.488-1.118-1.034-1.43-2.5-.728-3.277s2.218-.56,3.319.488c1.118,1.031,1.456,2.5.707,3.275Zm0,0,9.551,4.141c-.312,1-1.751,1.46-3.2,1.031s-2.4-1.613-2.1-2.627,1.747-1.486,3.209-1.029C54.371,115.21,55.32,116.378,55.019,117.4Zm0,0,10.491.766c.036,1.057-1.195,1.931-2.717,1.953S60.017,119.3,60,118.256c0-1.068,1.205-1.931,2.738-1.961s2.772.821,2.772,1.868Zm0,0,9.759-1.66c.183,1.029-.877,2.088-2.39,2.371-1.486.276-2.865-.365-3.056-1.386-.183-1.057.9-2.116,2.381-2.39,1.515-.261,2.874.361,3.065,1.407Zm0,0" transform="translate(23.854 96.164)" fill="#fff"/>
          </g>
        </svg>
        <p class="projects__items__item__desc">{{rep.description}}</p>
        <button type="button" class="projects__items__item__btn">Visualizar no Github</button>
      </Box>
    </div>
  </Section>
</template>

<script>
import Box from "../Box";
import axios from 'axios'
export default {
  components:{
    Box
  },
  data: function(){
    return {
      myRepos: null,
      selectedReposId: [268168023, 249076839, 275088309, 263653496, 251094605]
    }
  },
  async mounted(){

    let myRepositoryGet = await axios.get('https://api.github.com/users/WagnerAlvesMelo/repos')
    myRepositoryGet = myRepositoryGet.data

    let quantumRepositoryGet = await axios.get('https://api.github.com/users/quantum01-pi/repos')
    quantumRepositoryGet = quantumRepositoryGet.data

    this.myRepos = myRepositoryGet.concat(quantumRepositoryGet)
      .filter(value=>this.selectedReposId.indexOf(value.id) != -1)
  },
  methods: {
    windowOpen(url){
      console.log(url)
    }
  }
}
</script>

<style lang="scss">
  .projects__title{
    margin-top: 310px !important;
    @include d(m){
      margin-top: 32px !important;
    }
  }
  .projects__items{
    margin-top: 224px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include d(l){
      grid-template-columns: repeat(2, 1fr);
    }
    @include d(t){
      grid-template-columns: repeat(1, 1fr);
    }
    @include d(m){
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-top: 224px;
    }

    &__item{
      min-height: 250px;
      position: relative;
      &__icon{
        opacity: 0.1;
        position: absolute;
        left: 0;
        @include d(m){
          width: 40vw;
          left: auto;
        }
      }
      &__desc{
        text-align: right;
        padding-top: 32px;
        font-weight: 300;
        position:absolute;
        right: 32px;
        @include d(m){
          position:relative;
          right: 0px;
          text-align: center;
        }
      }
      &__btn{
        padding: 14px 26px;
        position: absolute;
        font-weight: 400;
        bottom: 32px;
        right:32px;
        font-size:24px;
        font-family: poppins;
        border-radius: 5px;
        cursor: pointer;
        border:none;
        background:white;
        color: #2C0230;
        transition: 0.2s;
        &:hover{
          background: #2C0230;
          color:white;
        }
        @include d(m){
          right: auto;
          font-size: 16px;
          padding:initial;
          width: 95%;
          padding: 5px 0px;
          border-radius: 3px;
        }
      }
    }
  }

</style>