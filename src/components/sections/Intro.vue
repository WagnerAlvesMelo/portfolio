<template>
  <Section classe="intro">
    <div data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500" class="intro__apresentacao">
      <p class="intro__apresentacao__apoio" data-aos="fade-up" data-aos-duration="500">Olá, eu sou</p>
      <p class="intro__apresentacao__nome" data-aos="fade-up" data-aos-duration="750">Wagner Alves</p>
      <p class="intro__apresentacao__funcao" data-aos="fade-up" data-aos-duration="1000">Desenvolvedor Front-End</p>
    </div>
  </Section>
</template>

<script>
import Section from "../layout/Section.vue";

export default {
  components: { Section }
};
</script>

<style lang='scss'>
.intro {
  background: url("../../assets/img/bg1.png") no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100vh;

  &__apresentacao {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    @include d(m){
      width: calc(100% - 40px);
      text-align: center;
    }

    &__apoio,
    &__funcao {
      font-size: 2em;
      font-weight: 300;
      line-height: 48px;
    }

    &__apoio {
      margin-bottom: 8px;
    }

    &__nome {
      font-size: 4em;
      line-height: 73px;
    }

    &__funcao {
      margin-top: 16px;
    }
  }
}
</style>
