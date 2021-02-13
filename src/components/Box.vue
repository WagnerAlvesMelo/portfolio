<template>
  <div v-tilt="{speed: 200, perspective: 2000, max:10}" class="box">
    <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
  .box{
    background: linear-gradient(135deg, rgba(132,53,140,.20) 0%, rgba(28,0,31,.20) 100%);
    -webkit-box-shadow: 2px 3px 6px 0px rgba(97,38,128,0.5);
    -moz-box-shadow: 2px 3px 6px 0px rgba(97,38,128,0.5);
    box-shadow: 2px 3px 5px 0px rgba(97,38,128,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
