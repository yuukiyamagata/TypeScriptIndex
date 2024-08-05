const userName = "Max";
// userName = "Maximilian"
let age = 30;

age = 29;


const add = (a: number, b:number = 1) => a + b;

const printOutPut: (output: string | number) => void = output => console.log(output);

printOutPut(add(2));

const button = document.querySelector("button");

if(button){
  button.addEventListener("click", event => console.log(event));
}

const hobbies = ["Sports", "Cooling"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30
}

const copiedPerson = {
  ...person
}


// if(age >= 20){
//   let isAdult = true;
// }

// console.log(isAdult);
