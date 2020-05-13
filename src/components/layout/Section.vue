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

<style>
section {
  width: 100vw;
  height: 100vh;
  display: block;
  padding: 0 140px !important;
}
</style>
