<template>
  <div id="index">
    <!-- 轮播图 -->
    <cube-slide  slot="dots" ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动列表 -->
    <cube-slide  slot="dots" ref="slidelist" :data="lists" @change="changePage">
      <cube-slide-item v-for="(list, index) in lists" :key="index" >
        <ul class="listul">
          <li v-for ="(item,index) in list" :key = "index" >
            <a :href="item.url">
              <img :src="item.image" alt="">
              <p>{{item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        items: [],
        lists:[]
      }
    },
    methods: {
      changePage(current) {
        // console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    },
    async created(){
      try{
        //获取轮播图数据
        const items = await this.$http.get('/api/banner')
        this.items = items.data
        //获取分类列表数据
        const lists = await this.$http.get('/api/rollinglist')
        this.lists = lists.data
      }catch(err){
        console.log(err)
      }
    }

  }
</script>

<style scoped lang="stylus">
  #index 
    a
      .banner
        display  block
        width 100%
        height 175px
    .listul
      display flex
      flex-wrap wrap
      
      li
        width:20%
        justify-content center
        img
          width 35px
          height 35px
          border-radius 50%
          padding:5px 0
        p
          font-size 14px
          padding-bottom 10px
</style>
