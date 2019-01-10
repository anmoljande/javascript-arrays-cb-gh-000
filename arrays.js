var chocolateBars=["snickers","hundered grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr,element)
{
  narr=[element,...arr];
  return narr;
  
}

function destructivelyAddElementToBeginningOfArray(arr,element)
{
  arr.unshift(element);
  return arr;
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}
function accessElementArray(arr,index)
{
  return arr[index];
}
function addElementToEndOfArray(array, element)
{
  
  return array[...array,element];
}

function removeElementFromBeginningOfArra(arra)
{
  return arra.slice(0,1);
}

function destructivelyRemoveElementFromEndOfArray(arra)
{
  arra.pop();
  return arra;
}


function removeElementFromEndOfArray (array)
{
  
  return array.slice(0,array.length-1);
}
