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
  max-height: 100vh;
  min-height: 1080px;
  display: block;
  padding: 0 140px !important;
}
</style>
