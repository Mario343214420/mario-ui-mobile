<template>
    <div class="m-button">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'm-button',
		props: {
			type: String
		}
	}
</script>

<style scoped>
    .m-button {
        display: inline-block;
        padding: 3px 6px;
        background: #000;
        color: #fff;
    }
</style>
