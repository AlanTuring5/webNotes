<template>
    <div class="container">
        <cons-card :name="todayData.name" :allIndex="todayData.all"></cons-card>
    </div>
</template>

<script>
import {computed, onMounted} from 'vue';
import {useStore} from 'vuex';
import getData from '@/services';
import ConsCard from '@/components/Common/Card.vue'

export default {
    name: 'TodayPage',
    components:{
        ConsCard,
    },
    setup(){
        const store = useStore(),
            state = store.state;
        onMounted(()=>{
            getData(store);
        })
        console.log(state.today)
        return{
            todayData:computed(()=> state.today)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
