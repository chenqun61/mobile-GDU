<style lang="less" scoped>
@import "./index";
</style>
<template>
    <div>
        <top-header></top-header>
        <div class="aboutus">
            <!--<img src="./images/contactus.jpg" alt="">-->
            <h3 class="first-action">{{lang.firSection.title}}</h3>
            <h5 class="first-action" v-if="isCHinese">about us</h5>
            <!-- <h4>“红外巨人”肩承之未来</h4> -->
            <p class="second-action">{{lang.firSection.desc}}</p>
            <ul class="third-action">
                <li v-for="item in lang.secSection">
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                </li>
            </ul>
            <div class="contactus fourth-action">
                <hgroup>
                    <h3>{{lang.thirdSection.title}}</h3>
                    <h5 v-if="isCHinese">contact us</h5>
                </hgroup>
                <p>{{lang.thirdSection.service}}<br>{{lang.thirdSection.workTime}}</p>
            </div>
            <ul class="contact fifth-action">
                <li v-for="item in lang.fourthSection">
                    <h4>{{item.title}}</h4>
                    <h6 v-if="isCHinese">Shenzhen Headquarters</h6>
                    <span></span>
                    <p>{{item.address}}</p>
                    <p>{{item.postcode}}</p>
                    <p>{{item.tel}}</p>
                    <p>{{item.workTime}}</p>
                </li>
                <div class="mail">
                    <h4>{{lang.fifthSection.title}}</h4>
                    <h6 v-if="isCHinese">Email</h6>
                    <span></span>
                    <p v-for="value in lang.fifthSection.mail">{{ value }}</p>
                </div>
            </ul>

        </div>
        <bottom-footer></bottom-footer>
</template>
<script>
    import { mapState } from 'vuex'
    import topHeader from '../components/header/index' //加载头部公共组件
    import bottomFooter from '../components/footer/index' //加载底部公共组件
    export default {
        data() {
            return {
            }
        },
        computed: {
			...mapState(['lang','isCHinese'])
        },
        components: {
            topHeader,
            bottomFooter
        }
    }
</script>