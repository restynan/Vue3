import { shallowMount } from "@vue/test-utils"
import ActionsButton from "@/components/Shared/ActionsButton"

describe("ActionsButton", ()=>{
  it("should render the props text", ()=>{
      const wrapper = shallowMount(ActionsButton, {
        props:{
          text: "sign in", 
        },
      })
     expect( wrapper.find("[data-test='actions-button']").text()).toBe("sign in")
     expect( wrapper.find("[data-test='actions-button']").classes("primary")).toBe(true)
  })

  it("should apply the provided css styles to button", ()=>{
    const wrapper = shallowMount(ActionsButton, {
      props:{
        text: "sign in",
        cssStyles: "secondary"  
      },
    })
   expect( wrapper.find("[data-test='actions-button']").classes("secondary")).toBe(true)
  })
})