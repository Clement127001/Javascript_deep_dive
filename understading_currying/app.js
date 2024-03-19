//currying the simple function
// function sum(a, b, c) {
//   return a + b + c;
// }
function sum2(a) {
  return function (b) {
    return a + b;
  };
}

const res1 = sum2(1)(2);
console.log("This is the result of simple currying function : " + res1);

//currying the three layered function
function sum3(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const res2 = sum3(1)(2)(3);
console.log("This is the result of simple currying function : " + res2);

//infinite currying fun1(1)(2)(3)(4)(5)...()
function sumInf(a) {
  return function (b) {
    if (b) {
      return sumInf(a + b);
    } else return a;
  };
}

const resInf = sumInf(1)(2)(3)(4)(5)(6)(7)();
console.log("This is the result of infinite curryig :" + resInf);

//reusability of currying

function doOperation(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;

        case "diff":
          return a - b;

        case "mul":
          return a * b;

        case "div":
          return a / b;

        default:
          return "operation is not valid";
      }
    };
  };
}

console.log(doOperation("mul")(1)(2));

//dom manipulation with currying
function changeElementText(id) {
  return function (value) {
    document.querySelector(`#${id}`).textContent = value;
  };
}

changeElementText("title")("this is the new value and I am the curried result");
