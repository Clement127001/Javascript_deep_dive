//working with array methods
const users = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const numbers = [1, 2, 3, 4, 5];

//map
const squares = numbers.map((num) => num * num);
const double = numbers.map((num) => num * 2);
const triple = numbers.map((num) => num * 3);

//filter
const odd = numbers.filter((num) => num % 2 == 1);
const even = numbers.filter((num) => num % 2 == 0);

//reduce
const sum = numbers.reduce((sum, curr) => sum + curr, 0);
const max = numbers.reduce((max, cur) => {
  if (cur > max) max = cur;

  return max;
}, 0);

// console.log(max);

//map() -> to iterate over each element in array and creating new array
const usersFullname = users.map(function (user) {
  return user.firstName + " " + user.lastName;
});

//filter() -> used to filter the elemets out of the array
const lessAgePeople = users.filter((user) => {
  return user.age < 30;
});
const peopleNameWithA = users.filter((user) => user.firstName.startsWith("a"));

//reduce() -> used to build the single value {array,single digit,..} out of an array
const ageOcurrence = users.reduce((ageFreq, curr) => {
  if (ageFreq[curr.age]) ageFreq[curr.age]++;
  else ageFreq[curr.age] = 1;

  return ageFreq;
}, {});

const lessAgePeopleName = users.reduce((res, curr) => {
  if (curr.age < 30) res.push(curr.firstName);

  return res;
}, []);

//using the chainging 1-> filter 2-> add the name
const result = users
  .filter((user) => user.age > 30)
  .map((user) => user.firstName);

// console.log(result);

// task 1 finding the unique age
const uniqAge = users.reduce((res, curr) => {
  if (!res.includes(curr.age)) {
    res.push(curr.age);
  }

  return res;
}, []);

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "dinner",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// task 2 pick the titles form the given array
const titles = menu.map((item) => item.title);

// task 4 sum up all the totals
const total = menu.reduce((sum, curr) => sum + curr.price, 0);

//task 5 filtering based on the prices
const menuLessThan12 = menu.filter((item) => item.price <= 12);

//task 6 find the no of items based on a category
const categoryAndCount = menu.reduce((catList, curr) => {
  if (catList[curr.category]) {
    catList[curr.category]++;
  } else {
    catList[curr.category] = 1;
  }

  return catList;
}, {});

// console.log(categoryAndCount);

//selecting element
const menuElement = document.querySelector("#menu-items");

const loadMenuItems = (menuItems) => {
  const menuSection = menuItems
    .map(
      (item) => `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
             ${item.desc}
          </p>
        </div>
      </article>`
    )
    .join(" ");

  menuElement.innerHTML = menuSection;
};
//this will be the bread and butter for any developer

window.addEventListener("load", loadMenuItems(menu));

// task 3 find the unique category form the array
const category = menu.reduce(
  (categories, curr) => {
    if (!categories.includes(curr.category)) categories.push(curr.category);

    return categories;
  },
  ["all"]
);

//creating the buttons
const btns = category
  .map(
    (cat) =>
      `  <button type="button" class="filter-btn" data-id=${cat}>${cat}</button>`
  )
  .join(" ");

const btnContainer = document.querySelector(".btn-container");
btnContainer.innerHTML = btns;
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;

    let filteterdItems;
    if (category != "all")
      filteterdItems = menu.filter((item) => item.category === category);
    else filteterdItems = menu;

    loadMenuItems(filteterdItems);
  });
});
