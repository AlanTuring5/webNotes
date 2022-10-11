<template>
  <div class="tab">
    <div class="tab-item" v-for="(item,index) of tabData" :key="index">
        <tab-icon :iconText="item.iconText" :path="item.path">
            {{item.tabText}}
        </tab-icon>
    </div>
  </div>
</template>

<script>
import { reactive,toRefs } from '@vue/reactivity'
import tabData from '@/datas/tab'
import TabIcon from './icon.vue'
export default {
    name:'Tab',
    components:{
        TabIcon,
    },
    setup(){
        const state = reactive({tabData});
        return{
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    border-top: 1px solid #eee;

    .tab-item{
        width: 20%;
    }

    .activeTab{

    }
}
</style>