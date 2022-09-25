import {oddOrEven, multiply }from "@/playground"

describe("basic math", ()=>{
  it ("adds two numbers",()=>{

    expect(2+3).toBe(5)

  });
  it("subtracts two numbers",()=>{

    expect(7-4).toBe(3)


  });

})


describe("oddOrEven", ()=>{
  it("check number  even", ()=>{
    expect(oddOrEven(4)).toBe("even")
  });
  it("check number odd", ()=>{
    expect(oddOrEven(7)).toBe("odd")
  });
})

describe("multply",()=>{
  it("multiplies two numbers together",()=>{
    expect(multiply(2,3)).toBe(6)
  })
});