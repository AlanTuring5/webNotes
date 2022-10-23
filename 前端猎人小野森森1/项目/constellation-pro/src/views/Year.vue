<template>
    <div class="container">
        <cons-card :name="yearData.name" :allIndex="yearData.all"></cons-card>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

export default {
    name: 'YearPage',
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store);
        })
        return {
            yearData: computed(() => state.year)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>