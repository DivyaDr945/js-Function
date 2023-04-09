// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function add(a, b) {
  return a + b;
}
let result = add(10, 20);
console.log(result);

// Passinf function in another function
let sum = add;
function avg(a, b, fn) {
  return fn(a, b) / 2;
}
let passingre = avg(10, 20, sum);
console.log(passingre);

// Annonymous function
let person = {
  firstName: 'Shali',
  latName: 'simio',
};
(function () {
  console.log(person.firstName + ' ' + person.latName);
})(person);

let show = function () {
  console.log('Annonymous function');
};
show();

let arrow = (a, b) => {
  console.log('arrow function: ' + a + b);
};
arrow(2, 3);
/*
In JavaScript, we have value types, also called primitives, and reference types (non-primitives) which are objects.
Primitives are number, string, boolean, symbol, undefined, and null, whereas, Non-primitives are objects, functions, and arrays.
In pass-by value in JavaScript, a copy of the original variable is created, so any changes made to the copied variable do not affect the original variable.
In pass-by reference in JavaScript, we pass the reference of the actual parameter. No copy is created in the memory.
When to Use Pass by Value?
As in pass-by value in JavaScript, a new copy of the variable is created, and any changes made in the new variable are independent of the original variable, so it is useful when we want to keep track of the initial variable and don't want to lose its value.
When to Use Pass by Reference?
When we are passing arguments of large size, it is better to use pass-by-reference in JavaScript as no separate copy is made in the called function, so memory is not wasted, and hence the program is more efficient.
*/
