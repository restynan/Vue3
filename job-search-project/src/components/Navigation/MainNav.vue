<template>
  <header :class="['w-full', 'text-sm', headerHeight]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link :to="{name: 'Home'}" class="company flex items-center h-full text-xl">
          Infinexa careers
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex p-0 m-0 h-full">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link :to="{name: menuItem.urlName}" class="flex items-center h-full py-2.5">{{
                menuItem.text
              }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center ml-auto">
          <profile-image v-if="isUserloggedIn" data-test="profile-image" />
          <actions-button
            v-else
            text="sign in"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isUserloggedIn" data-test='subnav'/>
    </div>

  </header>
</template>

<script>
import ActionsButton from "@/components/Shared/ActionsButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";


export default {
  name: "MainNav",
  components: { 
    ActionsButton, 
    ProfileImage, 
    SubNav},
  data() {
    return {
      isUserloggedIn: false,
      menuItems: [
        {text: "Teams", urlName: "Home"},
        {text: "Locations", urlName: "Home"},
        {text: "Life at Infinexa", urlName: "Home"},
        {text: "How we hire", urlName: "Home"},
        {text: "Students", urlName: "Home"},
        {text: "Jobs", urlName: "JobResults"},
      ],
    };
  },
  computed:{
    headerHeight(){
      return{
        "h-16": !this.isUserloggedIn,
        "h-32": this.isUserloggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isUserloggedIn = true;
    },
  },
};
</script>

<style scoped></style>
