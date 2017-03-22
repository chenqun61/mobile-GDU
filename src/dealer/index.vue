<style lang="less" scoped>
/* Dealer */
.dealer { background: #ededed; }
.dealer > .banner { height: 50vw; text-align: center; line-height: 50vw; padding: 0; background: url('./images/map.jpg') no-repeat center center; background-size: 100%; }
.dealer > .banner > h1 { font-weight: bold; color: #181818; }
.dealer > dl { margin-top: 45px; text-align: center; }
.dealer > dl > dt { font-size: 16px; font-weight: bold; margin-bottom: 20px; color: #ef4e22; }
.dealer > dl > dd { display: inline-block; width: 300px; margin-bottom: 20px; }
.dealer > dl > dd > a { line-height: 130px; display: block; width: 100%; max-width: 300px; height: 100%; max-height: 90px; border: 2px solid #fff; background: #fff; }
.dealer > dl > dd > p { font-size: 16px; color: #181818; }

/* Tmall */
.buy { position: relative; height: 20vw; background: #252525; }
.buy > a { font-size: 5rem; line-height: 10vw; position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: block; width: 74%; height: 10vw; margin: auto; text-align: center; background: #ef4e22; }
@-webkit-keyframes pulse {
  from {
  opacity: 0;
      
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
  opacity: 0;
      
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

dl > dd:nth-child(2) > a {
  animation: pulse .4s linear .3s;
  animation-fill-mode: both;
}
dl > dd:nth-child(3) > a{
  animation: pulse .4s linear .5s;
  animation-fill-mode: both;
}
</style>
<template>
    <div>
        <top-header></top-header>
<div class="dealer">
	<div class="banner">
		<h1>WHERE TO BUY</h1>
	</div>
	<dl>
		<dt>Official Online Channel</dt>
		<dd>
			<a href="https://www.amazon.com/GDU-Standard-Portable-Quadcopter-Camera/dp/B01CCN8QU8/ref=sr_1_5?ie=UTF8&qid=1479872819&sr=8-5&keywords=gdu" target="_blank"><img src="./images/logo/14.jpg"></a>
		</dd>
		<dd>
			<a href="https://fancy.com/shop/shopGDU" target="_blank"><img src="./images/logo/15.jpg"></a>
		</dd>
	</dl>
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