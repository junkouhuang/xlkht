<template>
	<div>
		父组件：
		<span>{{name}}</span>
		<!-- 引入子组件定义一个on的方法来监听子组件的状态-->
		<child2 v-on:childByValue="childByValue"></child2>
	</div>
</template>

<script>
	import child2 from './children/child2'
	export default{
		components:{
			child2
		},
		data(){
			return {
				name:'hello'
			}
		},
		methods:{
			childByValue:function(childValue){
				this.name=childValue
			}
		}
	}
</script>

<style>
</style>