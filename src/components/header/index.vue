<style lang="less" scoped>
/* header */
.header { line-height: 12vw; position: fixed; top: 0; z-index: 100; width: 100%; height: 12vw; border-bottom: 2px solid #282828; background: #181818; }
.header > span { font-size: 6rem; float: left; margin-left: 3%; }
.header > img { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 25%; margin: auto; }
.header > samp { font-size: 6rem; float: right; margin-right: 3%; }

/* Navigation */
.nav { position: fixed; top: 12vw; left: 0; z-index: 100; width: 50%; }
.nav > a { font-size: 2.4rem; line-height: 10vw; display: block; height: 10vw; padding-left: 24px; border-bottom: 1px solid #282828; background: #181818; }

</style>
<template>
	<div>
		<div class="header">
			<span id="nav" class="icon iconfont" @click="showNav">&#xe602;</span>
			<img src="./logo.svg">
			<samp class="icon iconfont">&#xe67a;</samp>
		</div>
		<div class="nav" v-if="showBar">
			<router-link to="/home">{{lang.navigation.home}}</router-link>
			<router-link to="/sdk">{{lang.navigation.sdk}}</router-link>
			<router-link to="/gimbal">{{lang.navigation.gimbal}}</router-link>
			<router-link to="/dealer">{{lang.navigation.dealer}}</router-link>
			<router-link to="/aboutUs">{{lang.navigation.aboutus}}</router-link>
			<a @click="changeLang">{{whichLang}}</a>
		</div>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

	export default {
		data() {
			return {

			}
		},
		created() {
			// 组件创建完后获取数据，
			// 此时 data 已经被 observed 了
			this.$store.state.showBar = false;
		},
		computed: {
			...mapGetters(["whichLang"]),
			...mapState(['lang','showBar'])
		},
		methods: {
			...mapMutations([
			'changeLang','showNav'
			])
		}
	}
</script>