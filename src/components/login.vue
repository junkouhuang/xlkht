<template>
	<div class="login">
		<div class="login_bgx"></div>
		<div class="login_m">
			<div class="login_logo">
				<h1>喜乐库官网</h1>
			</div>
			<div class="login_boder" v-loading="loading" >
				<div class="login_padding">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="container containerInputColor" >
						<h2>登录名</h2>
						<el-form-item prop="username" >
							<el-input placeholder="Your name"  type="text" maxlength="12" clearable autocomplete="off" v-on:keyup.13.native.prevent="login" v-model="ruleForm.username" autofocus></el-input>
						</el-form-item>
						<h2>密  码</h2>
						<el-form-item prop="pwd"  v-if="seen">
							<el-input placeholder="Your password"  type="text" maxlength="12" autocomplete="off" v-on:keyup.13.native.prevent="login" v-model="ruleForm.pwd" >
							<i slot="suffix" @click="see" style="cursor:pointer;" class="fa fa-eye-slash" title="显示密码" ></i>
							</el-input>
						</el-form-item>
						<el-form-item prop="pwd" v-else>
							<el-input placeholder="Your password"  type="password" maxlength="12" autocomplete="off" v-on:keyup.13.native.prevent="login" v-model="ruleForm.pwd">
							<i slot="suffix" @click="see" style="cursor:pointer;" class="fa fa-eye" title="隐藏密码" ></i>
							</el-input>
						</el-form-item>
						<p class="forgot"><a href="javascript:void(0);">Forgot your password?</a></p>
						<div class="rem_sub">
							<div class="rem_sub_l">
								<el-checkbox label="Remember me" v-model="ruleForm.save_me"></el-checkbox>
							</div>
							<label>
								<el-button type="primary"  class="sub_button" @click="login">SIGN-IN</el-button>
							</label>
						</div>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Login from '../assets/js/login.js'
  export default Login
</script>


<style scoped lang="scss" >
@import '../assets/css/login.scss'
</style>


