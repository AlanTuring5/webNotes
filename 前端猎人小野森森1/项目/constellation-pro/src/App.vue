<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/header'

export default{
    name:'App',
    components:{MyHeader}
}
</script>

<style lang="scss">
body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
</style>