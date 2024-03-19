// "use strict";

//global
console.log(this);

//function
function showThis() {
  console.log(this);
}

showThis();

//with methods
function printDetail() {
  console.log(this.name + " with the aim of " + this.aim);
}

const student2 = {
  name: "clement_127001",
  aim: "Geeky Solid full stack engineer",
};

const studentDetail = printDetail.bind(student2);
studentDetail();

//with arrow function
const student = {
  name: "clement",
  aim: "Solid full stack engineer",
  printDetail: () => {
    const x = () => {
      console.log(this);
    };

    x();
  },
};

student.printDetail.call(student2);

//with dom element
// const alertBtn = document.querySelector("#alertBtn");

// alertBtn.addEventListener("click", function () {
//   console.log(this.tagName);
// });
