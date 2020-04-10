<template>
    <div class="phone-view">
        <div class="phone-screen wrapper">
            <ul class="content">
                <li>1</li>
                <li v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,]" :key="index">
                    test---{{item}}
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: "PhoneSimulate",
        mounted: function () {
            this.createBS()
        },
        methods: {
			createBS :function () {
				new BScroll('.wrapper')
			}
        }
	}
</script>

<style lang="stylus" scoped>
$phone_bg='./phone.png'
.phone-view
    background-image: url($phone_bg)
    height: 920px
    width: 424px
    -webkit-background-size: cover
    background-size: cover
    position relative
    transform scale(.7)
    .phone-screen
        overflow hidden
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width: 375px
        height: 667px
        background-color: #fff
</style>
