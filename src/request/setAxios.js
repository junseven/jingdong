import axios from 'axios';
import router from '../router';
import store from '../store';
//http全局拦截
//token放在请求header上带给后端
  axios.interceptors.request.use(
    //请求拦截
    config =>{
      if(store.state.token){
        config.header.token = store.state.token
      }
      return config
    }
    
  )
  axios.interceptors.response.use(
      response=>{
        if(response.status == 200){
          const data = response.data
          if(data.code == -1){
            //登陆过期清空localStorage
            store.commit('setToken','')
            localStorage.removeItem('token')
            router.replace({path:'/login'})
          }
          return data
        }
        return response
      }
  )
    