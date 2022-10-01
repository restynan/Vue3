<template>
  <button
    :class="stylingClass" data-test="actions-button" >
    {{ text }}
  </button>
</template>
<script>

export default ({
  name: "ActionsButton",
  props:{
    text:{
      type: String,
      required: true,
    },
    cssStyles:{
      type : String,
      required: false,
      default: "primary",
      validator(value){
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed:{
    stylingClass(){
      return{
        [this.cssStyles]:true
      }
    }
  }
})
</script>
<style scoped>
  button{
    @apply px-5 py-3 rounded font-medium;
  }
  .primary{
    @apply text-white bg-brand-blue-1 hover:shadow-blue
    }
  .secondary{
    @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white
  }
</style>
