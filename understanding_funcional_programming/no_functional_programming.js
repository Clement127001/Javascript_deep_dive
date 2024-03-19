const radius = [1, 2, 3, 4];

//function to calculate the area, circumference and diameter
//but we are repiting our code  90% same for below 3 function (violation of DRY[Don't Repeat Yourself])
function calculateArea(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(Math.PI * arr[i] * arr[i]);
  }

  return res;
}

function calculateDiameter(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(2 * arr[i]);
  }

  return res;
}

function caculateCirumference(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(2 * Math.PI * arr[i]);
  }

  return res;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));
console.log(caculateCirumference(radius));
