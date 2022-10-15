import HeadLine from "@/components/JobSearch/HeadLine.vue"
import { shallowMount } from "@vue/test-utils";
import { nextTick } from 'vue'


describe("HeadLine",()=>{
  beforeEach(()=>{
    jest.useFakeTimers("legacy");
  })
  afterEach(()=>{
    jest.useRealTimers()
  })

  it("should display introductory action verb",()=>{
    const wrapper = shallowMount(HeadLine)
    const actionPhrase = wrapper.find("[data-test='action-phrase']")
    expect(actionPhrase.text()).toBe("Build for everyone")   
  })

  it("changes action verb at a consistent interval",()=>{    
    shallowMount(HeadLine)
    expect(setInterval).toHaveBeenCalled();    
  })

  it("swaps action verb after first interval",async()=>{
    const wrapper = shallowMount(HeadLine)
    jest.runOnlyPendingTimers()
    // nextTick use it when you have changed data and wait for the DOM update
    await nextTick()
    console.log(wrapper.vm.action)
    const actionPhrase = wrapper.find("[data-test='action-phrase']")
    expect(actionPhrase.text()).toBe("Create for everyone")    
  })

  it("removes interval when component disappers ",()=>{  
    const wrapper = shallowMount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled()
  })

});