<template>
  {{ productId }}
  <SingleProduct :id="productId"></SingleProduct>
</template>

<script>
  import SingleProduct from "@/components/SingleProduct.vue";

  export default {
    components: {SingleProduct},
    computed: {
      productId(){
        return this.$route.params.id;
      }
    },
    beforeCreate() {

      if(isNaN(this.$route.params.id)  || this.$route.params.id < 1) {
        this.$router.replace({name: "Products"});
      }

    }
  }
</script>