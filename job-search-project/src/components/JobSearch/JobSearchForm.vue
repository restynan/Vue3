<template >
  <form class ="
  flex
  items-center
  w-full
  h-12
  mt-14
  border border-solid border-brand-gray-3
  rounded-3xl">
    <font-awesome-icon :icon="['fas', 'search']" class="mx-4" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light" >
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 bottom-16">Role</label>
        <input 
          type="text" 
          placeholder="Software engineer"  
          v-model="role"
          @input="updateRole"
          class="w-full text-lg font-normal focus:outline-none">
      </div>
      <span 
      class="
        flex
        items-center
        px-3 border-l
        border-r
      border-brand-gray-3 
      bg-brand-gray-2">
      in
      </span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 bottom-16">Where</label>
        <input 
          type="text" 
          placeholder="Michigan"  
          v-model="location"
          class="w-full text-lg font-normal focus:outline-none">
      </div>
      <actions-button cssStyles="secondary" text="Search" class="rounded-r-3xl"></actions-button>
    </div>

  </form>
</template>
<script>
import ActionsButton from "@/components/Shared/ActionsButton.vue";
export default{
  name: "JobSearchForm",
  components:{
    ActionsButton,
  },
  data(){
    return{
      role: "",
      location:""

    }
  },
  methods:{
  
  }
}
</script>

<styles scope="scoped">
</styles>