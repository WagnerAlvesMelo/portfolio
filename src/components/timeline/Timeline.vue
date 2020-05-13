<template>
  <div>
    <Event :reverse="true" />
    <Event :reverse="false" />
    <template />
  </div>
</template>

<script>
import Event from "./Event";
export default {
  components: { Event }
};
</script>

<style>
</style>