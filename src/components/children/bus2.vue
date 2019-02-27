<template>
	<div>
		B组件：触发事件send
		<input type="button" value="点击触发" @click="onClick">
	</div>
</template>

<script>
	import Bus from '../../assets/js/bus.js'
	export default {
		data(){
			return {
				elValue:"我是B组件数据"
			}
		},
		methods:{
			onClick(){
				//发送数据
				Bus.$emit("send",this.elValue)
			}
		}
	}
</script>

<style>
</style>