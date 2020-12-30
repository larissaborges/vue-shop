<template>
  <div class="home">
    <Hero/>
    <Products/>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Products from '../sections/Products'

export default {
  name: 'Home',
  components: { Hero, Products }
}
</script>
