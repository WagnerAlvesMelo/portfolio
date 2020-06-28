<template>
  <Section classe="intro">
    <div class="intro__apresentacao">
      <p class="intro__apresentacao__apoio">Olá, eu sou</p>
      <p class="intro__apresentacao__nome">Wagner Alves</p>
      <p class="intro__apresentacao__funcao">Desenvolvedor e UI Designer</p>
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

    &__apoio,
    &__funcao {
      font-size: 2em;
      font-weight: 300;
    }

    &__apoio {
      margin-bottom: 8px;
    }

    &__nome {
      font-size: 4em;
    }

    &__funcao {
      margin-top: 16px;
    }
  }
}
</style>
