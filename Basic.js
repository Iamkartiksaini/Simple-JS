console.log("Welcome to Js");

const obj = {
  name: "kartik",
  age: 21,
};
const array = [1, 2, 3, 4];
const number = 10;

// Pure Function -dosent effcet input return output

function pureFunction(arr, logic) {
  let outPut = [];
  for (let i = 0; i < arr.length; i++) {
    let x = logic * arr[i];
    outPut.push(x);
  }
  return outPut;
}
const x1 = pureFunction(array, 5);
console.log("pureFunction", x1);

// Higher Order Functions
// Callback  - Focus on Reuseable Code - utiliy Type

function multiplyBy2(value) {
  return value * 2;
}

function higherFunction(arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let x = logic(array[i]);
    output.push(x);
  }
  return output;
}
const y = higherFunction(array, multiplyBy2);
console.log("higherFunction", y);

// Closures
// perform operation without knowing the Code
//  ex - import any  pre define function
function Closures(value1) {
  let x = value1;
  function addThree(val) {
    let x = val + number + 3;
    return x;
  }
  return addThree(value1);
}

const closures_result = Closures(10);
console.log("Closures : ", closures_result);

// Proto-Types
let nike = 10; // number
console.log("number", nike.__proto__);

// Try and Catch
try {
  newArray = 12;
} catch (err) {
  console.log("err", err);
}

// Recursion - Loop
const newArray = [5, 2, 14, 3, 1];

function sort(num) {
  console.log("Recursion", num);
  const updateNum = num - 1; // i

  if (updateNum > 0) {
    sort(updateNum);
  } else {
    return;
  }
}

sort(5);

// Recursion - Loop

function checkSort(current, arr) {
  console.log("Current number", current);
  let element = [];
  for (let i = 0; i < arr.length; i++) {
    current > arr[i] ? element.push(1) : null;
  }
  return element;
}

function sortMethod(arr) {
  let x;
  let mockArray = [];
  for (let i = 0; i < arr.length; i++) {
    x = checkSort(arr[i], arr);
    mockArray[x.length] = arr[i];
  }
  return mockArray;
}

console.log("Sorted Array", sortMethod(newArray));
const okk = [0, 4, 3];
console.log("Sorted Array", sortMethod(okk));

// take initial element from array
// compare that element with array elements with the help of loop
// make an array push elements every time when it is bigger than other
// change the value of initial point
