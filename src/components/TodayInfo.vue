<template>
  <section class='todays-info'>
    <h3>Todays Date: {{this.todaysImage.date}}</h3>
    <h2>{{todaysImage.title}}</h2>
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
    justify-content: space-evenly;
  }
  .nasa-image {
    max-height: 450px;
    max-width: 1000px;
  }
  .nasa-explanation {
    max-width: 1000px;
    text-align: center;
  }
</style>