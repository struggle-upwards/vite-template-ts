<template>
  <div>创建成功</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
console.log("前端端口为：",import.meta.env.VITE_CLI_PORT);
console.log("后端端口为：",import.meta.env.VITE_SERVER_PORT);
console.log("后台请求的接口地址为：",import.meta.env.VITE_API_URL);
</script>
<style lang="scss" scoped>
div {
  color: red;
}
</style>
