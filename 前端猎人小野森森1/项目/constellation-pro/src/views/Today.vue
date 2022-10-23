<template>
    <div class="container">
        <cons-card :name="todayData.name" :allIndex="todayData.all"></cons-card>
    </div>
</template>

<script>
import {computed, onMounted} from 'vue';
import {useStore} from 'vuex';
import getData from '@/services';

export default {
    name: 'TodayPage',
    setup(){
        const store = useStore(),
            state = store.state;
        onMounted(()=>{
            getData(store);
        })
        console.log('data',state.today)
        return{
            todayData:computed(()=> state.today)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
