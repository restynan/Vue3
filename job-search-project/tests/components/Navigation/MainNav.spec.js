import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
//factory function
  const createConfig = () => ({
    global:{
      stubs:{
        "router-link": RouterLinkStub,
      }
    }

  })


  /*beforeEach(()=>{
    wrapper = shallowMount(MainNav,{
      global:{
        stubs:{
          "router-link": RouterLinkStub,
        }
      }
    });
*/

  it("displays the company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.find(".company").text()).toBe("Infinexa careers");
  });

  it("displays menuItems for navigation",()=>{
    const wrapper = shallowMount(MainNav, createConfig());
    const navigationMenuItems =wrapper.findAll("[data-test='main-nav-list-item']");
    const navigationMenuItemsTexts = navigationMenuItems.map(item =>item.text());
    expect(navigationMenuItemsTexts).toEqual(["Teams", "Locations", "Life at Infinexa", "How we hire", "Students", "Jobs"]);
  })

  it("should see the sign-button when user is not logged in",()=>{
    const wrapper = shallowMount(MainNav, createConfig());
    
    const signButton = wrapper.find("[data-test='login-button']");
    expect(signButton.exists()).toBe(true);
    
  })

  it("should see profile image when user is logged in",async ()=>{
    const wrapper = shallowMount(MainNav, createConfig());
   
    let profileImage = wrapper.find("[data-test='profile-image']")
    expect(profileImage.exists()).toBe(false)

    const signButton = wrapper.find("[data-test='login-button']");
    await signButton.trigger("click");
    profileImage = wrapper.find("[data-test='profile-image']")
    expect(profileImage.exists()).toBe(true);
    
    
  })

  it ("it displays subnavigation menu ",async ()=>{
    const wrapper = shallowMount(MainNav, createConfig()  
    );

  expect(wrapper.find("[data-test='subnav']").exists()).toBe(false);

  const signButton = wrapper.find("[data-test='login-button']");
  await signButton.trigger("click");

  expect(wrapper.find("[data-test='subnav']").exists()).toBe(true);
  
  })


});
