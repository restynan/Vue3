import { shallowMount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  it(" when user is on job page displays job count", () => {
    const wrapper = shallowMount(SubNav,{
      global:{
        stubs:{
          FontAwesomeIcon: true,
        }
      },
      data(){
        return{
          onJobsPage: true,
        }
      }

    });

    expect(wrapper.find("[data-test='job-count']").exists()).toBe(true);
  });

  it("when user is not on job page doesnot displays job count", () => {
    const wrapper = shallowMount(SubNav,{
      global:{
        stubs:{
          FontAwesomeIcon: true,
        }
      },
      data(){
        return{
          onJobsPage: false,
        }
      }

    });

    expect(wrapper.find("[data-test='job-count']").exists()).toBe(false);
  });


});