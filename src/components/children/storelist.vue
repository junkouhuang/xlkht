<template>
	<div>
		<el-table
	    :data="storelist"
	    border
	    v-loading="loading"
	    style="width: 98%;margin-left: 1%;margin-top: 20px;">
	    <el-table-column
	      prop="mdcode"
	      label="店号"
	      width="80">
	    </el-table-column>
	    <el-table-column
	      prop="mdmc"
	      label="门店名称">
	    </el-table-column>
	    <el-table-column
	      prop="lxdh"
	      label="联系电话"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="mddz"
	      label="门店地址">
	    </el-table-column>
	    <el-table-column
	      prop="imgs"
	      label="门店图片"
	      width="120">
	       <template slot-scope="scope">
			    	<el-row v-if="scope.row.imgs.length!=0">
			    		<span>有图片</span>
						</el-row>
						<el-row v-else>
				    		<span>没图片</span>
						</el-row>
			    </template>
	    </el-table-column>
	    <el-table-column
	      prop=""
	      label="操作"
	      width="200">
	       <template slot-scope="scope">
			      	<el-row>
			      		<el-button type="primary" size="small" class="fa fa-upload"  @click.native.prevent="operation(scope.row)">管理图片</el-button>
			      	</el-row>
			      </template>
	    </el-table-column>
	  </el-table>
	  <el-pagination
	  	style="margin-top: 20px;"
		  background
		  layout="prev, pager, next"
		  :total="total"
		  @current-change="handleCurrentChange">
		</el-pagination>
		<el-dialog 
	    :title="title" 
	    :visible.sync="dialogVisible"
	    :before-close="handleClose"
	    :close-on-click-modal="false">
	    <el-upload
	    	list-type="picture-card"
			  action=""
			  :limit="1"
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
  import storelist from '../../assets/js/children/storelist.js'
  export default storelist
</script>

<style scoped lang="scss" >
	@import '../../assets/css/children/storelist.scss'
</style>
