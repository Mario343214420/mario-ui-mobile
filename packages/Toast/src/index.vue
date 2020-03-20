<template>
    <transition>
        <div class="mario-toast" v-show="visible">
            <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
            <span class="mint-toast-text" :class="iconClass !== '' ? 'pdt10px' : ''">
                {{ msg }}
            </span>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
	if (process.env.NODE_ENV === 'component') {
		require('mint-ui/packages/font/style.css');
	}
	export default {
		name: 'MToast',
		props: {
            position: {
                type: String,
                default: 'middle'
            },
            className: {
                type: String,
                default: ''
            },
			msg: {
                type: String,
                default: ''
            }
        },
        data(){
			return {
				visible: false
            }
        },
        methods: {
            handleClick(evt) {
                this.disable? void 0: this.$emit('click', evt);
            }
        },

	}
</script>

<style lang="stylus" scoped>
    .mario-toast
        position fixed
        background-color: rgba(0,0,0,0.7)
        text-align center
        z-index 100
        transition opacity .3s ease-in-out
</style>
