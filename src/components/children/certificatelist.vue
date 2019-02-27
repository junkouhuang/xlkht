<template>
	<div class="news">
		<h1>证书列表</h1>
		<el-button type="primary" @click="opedDialog">上传证书</el-button>
		<el-row :gutter="20" class="newslist">
		  <el-col :span="4" v-for="item in certificatelist" style="margin-bottom: 15px;" >
			<el-card >
			  <div class="headimg" :style="{background:'url(' + item.url + ') no-repeat'}" @click="seeDetaill(item)"></div>
			  <div style="padding: 14px;height: 60px;">
				<div class="bustitle">{{item.bustitle}}</div>
				<div class="bottom clearfix">
				  <time class="time">{{item.fbtime}}</time>
				  <el-button type="text" class="button" @click="del(item.id)" style="color:red" >删除</el-button>
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
		<el-dialog 
		    :title="title" 
		    :visible.sync="dialogVisible"
		    :before-close="handleClose"
		    :close-on-click-modal="false">
		    <el-upload
		    	list-type="picture-card"
				  action=""
				  :on-preview="handlePictureCardPreview"
	  			  :on-remove="handleRemove"
				  accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF"
				  :show-file-list="true"
				  :file-list="imgList"
				  :before-upload="beforeAvatarUpload">
			    <i class="el-icon-plus"></i>
			    <el-dialog :visible.sync="dialogOpen">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-upload>
		    <span slot="footer" class="dialog-footer">
				    <el-button @click="closeDialog">Cancel</el-button>
				    <el-button @click="confirmChange"  type="primary">confirm</el-button>
			  </span>
		</el-dialog>
	</div>
</template>


<script>
  import certificatelist from '../../assets/js/children/certificatelist.js'
  export default certificatelist
</script>

<style scoped lang="scss" >
	@import '../../assets/css/children/certificatelist.scss'
</style>
