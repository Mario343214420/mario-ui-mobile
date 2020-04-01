<template>
    <div class="nav">
        <div class="nav-item" @click="changeView(index)" v-for="(item, index) in navList" :key="index">
            {{ item }}
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
    padding 10px
    .nav-item
        line-height: 40px
</style>
