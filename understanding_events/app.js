// console.log(
//   "This is the applcation that helps to understand all about the events"
// );

//selecting the elements
const grandParent = document.querySelector("#grandparent");
const parent = grandParent.querySelector("#parent");
const child = parent.querySelector("#child");
const adjacent = document.querySelector("#adjacent");

// const body = document.body;

//addeventlistener takes three argument (out of that third one is optional) 1)event {eg: click,load,..} 2)callback function 3)use capture (default :false) ->  event bubbling / true -> then event capturing

// body.addEventListener(
//   "click",
//   function (e) {
//     console.log("this is the body section");
//   },
//   false
// );

adjacent.addEventListener("click", function (e) {
  console.log("I am the adjacent element");
});

grandParent.addEventListener(
  "click",
  function (e) {
    console.log("grandparent calling");
    // e.stopPropagation();
  },
  false
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("parent calling");
  },
  false
);

child.addEventListener(
  "click",
  function (e) {
    console.log("child calling");
  },
  true
);
