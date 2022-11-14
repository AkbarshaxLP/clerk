<template>
  <div class="s-progress">
    <section :style="{width: `${percent}%`}"></section>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['percent'],
    data () {
      return {
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped="">
$height: 10px;
.s-progress {
  height: $height;
  width: 100%;
  background: #D4FDF3;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  section {
    border-radius: 6px;
    background-color: #00C48C;
    height: $height;
  }
}
</style>