<template>
  <Section classe="whatido">
    <h3 class="title whatido__title">O que faço</h3>
    <div class="whatido__items"> 
      <Box class="whatido__items__box">
        <div>
          <ComputerIcon/>
        </div>
        <h5 class="whatido__items__box__title">Websites responsivos</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's</p>
      </Box>
      <Box class="whatido__items__box">
        <DesignIcon/>
        <h5 class="whatido__items__box__title">Desenvolvimento back-end</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's</p>
      </Box>
      <Box class="whatido__items__box" >
        <DesignIcon/>
        <h5 class="whatido__items__box__title">Construção de interfaces</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's</p>
      </Box>
    </div>
  </Section>
</template>

<script>
import Section from "../layout/Section.vue";
import Box from "../Box";
import ComputerIcon from '../icons/Computer'
import DesignIcon from '../icons/Design'
import TabletIcon from '../icons/Tablet'

export default {
  components: { Section, Box, ComputerIcon, DesignIcon}
}
</script>

<style lang='scss'>
  .whatido__items{
    margin-top: 224px;
    display: grid;
    grid-template-columns: repeat(3,  1fr);
    gap: 20px;
    @include d(m){
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
    }
    &__box{
      display: flex;
      justify-content: center;
      padding-top: 20%;
      padding-bottom: 25%;
      @include d(l){
        padding-top: 15%;
        padding-bottom: 15%;
        padding-right: 16px;
        padding-left: 16px;
      }
      @include d(t){
        padding-top: 100px;
      }
      &__title{
        margin-top: 32px;
        font-weight: 400;
        @include d(l){
          font-size: 16px;
        }
        @include d(m){
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, 1fr);
          margin-top: 32px;
        }
      }
      &__text{
        max-width: 468px;
        text-align: center;
        font-size: 19px;
        line-height: 28.5px;
        font-weight: 300;
        margin-top: 16px;
        @include d(l){
          font-size: 16px;
          line-height: 24px;
        }
        @include d(m){
          font-size: 15px;
          padding: 0 20px;
          max-width: initial;
        }
      }
    }
  }
</style>