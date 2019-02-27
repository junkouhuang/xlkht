<template>
	<div>
		A组件：监听事件send
		<span>{{name}}</span>
		
	</div>
</template>

<script>
    import Bus from '../assets/js/bus.js'
	export default{
		data(){
			return{
				name:""
			}
		},
		created(){
			let _this=this;
			//用$on监听事件并接受数据
			Bus.$on("send",(data)=>{
				_this.name=data;
				console.log(data);
			})
		},
		methods:{
			elementByValue(){
				Bus.$emit("val",this.elementValue)
			}
		}
	}
</script>

<style>
</style>