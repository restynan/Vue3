import { shallowMount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  //this is used to mockout the real route object
 /* const $route ={
    name : "JobResults"
  }*/
  
  //factory function
  const createConfig = (routeName)=>({
    global:{
      mocks:{
        $route:{
          name : routeName
        },
      },
      stubs:{
        FontAwesomeIcon: true,
      }
    }
  });


  it(" when user is on job page displays job count", () => {
    
    const wrapper = shallowMount(SubNav,createConfig("JobResults"))
    expect(wrapper.find("[data-test='job-count']").exists()).toBe(true);
  });

  it("when user is not on job page doesnot displays job count", () => {
    //name that is not jobs page
    const wrapper = shallowMount(SubNav,createConfig("Home"));
    expect(wrapper.find("[data-test='job-count']").exists()).toBe(false);
  });


});