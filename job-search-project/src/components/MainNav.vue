<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="company flex items-center h-full text-xl">
          {{ companyName }} careers
        </a>
        <nav class="h-full ml-12">
          <ul class="flex p-0 m-0 h-full">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="/" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
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
import ActionsButton from "@/components/ActionsButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";


export default {
  name: "MainNav",
  components: { 
    ActionsButton, 
    ProfileImage, 
    SubNav},
  data() {
    return {
      isUserloggedIn: false,
      companyName: "Infinexa",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Infinexa",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
  methods: {
    loginUser() {
      this.isUserloggedIn = true;
    },
  },
};
</script>

<style scoped></style>
