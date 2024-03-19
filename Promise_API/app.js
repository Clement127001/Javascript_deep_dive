//four APIs
//Promise.all([promises])
//Promise.allSettled([promises])
//Promise.race([promises])
//Promise.any([promises])

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P1 success");
  }, 3000);
  // setTimeout(function () {
  //   reject("P1 failed");
  // }, 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P2 success");
  }, 1000);
  // setTimeout(function () {
  //   reject("P2 failed");
  // }, 1000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P3 success");
  }, 2000);
  // setTimeout(function () {
  //   reject("P3 failed");
  // }, 2000);
});

Promise.any([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });
