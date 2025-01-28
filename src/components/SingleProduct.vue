
<template>
  <p>{{ this.product.id }}</p>
  <p>{{ this.product.description }}</p>
  <p>${{ this.product.price }}</p>
</template>

<script>

  import axios from "axios"

  export default {

    props: {
      id: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        product: {}
      }
    },

    mounted() {

      axios.get(process.env.VUE_APP_DUMMYJSON_API+'/products/'+this.id)
          .then(response => this.product = response.data)
          .finally(() => console.log(this.product))

    }
  }

</script>