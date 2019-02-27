  export default {
    data() {
      return {
				username:"",
				role:"",
				themecolor: '#409EFF',
        isCollapse: true,
				menuList:[
					{"name":"新闻资讯","index":"1",child:[{"path":"/releasenews","name":"发布管理"},{"path":"/newslist","name":"新闻列表"}]},
					{"name":"门店管理","index":"2",child:[{"path":"/storelist","name":"门店列表"}]},
					{"name":"授权证书","index":"3",child:[{"path":"/certificatelist","name":"证书列表"}]}
				]
      };
    },
    methods: {
			//主题切换
			switchtheme(){
				
			},
			//退出 登录
			logout(){
				this.$confirm('确定退出?', 'Warning', {
				  confirmButtonText: 'OK',
				  cancelButtonText: 'Cancel',
				  type: 'warning'
				}).then(() => {
					this.$router.push({ path: '/' });
				}).catch(() => {
				        
				});
			},
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
		mounted(){
			//缓存里获取登录名
			this.username=localStorage.username;
			//缓存里获取角色
			this.role=localStorage.role;
		}
  }