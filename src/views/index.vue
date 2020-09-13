<template>
    <div name="c1">
      <h1>{{ msg }}</h1>
      <ul>
        <router-link id="Home" to="/Home">Home</router-link>
        <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
        <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
        <router-link id="Index" to="/Index">Index</router-link>
      </ul>
      <button @click="greet" name="but1" >Greet</button>
    </div>
</template>
<script>
export default {
  name: 'aa',
  methods: {
  // 在 `methods` 对象中定义方法
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例 console.log(this.msg) alert('Hello ' + this.msg + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        // console.log(event.target)
        alert(event.target)
        this.msg = '点击了greet后显示的'
      }
    }
  },
  data () {
    return {
      msg: '进入页面加载初始值'
    }
  }
}
</script>
