<template>
  <form @submit='setDate'>
    <label>Please select a date:</label>
    <input type='date' v-model='inputDate'/>
    <input type='submit' class='btn'/>
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
  form {
    margin-left: 20px;
  }
  .btn {
    background-color: hsl(210, 29%, 24%);
    color: #fff;
  }
  .btn:hover{
    background-color:hsla(210, 29%, 24%, 0.452);
    color: black;
  }
</style>