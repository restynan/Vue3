import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.find(".company").text()).toBe("Infinexa careers");
    expect(wrapper.text()).toMatch("Infinexa");
  });
});
