<template>
  <div class="about">
    <h1>Job results</h1>
<button @click="goToHomePage"> go to Home Page</button>

    <h2>{{test}}</h2>


  </div>
</template>

<script>
export default {
  name: 'JobResultsView', 
  computed:{
    test(){
      console.log(this.$router);
      return "test"
    }

  },
  methods:{
    goToHomePage(){
      this.$router.push({name:"Home"})
    }
  }

}
</script>

