<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <nav-bar></nav-bar>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <tab></tab>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import Tab from '@/components/tab'
import NavBar from '@/components/NavBar/index.vue'

import {useStore} from 'vuex';
import {watch} from 'vue';
import {useRouter} from 'vue-router';
import {ref} from 'vue';

export default{
    name:'App',
    components: { MyHeader, Tab, NavBar },
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