class Counter {
  constructor(parentElement = document.body) {
    this.count = 0;
    this.displayElement = null;

    this.createCounterElement(parentElement);
  }

  createCounterElement(parentElement) {
    var counterElement = document.createElement("div");

    var displayElement = document.createElement("h1");
    displayElement.textContent = 0;
    this.displayElement = displayElement;
    counterElement.appendChild(displayElement);

    var buttonTextContents = ["+", "-", "Reset"];
    var buttonHandlerNames = ["increment", "decrement", "reset"];
    for (var i = 0; i < 3; i++) {
      var buttonElement = document.createElement("button");
      buttonElement.textContent = buttonTextContents[i];
      buttonElement.onclick = this[buttonHandlerNames[i]].bind(this);
      counterElement.appendChild(buttonElement);
      counterElement.appendChild(document.createTextNode(" "));
    }

    parentElement.appendChild(counterElement);
  }

  increment() {
    this.count++;
    this.displayElement.textContent = this.count;
  }
  decrement() {
    this.count--;

    if (this.count < 0) this.count = 0;

    this.displayElement.textContent = this.count;
  }
  reset() {
    this.count = 0;
    this.displayElement.textContent = this.count;
  }
}

new Counter(document.querySelector("#s1"));
new Counter(document.querySelector("#s2"));
