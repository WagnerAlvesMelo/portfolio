<template>
  <Section classe="whatido">
    <h3 class="title whatido__title">O que faço</h3>
    <div class="whatido__items">
      <Box class="whatido__items__box" data-aos="flip-right">
        <div>
          <ComputerIcon/>
        </div>
        <h5 class="whatido__items__box__title">Websites responsivos</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's</p>
      </Box>
      <Box class="whatido__items__box" data-aos="flip-right">
        <DesignIcon/>
        <h5 class="whatido__items__box__title">Sites personalizados do seu jeito</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's</p>
      </Box>
      <Box class="whatido__items__box" data-aos="flip-right" >
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
  .whatido__title{
    margin-top: 128px;
    @include d(m){
      margin-top: 128px;
    }
  }
  .whatido__items{
    margin-top: 128px;
    display: grid;
    grid-template-columns: repeat(3,  1fr);
    gap: 128px;
    @include d(m){
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      margin-top: 64px;
      gap: 64px;
    }
    @include d(t){
     gap: 32px;
    }
    &__box{
      display: flex;
      justify-content: center;
      padding-top: 15%;
      padding-bottom: 20%;
      @include d(l){
        padding-top: 15%;
        padding-bottom: 15%;
        padding-right: 16px;
        padding-left: 16px;
      }
      @include d(t){
        padding-top: 100px;
      }
      @include d(m){
        padding-top: 5%;
        padding-bottom: 5%;
      }
      &__title{
        margin-top: 64px;
        font-weight: 400;
        @include d(l){
          font-size: 16px;
        }
        @include d(m){
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, 1fr);
          gap: 15px;
          margin-top: 64px;
          font-size: 16px;
        }
      }
      &__text{
        max-width: 440px;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
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
