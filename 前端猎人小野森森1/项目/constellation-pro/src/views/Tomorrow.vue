<template>
    <div class="container">
        <cons-card :name="tomorrowData.name" :allIndex="tomorrowData.all"></cons-card>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';

export default {
    name: 'TomorrowPage',
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store);
        })
        return {
            tomorrowData: computed(() => state.tomorrow)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>