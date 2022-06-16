<template>
  <div class="app-component">
    App
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        isLoading: true, 
        hasLoadError: false
      }
    }, 
    mounted(){
      this.$store.dispatch('fetchUserData')
      .then(result => {
        console.log('result', result);
      })
      .catch(e => {
        console.log(e);
        this.hasLoadError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
    computed: {
      userData(){
        return this.$store.getters['userData'];
      }
    }
  }
</script>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    box-sizing:inherit;
  }

  html{
    font-size:62.5%;
    box-sizing:border-box;
  }

  button, 
  a, 
  select {
    cursor:pointer;
  }
</style>
