<template>
	<div>
		子组件：
		<span>{{childValue}}</span>
		<input type="button" value="点击出发" @click="childClick">
	</div>
</template>

<script>
	export default{
		data(){
			return {
				childValue:"我是一个子组件"
			}
		},
		methods:{
			childClick(){
				this.$emit("childByValue",this.childValue)
			}
		}
	}
</script>

<style>
</style>