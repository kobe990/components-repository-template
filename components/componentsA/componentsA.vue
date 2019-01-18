<template>
  <div class="button">componentsA</div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .rounded {
    border-radius: 5px;
  }

  .button {
  & {
    width: 100px;
    height: 20px;
    color: yellow;
  }
  }

</style>