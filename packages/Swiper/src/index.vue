<template>
    <div>
        <swiper ref="mySwiper" :options="options">
            <swiper-slide v-for="(item, index) in list" :key="index">
                <div class="slide-inner" v-html="item.dom"></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'
	export default {
		name: "MSwiper",
        data(){
            return {
            }
        },
        props: {
			list: {
				type: Array,
				default() {
					return [{ dom: '<i>1</i>' }, { dom: '<i>2</i>' }]
				}
            },
            options:{
				type: Object,
                default() {
					return {
						pagination: {
							el: '.swiper-pagination'
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
                        loop: true
						// Some Swiper option/callback...
                    }
                }
            }
        },
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
		mounted() {
			console.log('Current Swiper instance object', this.swiper)
			// this.swiper.slideTo(3, 1000, false)
		}
	}
</script>

<style lang="stylus" scoped>
.slide-inner
    min-height 40px
.swiper
    width: 100%
</style>
