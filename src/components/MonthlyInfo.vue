<template>
  <section>
    <Header />
    <Form v-on:setNewPhoto='grabNewPhoto'/>
    <MonthlyPhoto v-bind:newPhotoInfo="newPhotoInfo"/>
  </section>
</template>

<script>
  import Header from './Header';
  import Form from './Form';
  import { apiKey } from '../../apiKey';
  import MonthlyPhoto from './MonthlyPhoto'

  export default {
    name: 'Monthly Info',
    components: {
      Header,
      Form,
      MonthlyPhoto
    },
    data(){
      return{
        newPhotoInfo:{}
      }
    },
    methods: {
      async grabNewPhoto(newDate){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${newDate}`)
        .then(response => {
          if(!response.ok){
            return error => error.message
          }else{
            return response.json()
          }
        })
        .then(photoInfo => {
          this.newPhotoInfo = photoInfo
        })
        .catch(error => error.message)
      }
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