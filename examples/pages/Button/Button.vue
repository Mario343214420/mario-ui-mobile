<template>
    <div>
        <MButton @click="openToast" type="primary" plain>弹出Toast</MButton><br>
        <MButton @click="test" type="success" plain>MButton</MButton><br>
        <MButton @click="test" type="info" plain>MButton</MButton><br>
        <MButton @click="test" type="warning" plain>MButton</MButton><br>
        <MButton @click="test" type="danger" plain>MButton</MButton><br>
        <MButton @click="test" type="danger" disable>MButton</MButton><br>
        <MButton @click="test" type="danger" size="small" disable>MButton</MButton><br>
        <MButton @click="test" type="danger" size="large" disable>MButton</MButton>
    </div>
</template>

<script>
	export default {
		name: "Button",
        methods:{
            test(e){
                console.log(e);
            },
            openToast(){
                // MToast('提示信息');
                console.log('openToast')
            },
        }
	}
</script>

<style scoped>

</style>
