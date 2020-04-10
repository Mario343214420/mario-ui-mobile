<template>
    <div class="footer">
        <div class="footer-describe">
            <div class="links">
                <div class="title">链接</div>
                <div class="link-list">
                    <a href="javascript:;">代码仓库</a>
                </div>
            </div>
            <div class="shares">
                <div class="title"></div>
                <div class="share-list">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style lang="stylus" scoped>
.footer
    height: 100px
    position relative
    .footer-describe
        position absolute
        left: 50%
        top: 50%
        transform translate(-50%, -50%)
</style>
