export default {
  data() {
    return {
      newsList:[],
      total:0
    };
  }, methods: {
  	//下架新闻
  	delNews(buscode,status){
  		let waringTxt;
  		let zt;
  		if(status==0){
  			waringTxt="确定下架吗？";
  			zt=9;
  		}else{
  				waringTxt="确定上架吗？";
  				zt=0;
  		}
  		this.$confirm(waringTxt,'Warning',{
  			confirmButtonText:'ok',
  			cancelButtonText:'Cancel',
  			type:"warning"
  		}).then(()=>{
  				this.$api.post('cms_com_activity/withdrawActivityByCode/'+buscode+"/"+zt,'',localStorage.token, res => {
					  if(res.success){
					  	this.$message({
				          message: res.msg,
				          duration:'1000',
				          type:'success'
			         });
			         window.location.reload();
					  }else{
					  	this.$message({
				          message: res.msg,
				          duration:'1000',
				          type:'error'
			         	});
					  }
					},
				 failure=>{
		
				 })
  		})
  	},
  	//查看详情
  	seeDetaill(item){
  		this.$router.push({path:'/newsdetail', query: {row:item}})
  	}
  },
   mounted(){
    	  this.$api.get('cms_com_activity/getCmsComActivityPageList','',localStorage.token, success => {
			  this.newsList=success.list;
			  this.total=success.pages;
			},
		 failure=>{

		 })
	}
}