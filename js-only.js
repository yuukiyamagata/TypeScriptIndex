const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const add = (num1, num2) => {
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2;
  }
};

button.addEventListener("click",  () => {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);

  const result = add(val1, val2);
  console.log(result);
})