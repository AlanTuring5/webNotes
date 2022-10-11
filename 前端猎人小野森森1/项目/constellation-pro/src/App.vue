<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import Tab from '@/components/tab'
import {useStore} from 'vuex';
import {watch} from 'vue';
import {useRouter} from 'vue-router'

export default{
    name:'App',
    components:{MyHeader,Tab},
    setup(){
        const store  = useStore(),
            state = store.state,
            router = useRouter();

        router.push('/');
        store.commit('setField','today');

        watch(()=>{
            // console.log(router)
            return router.currentRoute.value.name;
        },(value)=>{
            store.commit('setField',value);
        })
    }
}
</script>

<style lang="scss">
body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#app{
    display: flex;
    flex-direction: column;
    height: 100vh;

    .container{
        flex: 1;
    }
}
</style>