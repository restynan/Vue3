<template>
  <div>
    <main-nav />
    <HeroPage/>
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import HeroPage from "@/components/JobSearch/HeroPage.vue";
export default {
  name: "App",  
  components: { MainNav, HeroPage },
};
</script>
