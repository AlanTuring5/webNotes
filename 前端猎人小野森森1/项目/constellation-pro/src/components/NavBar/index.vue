<template>
  <div class="nav-bar" v-nav-current="{
    className:'nav-item',
    activeClass:'nav-current',
    curIdx,
  }"
  @click="navClick($event)">
    <div class="scrow-wrapper">
        <div class="nav-wrapper" :style="`width:${navData.length*78}px`">
            <!-- <nav-item v-for="(item,index) of navData" :key="index" :item="item" :curIdx="curIdx" :index="index" @navClick="navClick"></nav-item> -->
            <nav-item v-for="(item,index) of navData" :key="index" :item="item" :index="index"></nav-item>
        </div>
    </div>
  </div>
</template>

<script>
import navData from '@/datas/nav'
import NavItem from './Item.vue'
import {ref} from 'vue'
import {navCurrent} from '@/directives'
import {useStore} from 'vuex'

export default {
    name:'NavBar',
    components: { NavItem },
    directives:{
        navCurrent,
    },
    setup(){
        const curIdx = ref(0),
            store = useStore();
        // const navClick = (index) => {
        //     curIdx.value = index;
        // }

        const navClick = (e)=>{
            // console.log(e);
            const tar = e.target,
                idx = tar.dataset.index,
                consName = tar.innerText;
            curIdx.value = idx;
            store.commit('setConsName', consName);
            console.log(store.state.consName);
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