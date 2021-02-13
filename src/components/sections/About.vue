<template>
  <Section classe="about">
    <h3 class="title about__title">Sobre mim</h3>
    <p class="about__resume" data-aos="zoom-out">
      Atuo como desenvolvedor de software front-end.
      Tenho experiência no desenvolvimento de sistemas e sites institucionais
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
    margin-top: 64px;
  }

  &__resume {
    @include font-corpo(1.5em);
    max-width: 635px;
    text-align: center;
    margin: 64px auto 0 auto;
    line-height: 36px;
    @include d(m){
      font-size: 15px;
      line-height: 22.5px;
      max-width: 400px;
    }
  }
}
</style>
