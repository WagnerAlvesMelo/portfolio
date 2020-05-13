<template>
  <article
    class="timeline__item"
    :style="{gridTemplateAreas:  reverse ? `'cap sqr .'` : `'. sqr cap'`}"
    :class="reverse ? 'reverse':''"
  >
    <div :class="reverse ? 'timeline__item__sqr--reverse' : '' " class="timeline__item__sqr"></div>
    <div :class="reverse ? 'timeline__item__cap--reverse' : '' " class="timeline__item__cap">
      <p class="timeline__item__cap__title">Webdec Sistemas</p>
      <p class="timeline__item__cap__function">Desenvolvedor Fullstack - Jr</p>
      <p class="timeline__item__cap__date">2019-2020</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.timeline__item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  @include center(128px);

  &__sqr {
    grid-area: sqr;
    justify-self: center;
    width: 71px;
    height: 71px;
    background-image: url("../../assets/img/lozango.png");
  }

  &__sqr--reverse {
    justify-self: start;
  }

  &__cap {
    grid-area: cap;
    justify-self: start;
    text-align: center;
    @include font-corpo;
    line-height: 25px;
    margin-left: 8px;
    &__function {
      font-size: 0.875em;
    }

    &__date {
      font-size: 0.75em;
      line-height: 20px;
    }
  }

  &__cap--reverse {
    justify-self: end;
    margin-right: 8px;
  }

  .right .timeline__item__sqr {
    background: red;
  }
}
</style>