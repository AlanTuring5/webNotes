<template>
  <div class="card">
    <div class="wrapper">
        <img :src="require(`../../assets/img/${name || '白羊座'}.jpg`)" :alt="name">
        <div class="mask"> 
            <h1>{{name || '白羊座'}}</h1>
            <p v-if="allIndex">综合指数：{{allIndex || 0}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ConsCard',
    props:{
        name:String,
        allIndex:String | Number,
    }
}
</script>

<style lang="scss" scoped>
.card{
    padding: .3rem;
    box-sizing: border-box;
    margin-top: .5rem;
    .wrapper{
        border-radius: .15rem;
        position: relative;
        overflow: hidden;
        img{
            width: 100%;
            height: 40vh;
            border-radius: 1rem;
            // box-shadow: .4rem .3rem .6rem #333;
        }
        .mask{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 999;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            h1{
                color:#fff;
                font-family: 'Courier New', Courier, monospace;
            }
            p{
                color:#fff;
                font-size: .2rem;
                margin-top: .35rem;
            }
        }
    }
}
</style>