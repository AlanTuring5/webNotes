<template>
  <div class="nav-bar">
    <div class="scrow-wrapper">
        <div class="nav-wrapper" :style="`width:${navData.length*68}px`">
            <nav-item v-for="(item,index) of navData" :key="index" :item="item" :curIdx="curIdx" :index="index" @navClick="navClick"></nav-item>
        </div>
    </div>
  </div>
</template>

<script>
import navData from '@/datas/nav'
import NavItem from './Item.vue'
import {ref} from 'vue'

export default {
    name:'NavBar',
    components: { NavItem },
    setup(){
        const curIdx = ref(0);
        const navClick = (index) => {
            curIdx.value = index;
        }

        return {
            navData,
            curIdx,
            navClick,
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