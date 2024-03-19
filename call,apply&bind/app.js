const name = {
  firstName: "Babiyon",
  lastName: "Clement",
};

const name2 = {
  firstName: "Clement",
  lastName: "127001",
};

//the function -> that is going to be used for multiple times, so creating as the standalone function
function printDetails(aim, motto) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " who is want to be " +
      aim +
      " and live with the life with the motto of " +
      motto
  );
}

//this is all about the call(), apply() and bind()

//call()
printDetails.call(name, "a basic engineer", " live a basic life");

//apply()
printDetails.apply(name2, [
  "a solid  geeky software engineer",
  "want to live the life to the fullest potential",
]);

//bind()
const myDetails = printDetails.bind(
  name2,
  "a geeky solid software engineer" +
    "want to develop the best application and to live the life to the fullest potential"
);

myDetails();
