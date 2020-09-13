<template>
<div>
<h2> This is First Part{{msg}}} </h2>
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
  name: 'dexp1',
  data () {
    return {
      msg: '>>>>>>>>>>>This is First Part '
    }
  }
}
</script>
