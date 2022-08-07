console.log("website is running");

// let nameVar = document.getElementById("name");

// console.log("Hello, ", nameVar);

// let email = document.getElementsByClassName("email");

// console.log(email);

// function greet() {
//     console.log("Welcome to learning")
// }

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return factorial(num-1) * num;
} 

let variable = factorial(5);

console.log(variable);