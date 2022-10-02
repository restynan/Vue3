import { shallowMount } from '@vue/test-utils';
import  ProfileImage from "@/components/ProfileImage";

describe("ProfileImage",()=>{
  it("renders profile image",()=>{
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);

  })


})


