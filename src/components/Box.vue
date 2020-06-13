<template>
  <div class="box">
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
    -webkit-box-shadow: 1px 2px 6px 0px rgba(255,255,255,.15);
    -moz-box-shadow: 1px 2px 6px 0px rgba(255,255,255,.15);
    box-shadow: 3px 4px 4px 0px rgba(255,255,255,.10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>