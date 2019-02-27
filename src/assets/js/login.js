export default {
	data(){
		return {
			loading: false,
			seen:false,
			ruleForm:{
				username:"xlk",
				pwd:"123456",
				save_me:""
			},
			rules:{
				username:[
						  { required: true, message: '用户名不能为空', trigger: 'blur' },
				],
				pwd:[
					 { required: true, message: '密码不能为空', trigger: 'blur' },
                     { type: 'string', min: 6, message: '密码不允许小于6位', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		login(){
			this.$refs.ruleForm.validate((valid)=>{
				if(valid){
					this.loading=true;
					this.$api.login('authentication/login',  {"username": this.ruleForm.username, "password": this.ruleForm.pwd,"grant_type":'password'}, success => {
					   this.$message({
					        message: '登录成功',
					        type: 'success'
			         	});
			         	localStorage.token=success.msg;
					    localStorage.username=success.obj.username;
					    localStorage.role=success.obj.nickname;
					    this.$router.push({ path: '/index' });
					  },
					 failure=>{
					   this.loading = false;
					   this.$message({
				          message: '用户名或密码有误',
				          duration:'1000',
				          type:'error'
			         	});
					 })
				}
			})
		},
		see(even){
			this.seen=!this.seen;
		}
	}
}