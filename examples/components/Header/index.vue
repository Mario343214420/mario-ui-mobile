<template>
    <div class="header">
        <div class="header-title">
            <i>Mario-UI</i><i> design</i><i> for</i><i> mobile.</i>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style lang="stylus" scoped>
.header
    height: 100px
    position relative
    .header-title
        position absolute
        left: 50%
        top: 50%
        transform translate(-50%, -50%)
        font-size: 20px
        i
            font-weight: 700
            &:nth-child(1)
                color var(--my-main-red)
            &:nth-child(2)
                color var(--my-main-blue)
            &:nth-child(3)
                color var(--my-main-skin)
            &:nth-child(4)
                color var(--my-main-brown)
</style>
