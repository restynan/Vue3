import { mount, shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = shallowMount(MainNav);

    expect(wrapper.find(".company").text()).toBe("Infinexa careers");
  });

  it("displays menuItems for navigation",()=>{
    const wrapper = mount(MainNav);
    const navigationMenuItems =wrapper.findAll("[data-test='main-nav-list-item']");
    const navigationMenuItemsTexts = navigationMenuItems.map(item =>item.text());
    console.log(navigationMenuItemsTexts);
    expect(navigationMenuItemsTexts).toEqual(["Teams", "Locations", "Life at Infinexa", "How we hire", "Students", "Jobs"]);
  })
});

