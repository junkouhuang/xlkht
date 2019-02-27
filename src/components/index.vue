<template>
	<div class="wrapper">
		<aside class="navbar-side">
			<div class="user-panel">
				<div class="img-circle">
					<img src="../assets/tubiao.png" />
				</div>
				<div class="info">
					<h3>欢迎您,{{username}}</h3>
					<h4>({{role}})</h4>
				</div>
				<!-- <div class="settings-menu">
					<el-button type="primary loginout" >注销</el-button>
				</div> -->
			</div>
			<div class="sidebar-menu">
				<el-menu	
				  default-active="2"
				  class="el-menu-vertical-demo"
				  @open="handleOpen"
				  @close="handleClose"
				  router
				  >
				  <el-submenu :index="menu.index" v-for="menu in menuList">
					<template slot="title">
					  <i class="el-icon-document"></i>
					  <span>{{menu.name}}</span>
					</template>
					<el-menu-item v-for="child in menu.child" :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
				  </el-submenu>
				</el-menu>
			</div>
		</aside>
		<section class="content-container el-col-24 page-wrapper" >
			<div class="top-navbar">
				<div class="block switchtheme">
				  <el-color-picker v-model="themecolor"></el-color-picker>
				</div>
				<span class="logout" @click="logout"><i class="iconfont icon-ai240"></i>Logout</span>
			</div>
			<div class="bar"></div>
			<div class="bottom-content">
				<router-view/>
			</div>
		</section>
	</div>
</template>

<script>
  import Index from '../assets/js/index.js'
  export default Index
</script>


<style scoped lang="scss" >
@import '../assets/css/index.scss'
</style>
