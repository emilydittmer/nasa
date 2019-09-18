<template>
  <section class='todays-info'>
    <h3 class='date'>Todays Date: {{this.todaysImage.date}}</h3>
    <h2 class='nasa-title'>{{todaysImage.title}}</h2>
    <img
      class="nasa-image"
      v-bind:src="`${this.todaysImage.hdurl}`"
      v-bind:alt="`${this.todaysImage.title} image`"
    />
    <p class='nasa-explanation'>{{todaysImage.explanation}}</p>
  </section>
</template>

<script>
  export default {
    name: 'TodayInfo',
    props: ['todaysImage']
  }
</script>

<style scoped>
  .todays-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;
  }
  .date {
    margin: 0;
  }
  .nasa-title {
    font-size: 2em;
    margin: 0 10px;
  }
  .nasa-image {
    max-height: 400px;
    max-width: 1000px;
  }
  .nasa-explanation {
    max-width: 1000px;
    text-align: justify;
    font-size: 1em;
  }
</style>