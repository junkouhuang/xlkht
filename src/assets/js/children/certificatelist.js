export default {
  data() {
    return {
      certificatelist:[],
      total:0,
      pageNum:1,
      pageSize:6,
      dialogVisible:false,
      imgList:[],//证书列表
      dialogOpen:false,//查看证书
      dialogImageUrl:''
    };
  }, methods: {
  	del(id){
  		 this.$api.post('xlkcert/deleteXlkCertByid/'+id, "" ,localStorage.token, res => {
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
  	},
  	//上传证书
  	opedDialog(){
  		this.dialogVisible=true;
  	},
  	handleClose(){
  		this.dialogVisible=false;
  	},
  	//查看证书
  	handlePictureCardPreview(){
  		
  	},
  	//删除证书
    handleRemove(){
    	
    },
    beforeAvatarUpload(file){
    	   let formData=new FormData();
         formData.append('file',file);
         var file = formData;   console.log(file);
         this.loading=true;
				 this.$api.post('xlkcert/uploadXlkCert', file ,localStorage.token, res => {
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
    closeDialog(){
    	this.dialogVisible=false;
    },
	  confirmChange(){
	  	this.dialogVisible=false;
	  }
  },
   mounted(){
   	//获取喜乐库证书
    	this.$api.get('xlkcert/getXlkCertPageList',{"pageNum":this.pageNum,"pageSize":this.pageSize},localStorage.token, success => {
			  this.certificatelist.length=0;
			  for(var i=0;i< success.list.length;i++){
			  	this.certificatelist.push({"url":"https://image.zhizhi360.com/"+success.list[i].certurl,"id":success.list[i].id});
			  }
			
			  this.total=success.pages;
			},
		 failure=>{

		 })
	}
}