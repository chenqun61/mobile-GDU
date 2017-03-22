<style lang="less" scoped>
@import "./index";
</style>
<template>
    <div>
        <top-header></top-header>
        <div class="gimbal">
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <figure class="gimbal-one">
                        <img src="./images/gimbal_1.png" alt="">
                        <figcaption>
                            <h1>BYRD X</h1>
                            <h2>ILDC GIMBAL</h2>
                            <h3>ESSENTIAL GIMBAL FOR PERFECTIONIST</h3>
                            <p>
                                Aerial photography can carry silent frame ILDC now. Another innovation of GDU.
                            </p>
                            <p>Price: <strong>$ 169</strong></p>
                        </figcaption>
                    </figure>
                </swiper-slide>
                <swiper-slide>
                    <figure class="gimbal-two">
                        <img src="./images/gimbal_2.png" alt="">
                        <figcaption>
                            <h1>BYRD X</h1>
                            <h2>10 TIMES ZOOMING CAMERA GIMBAL</h2>
                            <h3>ZOOM EVERYTHING CLEARLY</h3>
                            <p>
                                With this camera on your Byrd, even the street nameplates can be seen clearly 200 meters away.
                            </p>
                            <p>Price: <strong>$ 999</strong></p>
                        </figcaption>
                    </figure>
                </swiper-slide>
                <swiper-slide>
                    <figure class="gimbal-three">
                        <img src="./images/gimbal_3.png" alt="">
                        <figcaption>
                            <h1>BYRD X</h1>
                            <h2>NFRARED CAMERA GIMBAL</h2>
                            <h3>SEE INVISBLE</h3>
                            <p>
                                Visble light or invisble light, they can be all “seen”.
                            </p>
                            <p></p>
                        </figcaption>
                    </figure>
                </swiper-slide>
                <swiper-slide>
                    <figure class="gimbal-four">
                        <img src="./images/gimbal_4.png" alt="">
                        <figcaption>
                            <h1>BYRD X</h1>
                            <h2>ONE-BUTTON STRETCHING GIMBAL</h2>
                            <h3>CAPTURE FROM EACH ANGLE</h3>
                            <p>
                                It is the first gimbal solution preventing propellers being captured in scene.
                            </p>
                            <p>Price: <strong>$ 419</strong></p>
                        </figcaption>
                    </figure>
                </swiper-slide>
                <swiper-slide>
                    <figure>
                        <figcaption  class="gimbal-five">
                            <p>
                                Thank you for your interest in our products.</br>Please visit our desktop version website for production reservation.
                            </p>
                             <p>
                                <a href="http://www.gdu-tech.com/en/#/byrd/gimbal">http://www.gdu-tech.com/en/#/byrd/gimbal</a>
                            </p>
                             <p>
                                we will contact you for the first time. Good luck.
                            </p>
                        </figcaption>
                    </figure>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import topHeader from '../components/header/index' //加载头部公共组件
    import bottomFooter from '../components/footer/index' //加载底部公共组件
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    direction: 'vertical',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 30,
                    mousewheelControl: true
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            topHeader,
            bottomFooter
        }
    }
</script>