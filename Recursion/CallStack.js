console.log("Call Stack");
//NOTE: Driver Function
function wakeUp() {
  takeAShower();
  haveBreakfast();
  console.log("Ready To Go");
}
//1
function takeAShower() {
  return "Showering";
}
//2
function haveBreakfast() {
  var breakfastMeal = cookMeal();
  return `Ate ${breakfastMeal}`;
}
//3
function cookMeal() {
  return "🍞 And 🥚";
}

wakeUp();
