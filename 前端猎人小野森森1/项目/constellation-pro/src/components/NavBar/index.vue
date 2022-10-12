<template>
  <div class="nav-bar">
    <div class="scrow-wrapper">
        <div class="nav-wrapper" :style="`width:${navData.length*68}px`">
            <nav-item v-for="(item,index) of navData" :key="index" :item="item"></nav-item>
        </div>
    </div>
  </div>
</template>

<script>
import navData from '@/datas/nav'
import NavItem from './Item.vue'
export default {
    name:'NavBar',
    components: { NavItem },
    setup(){
        return {
            navData
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-bar{
    height: 35px;
    overflow: hidden;

    .scrow-wrapper{
        overflow-x: auto;
        height: 50px;
        .nav-wrapper{
            display: flex;
            flex-direction: row;
            height: 40px;
        }
    }
}
</style>