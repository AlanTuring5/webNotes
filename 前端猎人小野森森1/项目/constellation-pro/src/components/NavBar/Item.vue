<template>
  <!-- <div :class="['nav-item',{'nav-cur':index === curIdx}]" @click="navClick(index)">{{item}}</div> -->
<div class='nav-item' :data-index="index">{{item}}</div>
</template>

<script>
export default {
    props:{
        item:String,
        index:Number,
    },
}
</script>

<style lang="scss" scoped>
.nav-item{
    padding: 10px;
}
.nav-current{
    color:#DD8095;
}
</style>