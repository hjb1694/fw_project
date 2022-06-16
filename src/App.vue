<template>
  <div class="app-component">
    <div v-if="isLoading && !hasLoadError"> 
      Loading users...
    </div>
    <div v-else-if="!isLoading && hasLoadError"> 
      Oh no! An error has occurred!
    </div>
    <template v-else>
      <input 
      class="search-box" 
      type="text" 
      placeholder="Search By Name" 
      v-model="searchCriteria" 
      @input="search"
      />
      <app-table :user-data="filteredUserData" />
    </template>
  </div>
</template>

<script>
  import Table from './components/Table.component.vue';

  export default {
    name: 'app',
    components: {
      'app-table': Table
    },
    data(){
      return {
        isLoading: true, 
        hasLoadError: false, 
        searchCriteria: ''
      }
    }, 
    methods: {
      search(){
        this.$store.dispatch('searchUsers', this.searchCriteria);
      }
    },
    mounted(){

      // Fetching user data from API Upon Startup

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
      filteredUserData(){
        return this.$store.getters['filteredUserData'];
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

  .search-box{
    font-size:2rem;
    width:50%;
    display:block;
    margin:2rem auto;
    padding:3px;
  }
</style>
