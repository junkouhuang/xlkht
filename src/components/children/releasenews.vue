<template>
	
	<div class="news">
			<h1>新闻发布模板</h1>
			<!--<div>
		        <div ref="editor" style="text-align:left"></div>
		        <button v-on:click="getContent">查看内容</button>
		  </div>-->
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" style="text-align: left;" v-loading="loading">
			<el-form-item label="业务单号">
				{{ruleForm.buscode}}
			</el-form-item>
			<!--<el-form-item label="所属类别" prop="lb">
				<el-select v-model="ruleForm.lb" placeholder="请选择所属类别" clearable>
					<el-option label="新闻资讯" value="news"></el-option>
					<el-option label="关于我们" value="about"></el-option>
					<el-option label="团队介绍" value="trem"></el-option>
					<el-option label="成功案例" value="beijing"></el-option>
					<el-option label="授权证书" value="beijing"></el-option>
					<el-option label="门店展示" value="beijing"></el-option>
				</el-select>
			</el-form-item>-->
			<el-form-item label="标题"  prop="title">
				<el-input type="text" v-model="ruleForm.title" placeholder="商品名称" clearable maxlength="60" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="标题图片" prop="img">
				<el-upload
				  class="upload-demo"
				  action=""
				  :limit="1"
				  :file-list="ruleForm.headimg"
				  :before-upload="uploadFile"
				  :before-remove="removeFile"
				  list-type="picture">
				  <el-button size="small" type="primary">Click to upload</el-button>
				  <div slot="tip" class="el-upload__tip">jpg/png 建议上传图片小于 500kb</div>
				</el-upload>
			</el-form-item>
			<el-form-item label="发布日期" prop="fbtime">
				<el-date-picker
				  v-model="ruleForm.fbtime"
  				  @change="formatTime" 
  				  value-format="yyyy-MM-dd HH:mm:ss"
				  type="datetime">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="内容" prop="uetext">
			    <div>
				    <script id="editor" type="text/plain" style="width:100%;height:300px;"></script>
				</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click.prevent="subimtbtn" >提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>


<script>
  import ReleaseNews from '../../assets/js/children/releasenews.js'
  export default ReleaseNews
</script>

<style scoped lang="scss" >
	@import '../../assets/css/children/releasenews.scss'
</style>


<!--<script>
import E from 'wangeditor'
export default {

  data () {
       return {
          editorContent: '121212'
        }
  },
  methods:{
     getContent () {
            alert(this.editorContent)
      }
  },
    mounted(){
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
          console.log(html);
        }
        editor.customConfig.uploadImgServer = 'http://localhost:8061/cms_com_activity/upload'
        editor.customConfig.uploadFileName="img";
		editor.customConfig.uploadImgHooks = {
	    before: function (xhr, editor, files) {
	        // 图片上传之前触发
	        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
	        
	        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
	        // return {
	        //     prevent: true,
	        //     msg: '放弃上传'
	        // }
	        console.log("图片上传之前触发");
	    },
	    success: function (xhr, editor, result) {
	        // 图片上传并返回结果，图片插入成功之后触发
	        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
	         console.log("图片上传并返回结果，图片插入成功之后触发");
	    },
	    fail: function (xhr, editor, result) {
	        // 图片上传并返回结果，但图片插入错误时触发
	        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
	        console.log(xhr);
	        console.log(editor);
	        console.log(result);
	        console.log("图片上传并返回结果，但图片插入错误时触发");
	    },
	    error: function (xhr, editor) {
	        // 图片上传出错时触发
	        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
	         console.log("图片上传出错时触发");
	    },
	    timeout: function (xhr, editor) {
	        // 图片上传超时时触发
	        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
	    },
	
	    // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
	    // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
	    customInsert: function (insertImg, result, editor) {
	        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
	        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
	
	        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
	        var url = result.url
	        insertImg(url)
			console.log("图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）");
	        // result 必须是一个 JSON 格式字符串！！！否则报错
	    }
	    }
        editor.create()
    }
}
</script>-->