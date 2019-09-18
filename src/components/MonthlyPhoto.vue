<template>
  <section class='todays-info' v-if='this.newPhotoInfo.date'>
    <h3 class='date'>Selected Date: {{this.newPhotoInfo.date}}</h3>
    <h2 class='nasa-title'>{{newPhotoInfo.title}}</h2>
    <img
      class="nasa-image"
      v-bind:src="`${this.newPhotoInfo.hdurl}`"
      v-bind:alt="`${this.newPhotoInfo.title} image`"
    />
    <p class='nasa-explanation'>{{newPhotoInfo.explanation}}</p>
  </section>
</template>

<script>
  export default {
    name: 'MonthlyPhoto',
    props: ['newPhotoInfo']
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
  }
  .nasa-image {
    max-height: 400px;
    max-width: 1000px;
  }
  .nasa-explanation {
    max-width: 1000px;
    text-align: center;
    font-size: 1em;
  }
</style>