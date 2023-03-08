//Verify that the script is running
console.log("This script is running...");

//Calculate element values
const user = "Mike", salutation = "Salutatons ", greeting = salutation + user + ", here are the latest Triangles & Light Rods reviews!";
const price = 20, studentDiscount = 0.10, studentPrice = price - (price * studentDiscount);

//Log data values
console.log("Greeting = " + greeting);
console.log("Price = " + price);
console.log("Student Price = " + studentPrice);

//Get elements
const greetingElement = document.getElementById('greeting');
const priceElement = document.getElementById('price');
const studentPriceElement = document.getElementById('student-price');

//Set element content
greetingElement.textContent = greeting;
priceElement.textContent = price.toFixed(2);
studentPriceElement.textContent = studentPrice.toFixed(2);