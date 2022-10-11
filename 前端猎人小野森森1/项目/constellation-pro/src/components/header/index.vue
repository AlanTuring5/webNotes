<template>
  <header class="header">
    <img src="@/assets/img/cons.png">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
    name:'MyHeader',
}
</script>

<style lang="scss" scoped>
header{
  background-color:#DD8095;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img{
    width: 30px;
    height: 30px;
  }

  h1{
    font-size: 20px;
    line-height: 20px;
    color: #fff;
  }
}
</style>