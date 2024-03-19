//the task is to create four api using promises

//createOrder
//proceedToPayment
//showSummary
//updateWallet

const cart = ["Book", "Pen", "Calendar", "Sicky notes"];
const alreadyPlaceIds = [1, 2, 3, 4];
const balanceAmount = 100;

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (amt) {
//     console.log(amt);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// console.log("This is the first task : sync");
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (amt) {
//     console.log(amt);
//     return amt;
//   })
//   .then(function (amt) {
//     return showSummary(amt);
//   })
//   .then(function (amt) {
//     console.log("The order has been placed and the total : " + amt);
//     return amt;
//   })
//   .then(function (amt) {
//     return updateWallet(amt);
//   })
//   .then(function (wallInfo) {
//     console.log(wallInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// const fun = async () => {
//   const orderId = await createOrder(cart); //async operation
//   console.log(orderId);
// };

// setTimeout(() => {
//   console.log("I am the callback function of set timeout");
// }, 2000);

// fun(cart);

async function placeOrder(cart) {
  try {
    const orderId = await createOrder(cart);
    console.log("Order Id: " + orderId);

    const amount = await proceedToPayment(orderId);
    console.log("Order total : " + amount);

    const amt = await showSummary(amount);

    const walletInfo = await updateWallet(amt);
    console.log(walletInfo);
  } catch (err) {
    console.log(err.message);
  }
}

placeOrder(cart);

//createOrder promise
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (cart) {
      const id = 123;

      setTimeout(function () {
        resolve(id);
      }, 2000);
    } else {
      const err = new Error("The cart is not valid");
      reject(err);
    }
  });
}

//proceedToPayment promise
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!alreadyPlaceIds.includes(orderId)) {
      const amount = Math.round(Math.random() * 1000);

      setTimeout(function () {
        resolve(amount);
      }, 2000);
    } else {
      const err = new Error("Cannot proceed you to payment");
      reject(err);
    }
  });
}

//showSummary promise
function showSummary(amount) {
  return new Promise(function (resolve, reject) {
    if (amount < 1000) {
      setTimeout(function () {
        resolve(amount);
      }, 2000);
    } else {
      const err = new Error("Order summary cannot be shown");
      reject(err);
    }
  });
}

//updateWallet promise
function updateWallet(amount) {
  return new Promise(function (resolve, reject) {
    if (amount < balanceAmount) {
      setTimeout(function () {
        resolve(
          "The order has been placed and the balance amount : " +
            (balanceAmount - amount)
        );
      }, 2000);
    } else {
      const err = new Error(
        "The balance is deficient in the wallet, pay it using the cash"
      );

      reject(err);
    }
  });
}
