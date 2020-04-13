<template>
    <div class="nav">
        <div class="nav-search">
            <input type="text" placeholder="输入并搜索" />
        </div>
        <div class="nav-list">
            <div class="nav-item" @click="changeView(index)" v-for="(item, index) in navList" :key="index">
                <router-link :to="'/' + item.toLowerCase()">{{item}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Nav",
        data(){
			return{
				navList:[
					'Button',
					'Input',
					'Swiper',
					'Toast',
					'Vessel',
                ]
            }
        },
        methods:{
			changeView(index){
				this.$emit('changeView',index)
            }
        }
	}
</script>

<style lang="stylus" scoped>
.nav
    width: 240px
    box-shadow 0 1px 6px rgba(110,110,110,.4)
    .nav-list
        padding 10px 0
        .nav-item
            line-height: 40px
            transition ease-in-out .4s
            font-weight: 700
            a
                color inherit
            &:hover
                background-color: var(--my-main-blue)
                color #fff
                cursor pointer
    .nav-search
        margin-top: 10px
        width: 100%
        input
            box-sizing border-box
            width: 90%
            height: 40px
            outline none
            padding 6px 10px
            background-color: #fafafa
            transition ease-in-out .4s
            &:focus
                box-shadow 0 0 6px inset rgba(0,0,0,.1)
</style>
