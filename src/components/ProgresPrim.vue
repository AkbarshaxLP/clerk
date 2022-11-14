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

<style type="text/css" lang="scss" scoped>
$height: 16px;
.s-progress {
  height: $height;
  width: 100%;
  background: #BFDEFF;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  section {
    border-radius: 6px;
    background-color: #0066FF;
    height: $height;

  }
}
</style>