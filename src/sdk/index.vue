<style lang="less" scoped>
/*gimbal*/
.sdk{
    width: 100vw;
    position: relative;
}
.sdk img{
    width: 100vw;
}
.sdk .p-link{
   width: 87vw;
    height: 5vw;
    /*background: red;*/
    position: absolute;
    top: 138vw;
    left: 4.58vw;
    display: block;
}

/* Tmall */
.buy { position: relative; height: 20vw; background: #252525; }
.buy > a { font-size: 5rem; line-height: 10vw; position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: block; width: 74%; height: 10vw; margin: auto; text-align: center; background: #ef4e22; }
</style>
<template>
    <div>
        <top-header></top-header>
<div class="sdk">
     <router-link to="/aboutUs" class="p-link"></router-link>
    <img src="./images/sdk.jpg" alt="">
</div>
<div class="buy">
     <router-link to="/aboutUs">CONTACT US</router-link>
</div>
        <bottom-footer></bottom-footer>

    </div>
</template>
<script>
    import topHeader from '../components/header/index' //加载头部公共组件
    import bottomFooter from '../components/footer/index' //加载底部公共组件
    export default {
        data() {
            return {
            }
        },
        components: {
            topHeader,
            bottomFooter
        }
    }
</script>