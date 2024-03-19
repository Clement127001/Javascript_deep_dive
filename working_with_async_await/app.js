// function p1() {
//   return new Promise(function (resolve, reject) {
//     let rand = Math.floor(Math.random() * 20);

//     setTimeout(function () {
//       resolve(rand);
//     }, 2000);
//   });
// }

// function p2(data) {
//   return new Promise(function (resolve, reject) {
//     if (data > 10) {
//       setTimeout(function () {
//         resolve("Number is greater than 10");
//       }, 5000);
//     } else {
//       setTimeout(function () {
//         reject("Number is not greater than 10");
//       }, 5000);
//     }
//   });
// }

// async function doTask() {
//   try {
//     console.log("welcome to the world of promises mame");
//     const data = await p1();
//     console.log(data);
//     const data2 = await p2(p1);
//     console.log(data2);
//   } catch (err) {
//     console.log(err);
//   }
// }

// doTask();

//understanding the return type of the async function
// async function dummy() {
//   return "Hi";
// }

// const res = dummy();

// res.then(function (data) {
//   console.log(data);
// });

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P1 success");
  }, 2000);

  setTimeout(function () {
    reject("P1 failure");
  }, 2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p2 success");
  }, 3000);
  setTimeout(function () {
    reject("p2 failure");
  }, 3000);
});

async function doTask() {
  const data1 = await p1;
  console.log(data1);

  const data2 = await p2;
  console.log(data2);
}

doTask();
