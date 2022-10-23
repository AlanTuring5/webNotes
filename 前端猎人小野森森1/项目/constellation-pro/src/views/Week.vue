<template>
    <div class="container">
        <cons-card :name="weekData.name" :allIndex="weekData.all"></cons-card>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

export default {
    name: 'WeekPage',
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store);
        })
        return {
            weekData: computed(() => state.week)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>