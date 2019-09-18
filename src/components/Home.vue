<template>
  <div class='home'>
    <Header />
    <TodayInfo v-bind:todaysImage="todaysImage"/>
  </div>
</template>

<script>
import { apiKey } from '../../apiKey';
import Header from './Header'
import TodayInfo from './TodayInfo'

export default {
  name: 'Home',
  components: {
    Header,
    TodayInfo,
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
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* justify-content: center; */
  color: #2c3e50;
}


</style>
