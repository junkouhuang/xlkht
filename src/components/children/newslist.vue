<template>
	<div class="news">
		<h1>新闻列表</h1>
		<el-row :gutter="20" class="newslist">
		  <el-col :span="4" v-for="item in newsList" style="margin-bottom: 15px;" >
			<el-card >
			  <div class="headimg" :style="{background:'url(' + item.headimg + ') no-repeat'}" @click="seeDetaill(item)"></div>
			  <div style="padding: 14px;height: 60px;">
				<div class="bustitle">{{item.bustitle}}</div>
				<div class="bottom clearfix">
				  <time class="time">{{item.fbtime}}</time>
				  <el-button type="text" class="button" @click="delNews(item.buscode,item.status)" style="color:red" v-if="item.status==0">下架</el-button>
				  <el-button type="text" class="button" @click="delNews(item.buscode,item.status)" style="color:green" v-if="item.status==9">上架</el-button>
				</div>
			  </div>
			</el-card>
		 </el-col>
		</el-row>
		<el-row class="page">
			<el-col :span="24">
				<el-pagination
				  background
				  :total="total"
				  layout="prev, pager, next"
				 >
				</el-pagination>
			</el-col>
			</el-row>
	</div>
</template>


<script>
  import Newslist from '../../assets/js/children/newslist.js'
  export default Newslist
</script>

<style scoped lang="scss" >
	@import '../../assets/css/children/newslist.scss'
</style>
