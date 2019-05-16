var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var candyString = 'foo'

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  return chocolateBars.push(candyString);
}
function accessElementInArray(chocolateBars, candyString){
  return chocolateBars[candyString];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift(candyString);
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(candyString);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop(candyString);
}
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length - 1)
}