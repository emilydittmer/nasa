<template>
  <form>
    <label>Please select a date:</label>
    <input type='date' v-model='inputDate'/>
    <input type='submit'/>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return {
      inputDate:''
    }
  }

}
</script>

<style>

</style>