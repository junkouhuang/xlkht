<template>
	<div>
		子组件：
		<span>{{inputName}}</span>
	</div>
</template>

<script>
	export default{
		//接受父组件的值
		props:{
			inputName:String,
			required:true
		}
	}
</script>

<style>
</style>