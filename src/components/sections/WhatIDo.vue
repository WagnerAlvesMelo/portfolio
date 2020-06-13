<template>
  <Section classe="whatido">
    <h3 class="title whatido__title">O que faço</h3>
    <div class="whatido__items"> 
      <Box class="whatido__items__box">
        <div>
          <ComputerIcon/>
          <TabletIcon style="margin-left:46px"/>
        </div>
        <h5 class="whatido__items__box__title">Construção de websites responsivos</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s</p>
      </Box>
      <Box class="whatido__items__box">
        <DesignIcon/>
        <h5 class="whatido__items__box__title">Desenvolvimento back-end</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s</p>
      </Box>
      <Box class="whatido__items__box" >
        <DesignIcon/>
        <h5 class="whatido__items__box__title">Construção de interfaces</h5>
        <p class="whatido__items__box__text"> Lorem Ipsum is simply dummy text of the all printing
          and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s</p>
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
  components: { Section, Box, ComputerIcon, DesignIcon, TabletIcon }
}
</script>

<style lang='scss'>
  .whatido__items{
    margin-top: 224px;
    display: flex;
    justify-content: space-between;
    &__box{
      display: flex;
      justify-content: center;
      padding-top: 120px;
      padding-left: 32px;
      padding-right: 32px;
      &__title{
        margin-top: 32px;
        margin-bottom: 16px;
      }
      &__text{
        margin-bottom: 125px;
        max-width: 468px;
        text-align: center;
      }
    }
  }
</style>