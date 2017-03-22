<template>
    <div class="woshi laoda" @scroll="scroll">
        <top-header></top-header>
        <div class="banner">
            <div style="display: none">
<img src="./images/premium2/premium-byrd2.png" alt="">
<img src="./images/premium2/premium-features2.png" alt="">
<img src="./images/premium2/premium-features_en2.png" alt="">

<img src="./images/premium/premium-byrd.png" alt="">
<img src="./images/premium/premium-features.png" alt="">
<img src="./images/premium/premium-features_en.png" alt="">

<img src="./images/standard/standard-byrd.png" alt="">
<img src="./images/standard/standard-features.png" alt="">
<img src="./images/standard/standard-features_en.png" alt="">

<img src="./images/advanced/advanced-byrd.png" alt="">
<img src="./images/advanced//advanced-features.png" alt="">
<img src="./images/advanced//advanced-features_en.png" alt="">
</div>
<swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in lang.carousel">
        <div class="slide-item">
            <img :src="item.imgShow">
            <img :src="item.imgDes" class="slideInUp">
            <h2>{{item.title}}</h2>
            <a v-if="isCHinese" :href="item.buyLink">{{item.aText}}</a>
            <router-link :to="item.buyLink" v-else>{{item.aText}}</router-link>
        </div>
    </swiper-slide>
    <div class="swiper-pagination  swiper-pagination-bullets" id="swiperId" slot="pagination"></div>
</swiper>
</div>
<div class="sale" :class="item.saleClass" v-for="(item, index) in lang.sales">
    <h1 :class="{ isHeighone: index <= activeHeigh }">{{item.title}}</h1>
    <p :class="{ isHeightwo: index <= activeHeigh }">{{item.desc}}</p>
</div>
<div class="buy">
    <a v-if="isCHinese" :href="lang.bugNow.aLink">{{lang.bugNow.aText}}</a>
    <router-link :to="lang.bugNow.aLink" v-else>{{lang.bugNow.aText}}</router-link>
</div>
<bottom-footer></bottom-footer>

</div>
</template>
<style lang="less" scoped>
@import "./index";
</style>
<script>
    import { mapState } from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import topHeader from '../components/header/index' //加载头部公共组件
    import bottomFooter from '../components/footer/index' //加载底部公共组件
    export default {
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                    paginationClickable: true
                },
                deviceH:0,
                activeHeigh:-1
            }
        },
        created() {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.$store.state.showBar = !this.$store.state.showBar;
        },
        computed: {
             ...mapState(['lang','isCHinese'])    
        },
        components: {
            swiper,
            swiperSlide,
            topHeader,
            bottomFooter
        },
        methods: {
            scroll(e) {
                console.log(e)
            }
        },
        mounted: function () {

           	window.addEventListener("scroll" , e => {
            var percent = document.body.scrollTop/window.screen.height;
            if(0.6<percent&&percent<1){
                this.activeHeigh = 0;
            }else if(1<percent&&percent<2){
                this.activeHeigh = 1;
            }else if(2<percent&&percent<2.6){
                this.activeHeigh = 2;
            }else if(2.6<percent&&percent<5){
                this.activeHeigh = 3;
            }
            // console.log(percent);
            // console.log(this.activeHeigh)
		})
        },
        watch: {

        }
    }
</script>