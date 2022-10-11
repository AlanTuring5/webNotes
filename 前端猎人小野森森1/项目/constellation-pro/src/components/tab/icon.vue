<template>
  <router-link :to="path" class="tab-icon">
    <i class="icon">{{iconText}}</i>
    <p><slot></slot></p>
  </router-link>
</template>

<script>
export default {
    name:'TabIcon',
    props:{
        iconText:String,
        path:String,
    }
}
</script>

<style lang="scss" scoped>
$activeColor:#DD8095;
$nonActiveColor: rgb(156, 156, 156);
.tab-icon{
    padding-top: 5px;
    width: 100%;
    height: 100%;
    text-decoration:none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i{
        background-color: $nonActiveColor;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        color:#fff;
    }

    p{
        font-size: 12px;
        line-height: 5px;
        color:$nonActiveColor;
    }
}
.router-link-active {
    i {
        background-color:$activeColor;
    }

    p {
        color:$activeColor
    }
}
</style>