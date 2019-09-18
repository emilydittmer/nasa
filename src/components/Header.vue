<template>
  <header class='header'>
     <router-link to="/" class='main-title'>NASA APoD</router-link>
     <router-link to="/ViewPhotosByDate" class='monthly-link'>View More Photos</router-link>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
  .main-title {
    font-size: 4em;
    align-content: left;
    margin: 15px;
    text-decoration: none;
    color: hsl(210, 29%, 24%)
  }
  .monthly-link {
    font-size: 1.5em;
    margin-top: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: hsl(210, 29%, 24%);
  }
  .main-title:hover {
    color: hsla(210, 29%, 24%, 0.452);
  }
  .monthly-link:hover {
    color: hsla(210, 29%, 24%, 0.452);
  }

</style>