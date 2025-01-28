<template>

  <div v-if="!apiError">
    <p v-if="isLoading">Loading products...</p>
    <p v-if="!isLoading && !fetchedProducts.length">Nemamo proizvode za tu kategoriju</p>
  </div>

  <p v-if="apiError">{{ apiError }}</p>

  <ul v-if="!isLoading && fetchedProducts.length">
    <li v-for="product in fetchedProducts" :key="product.id">
      {{ product.title }} - ${{ product.price }} - Stock: {{ product.stock }}
    </li>
  </ul>

</template>

<script>
import axios from "axios";

export default {

  name: 'Products',

  data() {
    return {
      fetchedProducts: [],
      apiError: null,
      isLoading: false,
    }
  },

  beforeCreate() {
    console.log("Before create")
  },

  created() {
    console.log("Created")
  },

  beforeMount() {
    console.log('Before mount')
  },

  mounted() {

    this.isLoading = true;

    axios.get(process.env.VUE_APP_DUMMYJSON_API+'/products/search?q=phone')
        .then(response => this.fetchedProducts = response.data.products)
        .catch(() => this.apiError = "Failed to load products. Please try again later.")
        .finally(() => this.isLoading = false)
  }
}
</script>