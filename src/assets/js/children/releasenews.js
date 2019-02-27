import E from 'wangeditor'

 import '../../../../static/UE/ueditor.config.js'
 import '../../../../static/UE/ueditor.all.js'
 import '../../../../static/UE/lang/zh-cn/zh-cn.js'

  export default {
    data() {
      return {
      	loading:false,
		ruleForm:
				{
					buscode:'',
					/*lb:'',*/
					title:'',
				    headimg: [ ],
					fbtime:'',
					uetext:'',

				},
				rules:{
					/*lb:[
						{ required: true, message: '所属类别不能为空', trigger: 'blur' },
					],*/
					title:[
						 { required: true, message: '标题不能为空', trigger: 'blur' },
					],
					/* img:[
						 { required: true, message: '标题图片不能为空', trigger: 'blur' },
					], */
					fbtime:[
						 { required: true, message: '发布时间不能为空', trigger: 'blur' },
					],
					/* uetext:[
						 { required: true, message: '内容不能为空', trigger: 'blur' },
					] */
				}
      };
    },
    methods: {
    	//标题图片上传
	    uploadFile(file){
                 var formData=new FormData();
                 formData.append('file',file);
                 var file = formData;
				 this.$api.post('cms_com_activity/uploadImageByServer', file ,localStorage.token, res => {
                     if(res.success){
                         this.$message({
                             message:res.msg,
                             type:'success'
                         })
                         this.ruleForm.headimg.push({"url":res.obj});
                     }else{
                         this.$message({
                             message:res.msg,
                             type:'error'
                         })
                     }
                 })
                return false;
       },
       //删除图片
       removeFile(){
       	 this.ruleForm.headimg=[];
       },
       //发布新闻
		subimtbtn(){
			this.$refs.ruleForm.validate((valid)=>{
				if(valid){
					this.loading=true;
					this.$api.post('cms_com_activity/createCmsComActivity',  {"buscode":this.ruleForm.buscode, "bustitle": this.ruleForm.title,"headimg":this.ruleForm.headimg[0].url,"fbtime":this.ruleForm.fbtime,"content":UE.getEditor('editor').getContent()},localStorage.token, success => {
						 this.loading=false;
						 this.$message({
									message: '新增成功',
									type: 'success'
							});
							this.$confirm('是否切换到新闻列表界面?', '新增成功', {
					          confirmButtonText: 'OK',
					          cancelButtonText: 'Cancel',
					          type: 'warning'
					        }).then(() => {
					           this.$router.push({ path: '/newslist' });
					        }).catch(() => {
					                 
					        });
						},
					 failure=>{
						 this.loading = false;
						 this.$message({
									message: '新增失败',
									duration:'1000',
									type:'error'
								});
					 })
					
				}
			})
		},
		//格式化发布时间
		 formatTime(time){
		 	 this.ruleForm.fbtime=time;   //date是绑定的值 
            }
  },
    mounted(){
    	//申请buscode
    	this.$api.get('cms_com_activity/applyCmsComActivityCode','',localStorage.token, success => {
			this.ruleForm.buscode=success.obj;
			},
		 failure=>{

		 })
    	
   	　   //实例化编辑器
	    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
	    var ue = UE.getEditor('editor');
	    UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
	    UE.Editor.prototype.getActionUrl = function(action) {
	        if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
	            return 'http://localhost:8061/ueditor/uploadimage';
	        } else if (action == 'uploadvideo') {
	            return 'http://a.b.com/video.php';
	        } else {
	            return this._bkGetActionUrl.call(this, action);
	        }
	    }
	},
	destroyed: function () {
     	UE.getEditor('editor').destroy();
   }
}