<template>
  <div :class="['nav-item',{'nav-cur':index === curIdx}]" @click="navClick(index)">{{item}}</div>
</template>

<script>
export default {
    props:{
        item:String,
        index:Number,
        curIdx:Number,
    },
    setup(props,{emit}){
        const navClick = (index)=>{
            emit('navClick',index);
        }

        return{
            navClick,
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-item{
    padding: 10px;
}
.nav-cur{
    color:#DD8095;
}
</style>