<template>
  <div class="nav-item">{{item}}</div>
</template>

<script>
export default {
    props:{
        item:String,
    }
}
</script>

<style lang="scss" scoped>
.nav-item{
    padding: 10px;
}
</style>