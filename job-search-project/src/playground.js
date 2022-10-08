//dynamic object properties
const favoriteFood = "sushi";

const goodFoods ={
  [favoriteFood]: true,
};
console.log(goodFoods)
//wait 2 second and execute what is in te function
setTimeout(()=>{
  console.log("I will print 2 seconds after the program starts")
},2000)

const interval = setInterval(()=>{
  console.log("I will print every 2 seconds")
},2000)
// setInterval has a timeout object that it is used to keep track of the interval
console.log(interval)
//shutdown the intervals
clearInterval(interval)
