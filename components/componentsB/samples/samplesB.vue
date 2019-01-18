<template>
  <div class="button" @click="alert">this is samplesA component</div>
</template>

<script>
  import { UA } from '../../../utils/index.js'

  export default {
    methods: {
      alert () {
        alert(UA)
      }
    }
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
    color: red;
  }
  }

</style>