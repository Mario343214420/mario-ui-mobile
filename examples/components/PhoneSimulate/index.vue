<template>
    <div class="phone-view">
        <div class="phone-screen">
            <slot></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: "PhoneSimulate"
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
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width: 375px
        height: 667px
        background-color: #fff
</style>
