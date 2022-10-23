import {mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm",()=>{
 
  it("when user submits the form it directs user to job results page with user's search parameters",async ()=>{
    const push =jest.fn();
    const $router ={ push};
    const wrapper= mount(JobSearchForm,{
      attachTo: document.body,
      global:{
        mocks:{
          $router,
  
        },
        stubs:{
          FontAwesomeIcon: true,
        },
      }
    });

    const roleIput = wrapper.find("[data-test='role-Input']");
    await roleIput.setValue("Vue developer");

    const locationIput = wrapper.find("[data-test='location-Input']");
    await locationIput.setValue("Iowa");

    const submitButton = wrapper.find("[data-test='form-submit-button']");
    await submitButton.trigger("click");
    expect(push).toHaveBeenCalledWith({
      name: "JobResults",
      query:{
        role: "Vue developer",
        location: "Iowa"
      }
    })


  });


});
