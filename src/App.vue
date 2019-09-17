<template>
  <div id="app">
    <h1>Nasa Info</h1>
  </div>
</template>

<script>
import { getTodaysInfo } from '../apiCalls';
import { apiKey } from '../apiKey'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      todaysImage: {}
    }
  },
  async created() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => {
      if(!response.ok){
        return error => error.message
      }else{
        return response.json()
      }
    })
    .then(todaysInfo => {
      this.todaysImage = todaysInfo
    })
    .catch(error => error.message)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
