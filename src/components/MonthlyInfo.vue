<template>
  <section>
    <Header />
    <Form />
  </section>
</template>

<script>
  import Header from './Header';

  export default {
    name: 'Monthly Info',
    components: {
      Header
    }
  }
</script>

<style scoped>
  .main-title {
    font-size: 4em;
    align-content: left;
    margin: 15px;
  }
</style>