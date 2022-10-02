<template>
  <div>
    <main-nav />
    <HeroPage/>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroPage from "./components/HeroPage.vue";
export default {
  name: "App",  
  components: { MainNav, HeroPage },
};
</script>
