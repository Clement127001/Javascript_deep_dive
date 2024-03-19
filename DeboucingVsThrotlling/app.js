//selecting the element
const btn = document.querySelector(".btn");
const pressDetail = document.querySelector(".btn-press");
const triggerDetail = document.querySelector(".btn-throttle");

let pressCount = 0;
let triggerCount = 0;

//debouncing function
function myDebounce(cb, delay) {
  let timer;

  return function () {
    //for ensuring the function is called with correct context
    let context = this;
    let args = arguments;
    //clearing the old timer
    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {
      cb.apply(context, args);
    }, delay);
  };
}

//throtting function

function myThrottle(fun, delay) {
  let lastCalledTime = 0;

  return function () {
    const args = arguments;
    const context = this;
    const currentTime = Date.now();

    if (currentTime - lastCalledTime >= delay) {
      fun.apply(context, args);
      lastCalledTime = currentTime;
    }
  };
}

function incrementTrigger() {
  triggerDetail.innerHTML = ++triggerCount;
}

// const debouncedTriggerIncrement = myDebounce(incrementTrigger, 500);
const throttledTriggerIncrement = myThrottle(incrementTrigger, 2000);

btn.addEventListener("click", function () {
  pressDetail.innerHTML = ++pressCount;
  //   debouncedTriggerIncrement();
  throttledTriggerIncrement();
});
