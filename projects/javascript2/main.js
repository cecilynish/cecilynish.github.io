
let flowers = [
  {name: "Instagram", amount: 295},
  {name: "Are.na", amount: 24},
  {name: "Gmail", amount: 57},
  {name: "Messenger", amount: 494},
  {name: "Twitter", amount: 22},
  {name: "Safari", amount: 73}
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
let container = document.querySelector(".garden");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displayFlowers(flower) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let flowerDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("flower");
  // adds a specific class to each new div
  newItem.classList.add("flower" + [i]);
  // places the flower name and amount to the div
  flowerDiv.innerHTML = flower.name + " – " + flower.amount + " minutes";
  // sets height of flower to the amount. try changing height to width, or padding
  flowerDiv.style.height = 2 * (flower.amount) + "px";
  flowerDiv.style.width = 2 * (flower.amount) + "px";
  console.log(flower);
}
// loops through the flowers and runs the displayFlowers function for each one
flowers.forEach(displayFlowers);