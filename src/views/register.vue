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
              label:'注册'
            }

          ]
        }
      }
    },
    methods:{
      submitHandler(e) {
        e.preventDefault()
        this.$http.get('/api/register',{params:this.model}).then(res=>{
          console.log(res.success)
        }).catch(err=>{
          console.log(err)
        })
    },
    }
  }
</script>