module.exports = {
  configureWebpack:{
    devServer:{
      port:8080,//端口号
      //Mock数据
      before(app){
        
        //用户信息池
        let userpool = [
          {username:'1881418',password:'asdasd'},
          {username:'8761637',password:'asdasd'}
        ]
        //注册接口
        app.get('/api/register',(req,res)=>{
          const {username} = req.query
          const userLength = userpool.filter(v=>v.username==username).length
          if (userLength>0){
            res.json({
              success:false,
              message:'用户名已存在',
            })
          }else{
            res.json({
              success:true,
              message:'注册成功'
            })
          }
        })
        //登陆接口
        app.get('/api/login',(req,res)=>{
          let tokenkey = 'asd' 
          const {username,password} = req.query
          const userLength = userpool.filter(v=>v.username==username&v.password==password).length
          if (userLength>0){
            res.json({
              code:'0',
              message:'登录成功',
              token:tokenkey + '-' + username +'-'+ (new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code:'1',
              message:'账号或密码错误'
            })
          }
        })
        //轮播图接口
        app.get('/api/banner',(req,res)=>{
          res.json({
            data: [
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
              }
            ]
          })
        })

        //商品分类接口
        app.get('/api/rollinglist',(req,res)=>{
          res.json({
            
            data:[
              [
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
                   {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                    label:'分类一'
                },
              ],
              [
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                 {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
                {
                    url: 'https://m.xdclass.net',
                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                    label:'分类一'
                },
              ],
            ]
          })
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}

