import nextElementInList from "@/utils/NextElementInList";

describe("NextElemnetInList",()=>{
  it("locates elements in list and returns the next element in list",()=>{
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D")

  });
  it("when element is at the end of the list",()=>{
    const list = ["A", "B", "C", "D", "E"];
    const value = "E";
    const result = nextElementInList(list, value);
    expect(result).toBe("A")

  })

})