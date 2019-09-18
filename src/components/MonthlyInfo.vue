<template>
  <section>
    <Header />
    <Form />
  </section>
</template>

<script>
  import Header from './Header';
  import Form from './Form'

  export default {
    name: 'Monthly Info',
    components: {
      Header,
      Form
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