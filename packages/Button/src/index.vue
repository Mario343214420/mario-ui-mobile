<template>
    <div class="mario-button"
         @click="handleClick"
         :disable="disable"
         :class="['mario-button-' + type, 'mario-button-' + size, {
            'is-disabled': disable
         }]"
         :plain="plain"
         :type="nativeType">
        <slot></slot>
    </div>
</template>

<script>
	if (process.env.NODE_ENV === 'component') {
		require('mint-ui/packages/font/style.css');
	}
	export default {
		name: 'MButton',
		props: {
			type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'success',
                        'info',
                        'warning',
                        'danger'
                    ].indexOf(value) > -1;
                }
            },
            disable: {
				type: Boolean,
                default: false
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            plain: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'normal',
                validator(value) {
                    return [
                        'small',
                        'normal',
                        'large'
                    ].indexOf(value) > -1;
                }
            }
        },
        methods: {
            handleClick(evt) {
                this.disable? void 0: this.$emit('click', evt);
            }
        }
	}
</script>

<style lang="stylus" scoped>
    .mario-button
        user-select: none
        appearance: none;
        border-radius: 4px;
        border: 0;
        box-sizing: border-box;
        color: inherit;
        display: inline-block;
        font-size: 1rem;
        outline: 0;
        overflow: hidden;
        position: relative;
        text-align: center;
        line-height: 1;
        cursor pointer
        &::after
            content: ''
            position absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            background-color: #000
            opacity 0
            transition opacity ease-out .2s
        &[disable]
            opacity .6
            /*cursor:no-drop*/
            cursor:not-allowed
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Chrome/Safari/Opera */
            -khtml-user-select: none; /* Konqueror */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
            &::after
                display none
        &:active
            &::after
                opacity .2
        &.mario-button-small
            padding: .25rem .6rem
            font-size: .5rem
        &.mario-button-normal
            padding: .4rem .8rem
        &.mario-button-large
            padding: .6rem 1rem
        &.mario-button-default
            color #fff
            border-width: 1px
            border-style: solid
            border-color:var(--default-border-color)
            background-color: var(--default-bg-color)
            [plain]
                color var(--default-font-color)
                background-color: var(--default-plain-bg-color)
        &.mario-button-primary
            color: #fff
            border-width: 1px
            border-style: solid
            border-color:var(--primary-border-color)
            background-color: var(--primary-bg-color)
            [plain]
                color var(--primary-font-color)
                background-color: var(--primary-plain-bg-color)
        &.mario-button-success
            color #fff
            border-width: 1px
            border-style: solid
            border-color:var(--success-border-color)
            background-color: var(--success-bg-color)
            [plain]
                color var(--success-font-color)
                background-color: var(--success-plain-bg-color)
        &.mario-button-info
            color #fff
            border-width: 1px
            border-style: solid
            border-color:var(--info-border-color)
            background-color: var(--info-bg-color)
            [plain]
                color var(--info-font-color)
                background-color: var(--info-plain-bg-color)
        &.mario-button-warning
            color #fff
            border-width: 1px
            border-style: solid
            border-color:var(--warning-border-color)
            background-color: var(--warning-bg-color)
            [plain]
                color var(--warning-font-color)
                background-color: var(--warning-plain-bg-color)
        &.mario-button-danger
            border-width: 1px
            border-style: solid
            color #fff
            border-color:var(--dangerg-border-color)
            background-color: var(--danger-bg-color)
            [plain]
                color var(--danger-font-color)
                background-color: var(--danger-plain-bg-color)

</style>
