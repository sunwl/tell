<template>
  <div id="ase">
    <p v-if="seen">现在你看到我了</p>
    <template v-if="ok">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
    <ul>
      <router-link id="Home" to="/Home">Home</router-link>
      <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
      <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
      <router-link id="Index" to="/Index">Index</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      seen: true, ok: true
    }
  }
}
</script>
