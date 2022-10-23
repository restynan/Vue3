<template>
  <div
    class="
      w-full 
      h-16 
      px-8  
      bg-white 
      border-b 
      border-solid 
      border-x-brand-gray-1 
      flex 
      items-center ">
    <div v-if="onJobResultsPage" data-test='job-count'>
      <font-awesome-icon :icon = "['fas', 'search']" class="ml-3" /> 
      <span >
        <span class="text-brand-green-1 mx-2"> 5679 </span>  jobs matched
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name:"SubNav",
  computed:{
    onJobResultsPage(){
      return this.$route.name === "JobResults";
    }
  }
  
};

</script>
