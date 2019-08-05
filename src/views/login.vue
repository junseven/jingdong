<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"    
      @submit="submitHandler">
    </cube-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        model:{
          username:'',
          password:''
        },
        schema:{
          fields:[
            {
              //用户名配置
              type:'input',
              modelKey:'username',
              label:'用户名',
              props: {
                placeholder: '请输入用户名'
              },
              rules:{
                required:true,
                type:'string',
                min:3,
                max:15
              },
              trigger:'blur',
              messages:{
                required:'用户名不能为空',
                min:'字符不能小于3',
                max:'字符不能大于15'
              }
            },
            //密码配置
            {
              type:'input',
              modelKey:'password',
              label:'密码',
              props: {
                placeholder: '请输入密码',
                type:'password',
                eye:{
                  open:false,
                }
              },
              rules:{
                required:true,

              },
              trigger:'blur',
              messages:{
                required:'密码不能为空',
              }
            },
            {
              type:'submit',
              label:'登录'
            }

          ]
        }
      }
    },
    methods:{
      async submitHandler(e) {
        e.preventDefault()
        try{
          const result=await this.$http.get('/api/login',{params:this.model})
          if(result.code==0){
            this.$store.commit('setToken',result.token)
            window.localStorage.setItem('token',result.token)
            alert(result.message)
          }else{
            alert(result.message)
          }
        }catch(err){
          console.log(err)
        }
    },
    }
  }
</script>

<style scoped lang="stylus">
  
</style>
