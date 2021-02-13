<template>
  <section :class="classe">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    classe: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss">
section {
  width: 100vw;
  display: block;
  padding: 0 140px !important;
  @include d(t){
    padding: 0 70px !important;
  }
  @include d(m){
    padding: 0 20px !important;
  }
    @include d(l){
    padding: 0 100px !important;
  }
}
</style>
