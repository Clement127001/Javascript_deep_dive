//helps to understand the block scope and shadowing
// const a = 100;

// //block -> compound statemetn
// {
//   //even it is a illegal shadowing we can restrict the var withing our function
//   let a = 10;
//   console.log(a);
//   {
//     let a = 1;
//     console.log(a);
//     {
//       let a = 0;
//       console.log(a);
//     }
//   }
// }

// console.log(a);

//to understand the basic working of closures

//basic

// function fun1() {
//   let a = 0;
//   return function fun2() {
//     let b = 10;

//     let y = function fun3() {
//       console.log(a, b);
//     };
//     b = 10;
//     a = 20;
//     return y;
//   };
// }

// let outer = fun1();
// let outest = outer();
// outest();

//intermediate using setTimeout

// function fun() {
//   let a = 10;
//   setTimeout(function () {
//     console.log(a);
//   }, 1000);

//   a = 2;
// }

// fun();

// console.log(3);

//advanced setTimeout corner case using var instead of let

// for (var i = 1; i <= 5; i++) {
//   function fun2(j) {
//     setTimeout(function () {
//       console.log(j);
//     }, j * 1000);
//   }
//   fun2(i);
// }

//working with call back functions

function attachEventListener() {
  let count = 0;

  const btn = document.querySelector("#btn");

  //adding the event listener
  btn.addEventListener("click", function increaseCount() {
    console.log("Button clicked : " + ++count);
  });
}

attachEventListener();
