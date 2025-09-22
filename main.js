/////// Variables Section ///////
const myName = "Ivan Mata";
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [
  { make: "Toyota", model: "Prius", color: "Silver" },
  { make: "Chevy", model: "Bolt", color: "Blue" },
  { make: "Honda", model: "Civic", color: "White" }
];
const today = new Date();
const loggedIn = true;


/////// PART 1 - Variables and Data Types demo ///////
var a = 'Test1';
let b = 'Test2';

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// Test
testVar();
testLet();


//////// PART 2 - Template Literals ////////
const result2Element = document.getElementById('result2');
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[2].color} ${car[2].make} ${car[2].model}`;

const footerElement = document.getElementById("footer");
footerElement.innerHTML = `&copy; ${myName} ${today.getFullYear()}`;


//////// PART 3 - Ternary Operator ////////
const result3Element = document.getElementById('result3');
result3Element.textContent = loggedIn ? "Welcome back!" : "Please log in";


//////// PART 4 - Arrow Functions ////////
const GreetingsArrow = (name = "student") => `Hello ${name}!`;
console.log(GreetingsArrow(myName)); // "Hello Ivan Mata"

function Greetings(name) {
  return `Hello ${name}!`;
}
console.log(Greetings(myName));


//////// PART 5 - Array Methods ////////
function printFruit() {
  const resultElement = document.getElementById("result5");
  resultElement.textContent = "";
  const bFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'));
  bFruits.forEach(fruit => {
    const p = document.createElement("p");
    p.textContent = fruit;
    resultElement.appendChild(p);
  });
}

function clearText() {
  const resultElement = document.getElementById("result5");
  resultElement.textContent = "";
}


//////// PART 6 - Destructuring ////////
function myCar({ make, model, color }) {
  const message = `I drive a ${color} ${make} ${model}`;
  document.getElementById("result6").textContent = message;
}
myCar(car[0]);


//////// PART 7 - Spread Operator ////////
const baseProduct = {
  id: 'PROD-001',
  name: 'Wireless Headphones',
  price: 199.99,
  warranty: '1 year'
};

const holidayPromo = {
  price: 149.99,
  promoText: 'Holiday Special!',
  bundle: 'Free carrying case'
};

const currentProduct = { ...baseProduct, ...holidayPromo, lastUpdated: '2023-12-31' };
console.log(currentProduct);
document.getElementById("result7").textContent =
  `The ${currentProduct.name} are on sale for ${currentProduct.price.toFixed(2)} as of ${currentProduct.lastUpdated}.`;


//////// PART 8 - Try/Catch ////////
function InputValidation() {
  const message = document.getElementById("part8-p");
  message.innerHTML = "";

  let x = document.getElementById("part8-input").value.trim();

  try {
    if (x === "") throw "Input is EMPTY";

    const num = Number(x);
    if (Number.isNaN(num)) throw "Input is NOT A NUMBER";

    if (num > 15) throw "Input is TOO HIGH";
    if (num < 10) throw "Input is TOO LOW";

    message.innerHTML = "Success";
  }
  catch (err) {
    message.innerHTML = err;
  }
  finally {
    document.getElementById("part8-input").focus();
  }
}
