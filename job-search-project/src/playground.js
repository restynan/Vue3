//test out  concepts
/*const fruits = ["Apples", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

console.log([...fruits, ...vegetables]);*/

export const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

export const multiply = (num1,num2)=>{
  return num1*num2;
};


const developer = {
  salary: 10000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doublesalary() {
    this.salary *= 2;
    this.lookingForWork = false;
  },
};

console.log(developer.salary);
console.log(developer.lookingForWork);
developer.doublesalary();
console.log(developer.salary);
console.log(developer.lookingForWork);
