<template>
 <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
   <el-radio-button :label="false">展开</el-radio-button>
   <el-radio-button :label="true">收起</el-radio-button>
 </el-radio-group>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
export default {
  name: '',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {}
  }
}
</script>
