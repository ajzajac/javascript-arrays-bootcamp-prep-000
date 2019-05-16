var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  return chocolateBars.unshift(candyString);
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  return chocolateBars.push(candyString);
}

function accessElementInArray(chocolateBars, candyString){
  return chocolateBars[0];
}
