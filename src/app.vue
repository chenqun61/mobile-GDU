<style lang="less" scoped>
		.child-view {
		  /*position: absolute;*/
		  transition: all .2s cubic-bezier(.55,0,.1,1);

		}
		.slide-left-enter, .slide-right-leave-active {
		  opacity: 0.6;
		  -webkit-transform: translate(100vw, 0);
		  transform: translate(100vw, 0);
		}
		.slide-left-leave-active, .slide-right-enter {
		  opacity: 0.6;
		  -webkit-transform: translate(-100vw, 0);
		  transform: translate(-100vw, 0);
		}
</style>
<template>
    <transition :name="transitionName">
    <router-view class="child-view"></router-view>
    </transition>
</template>
<script>
    export default {
        data() {
				return {
					transitionName: "slide-left"
				}
			},
			watch:{
				 '$route'(to,from){ //ES6新写法 和 '$route':fun()一样
				//  console.log(to.path);
				//  console.log(from.path);
				console.log(window.pageYOffset);
				 	const toDepth = to.path.split('/').length
				 	const fromDepth = from.path.split('/').length
					//  console.log(toDepth,fromDepth);
				 	this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
				 	// console.log(this.transitionName)
					if (window.scrollY) {
  window.scroll(0, 0);  // 重置滚动位置为文档的左上角
}
				 }
			}
    }
</script>