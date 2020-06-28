<template>
  <Section classe="about">
    <h3 class="title about__title">Sobre mim</h3>
    <p class="about__resume">
      Atuo como desenvolvedor de software e designer de interfaces.
      Tenho experiência no desenvolvimento de sistemas e sites pessoais
      para web baseados em conceitos de UX e utilizando as mais atuais tecnologias do mercado.
    </p>
    <Timeline />
  </Section>
</template>

<script>
import Timeline from "../timeline/Timeline";
import Section from "../layout/Section.vue";
export default {
  components: { Timeline }
};
</script>

<style lang="scss">
.about {
  &__title {
    text-align: center;
  }

  &__resume {
    @include font-corpo(1.5em);
    max-width: 635px;
    text-align: center;
    margin: 128px auto 0 auto;
    line-height: 36px;
    @include d(m){
      font-size: 15px;
    }
  }
}
</style>