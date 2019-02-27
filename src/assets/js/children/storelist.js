export default {
  data() {
    return {
    	pageNum:1,
    	pageSize:9,
      storelist:[],
      total:0,
      loading: true,
      dialogVisible:false,
      addLoading: false,       //是否显示loading
      hasImg:false,
      dialogImageUrl: '',
      title:'图片列表',
      storeid:'',//门店顶id
      imgid:'',//门店图片id
      dialogOpen:false ,
      imgList:[],//图片列表
      isDel:false
    };
  }, methods: {
  	 filterhasimage(value, row, column) {
	         return row["imgs"] == value;
      },
      //管理图片
      operation(row){
      	this.dialogVisible = true;
      	//获得门店id
      	this.storeid=row.id;
      	
      	if(row.imgs.length==0){
      		this.title="当前暂无门店图片";
      	}else{
      		for(var i=0;i<row.imgs.length;i++){
      			  this.imgList.push({"url":"https://image.zhizhi360.com/"+row.imgs[i].imgurl});
      		}
      		//获得门店图片id
      	  this.imgid=row.imgs[0].id;
      	}
      },
      closeDialog(row){
      	this.dialogVisible=false;//关闭模态框
      	this.imgList.length=[];
      },
      confirmChange(){
      	this.dialogVisible=false;//关闭模态框
      	if(this.isDel){
					this.$api.post('store/deleteStoreImageByImgId/'+this.imgid, '' ,localStorage.token, res => {
             if(res.success){
             	this.loading=false;
                 this.$message({
                     message:res.msg,
                     type:'success'
                 })
                 this.imgList.length=0;
                 
             }else{
                 this.$message({
                     message:res.msg,
                     type:'error'
                 })
             }
         })
      	}
      	window.location.reload();
      },
      handleClose(){
      	this.dialogVisible=false;//关闭模态框
      	this.imgList.length=[];
      },
      beforeAvatarUpload(file){
         var formData=new FormData();
         formData.append('file',file);
         var file = formData;   console.log(file);
         this.loading=true;
				 this.$api.post('store/uploadStoreImageByStoreid/'+this.storeid+"/1", file ,localStorage.token, res => {
             if(res.success){
             	this.loading=false;
                 this.$message({
                     message:res.msg,
                     type:'success'
                 })
                 this.imgList.push({"url":"https://image.zhizhi360.com/"+res.obj});
                 
             }else{
                 this.$message({
                     message:res.msg,
                     type:'error'
                 })
             }
         })

        return false;
     },
     //查看
     handlePictureCardPreview(file){
     	  this.dialogImageUrl = file.url;
      	this.dialogOpen=true;
     },
     //删除
     handleRemove(){
			this.isDel=true;
     },
	  //分页
    handleCurrentChange(val){
         this.pageNum = val;
         this.loading=true;
         this.ajax();
    },
    //获取门店列表
    ajax(){
    	this.$api.get('store/getStorePageList',{"pageNum":this.pageNum,"pageSize":this.pageSize},localStorage.token, success => {
			  this.storelist=success.list;
			  this.total=success.total;
			  this.loading=false;
			},
		 failure=>{

		 })
    },
  },
   mounted(){
    	this.ajax();
	}
}