<template>
  <div>
    {{msg}}
    <router-link to="/login">Go to Bar</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {msg: "hello world"}
  }
}
</script>

<style>
</style>
