const radius = [1, 2, 3, 4];

//we have to follow the best code practises like DRY, SOLID principles while writing the code , in js functions that are first call citizes have to power to be higher order function as well as call back function

//logic
function area(rad) {
  return Math.PI * rad * rad;
}

function circumference(rad) {
  return 2 * Math.PI * rad;
}

function diameter(rad) {
  return 2 * rad;
}

//generic function (creating polyfill for map)
Array.prototype.calculate = function (logic) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }

  return res;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
// console.log(radius.map(area));

//radius - this resolve to the array
console.log(radius.calculate(diameter));
