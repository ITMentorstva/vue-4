
<template>

  <router-link :to="{name: 'Home'}">Homepage</router-link>
  <router-link :to="{name: 'Products'}">Products</router-link>

  <router-view></router-view>

</template>

<script>

export default {
  name: "App",
}


</script>