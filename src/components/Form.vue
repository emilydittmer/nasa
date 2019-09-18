<template>
  <form @submit='setDate'>
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
  },
  methods: {
    setDate() {
      const newDate = this.inputDate
      this.$emit('setNewPhoto', newDate)
    }
  }
}
</script>

<style>

</style>