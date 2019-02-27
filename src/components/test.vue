<template>
   <div>
   	父组件
   	<input type="text" v-model="name" />
        <br />
        <br />
        <!-- 引入子组件-->
        <child :inputName="name"></child>
    </div>
</template>

<script>
import child from './children/child'
export default {
  components: {
  	child
  },
  data () {
       return {
          name: ''
        }
  },
  methods:{
     
  }
}
</script>

