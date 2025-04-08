alert("Hello World!");

console.log("My first JavaScript assignment");

document.getElementById("output").textContent = "I just modified this element with JavaScript";


const name = "Yu"
let age = 20
let number = 8.6
console.log (`My name is ${name}, I am ${age} years old, and my favorite number is ${number}.`);

function sumValues(a, b) {
    let c = a + b;
    alert("The value of z is " + c + ".");
    document.getElementById("demo").innerHTML = c;
}
    

function calculate(number1,number2){
   
console.log(`addition : ${number1} + ${number2} = ${number1 + number2}`);
console.log(`Subtraction: ${number1} - ${number2} = ${number1 - number2}`);
console.log(`Multiplication: ${number1} * ${number2} = ${number1 * number2}`);
console.log(`Division: ${number1} / ${number2} = ${number1 / number2}`);

}
calculate(872,912);
calculate(19,79);
calculate(263,910);

function fahrenheitToCelsius() {
    let fahrenheit = 100;
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(`${fahrenheit}°F is ${celsius}°C`);
  }
function celsiusToFahrenheit() {
    let celsius = 37;
    let fahrenheit = celsius * 9 / 5 + 32;
    alert(`${celsius}°C is ${fahrenheit}°F`);
  }

function task5(input) {
    let upperCaseString = input.toUpperCase();       
    let characterCount = input.length;
  
    let message = `Uppercase: ${upperCaseString}\nCharacter count: ${characterCount}`;
    alert(message);
  }
  var isOn = true;

  function switchOff () {
      if(isOn == true) {
          alert("The light is on.");
          isOn = false;
      } else {
          alert("The light is off.");
          isOn = true;
      }
  }
  function countByTwo(maxNumber) {
    let result = "";
  
    for (let i = 0; i <= maxNumber; i += 2) {
      result += i + "<br>";
    document.getElementById("countByTwo").innerHTML = result;
    }

}
