import Qs from 'qs'

// 配置API接口地址
var root = 'http://localhost:8061'
//192.168.10.237
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
 return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
 for (var key in o) {
  if (o[key] === null) {
   delete o[key]
  }
  if (toType(o[key]) === 'string') {
   o[key] = o[key].trim()
  } else if (toType(o[key]) === 'object') {
   o[key] = filterNull(o[key])
  } else if (toType(o[key]) === 'array') {
   o[key] = filterNull(o[key])
  }
 }
 return Qs.stringify(o)
}
/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/
 
function apiAxios (method, url, params,token, success, failure) {
 /*if (params) {
  params = filterNull(params)
 }*/
  axios({
  method: method,
  url: url,
  data: method === 'POST' || method === 'PUT'? params : null,
  params: method === 'GET' || method === 'DELETE' ? params : null,
  baseURL: root,
  withCredentials: true,
  headers: {
    'Authorization':'Bearer '+token
  },
 })
 .then(function (res) { 
 	success(res.data)
 })
 .catch(function (err) {
   let res = err.response
  if (err) {
   failure(res.status)
  }
 })
}

function apiImage (method, url, params,token, success, failure) {
 /*if (params) {
  params = filterNull(params)
 }*/
  axios({
  method: method,
  url: url,
  data: method === 'POST' || method === 'PUT'? params : null,
  params: method === 'GET' || method === 'DELETE' ? params : null,
  baseURL: root,
  withCredentials: true,
  headers: {
    'Authorization':'Bearer '+token
  },
 })
 .then(function (res) {
    success(res.data)
 })
 .catch(function (err) {
   let res = err.response
  if (err) {
   failure(res.status)
  }
 })
}

function apiLogin (method, url, params, success, failure) {
 if (params) {
  params = filterNull(params)
 }
 axios({
  method: method,
  url: url,
  data: method === 'POST' || method === 'PUT' ? params : null,
  params: method === 'GET' || method === 'DELETE' ? params : null,
  baseURL: root,
  withCredentials: true,
  headers: {
   'Authorization':'Basic Y21zOjJmY2M1NjQ1LTc2ODQtNGQ3My1iYWU1LWQyNWI4MmYzYzUyMA=='
  },
 })
 .then(function (res) {
  if (res.data.success === true) {
   if (success) {
    success(res.data)
   }
  } else {
   if (failure) {
    failure(res.data)
   } else {
    window.alert('error: ' + JSON.stringify(res.data))
   }
  }
 })
/* .catch(function (err) {
  let res = err.response
  if (err) {
   window.alert('api error, HTTP CODE: ' + res.status)
  }
 })*/
}

function apiPage (method, url, params, token, success, failure) {
  axios({
	  method: method,
	  url: url,
	  data: method === 'POST' || method === 'PUT' ? params : null,
	  params: method === 'GET' || method === 'DELETE' ? params : null,
	  baseURL: root,
	  withCredentials: true,
	  headers: {
	    'Authorization':'Bearer '+token
	  },
	 })
	 .then((res) =>{
	  if (res.data.list !=undefined) {
	   if (success) {
	    success(res.data)
	   }
	  }else if(res.data.length !=0){
	  	if (success) {
	    success(res.data)
	   }
	  }else {
	   if (failure) {
	    failure(res.data)
	   } else {
	    window.alert('error: ' + JSON.stringify(res.data))
	   }
	  }
	 })
	 .catch(function (err) {
	   let res = err.response
	  if (err) {
	   failure(res.status)
	  }
	 })
}
 
 
// 返回在vue模板中的调用接口
export default {
 get(url, params,token, success, failure) {
   apiAxios('GET', url, params,token, success, failure)
 },
 post(url, params, token, success,failure) {
   apiAxios('POST', url, params, token,success, failure)
 },
 login(url, params, success, failure) {
   apiLogin('POST', url, params, success, failure)
 },
 page(url, params,token, success, failure) { //返回结果
  apiPage('GET', url, params,token, success, failure)
 },
 image(url, params,token, success, failure) { //返回结果
  apiImage('GET', url, params,token, success, failure)
 },
 put(url, params,token, success, failure) {
   apiAxios('PUT', url, params,token, success, failure)
 },
 delete(url, params,token, success, failure) {
   apiAxios('DELETE', url, params,token, success, failure)
 }
}