<template>
  <div class="timeline">
    <Event data-aos="fade-right" :reverse="true" class="timeline__event" desc="Webdec Sistemas" func="Desenvolvedor Fullstack - Jr" date="2019-2020" />
    <div data-aos="fade-up" class="timeline__divisor"/>
    <Event data-aos="fade-left" :reverse="false" class="timeline__event" desc="Redfox Soluções Digitais" func="Desenvolvedor Fullstack" date="2020 - atualmente"/>
  </div>
</template>

<script>
import Event from "./Event";
export default {
  components: { Event }
};
</script>

<style lang="scss">
  .timeline{
    .timeline__event{
      &:first-of-type{
        margin-top: 64px;
      }
    }
    .timeline__divisor{
      min-height: 128px;
      max-height: 100%;
      background:#707070;
      width: 1px;
      margin-left: 50%;
    }
  }
</style>
