const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement; // このDOM要素は必ず取得できる。型キャスト
const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1:number, num2:number) =>  num1 + num2;

button.addEventListener("click",  () => {
  console.log(add(+input1.value, +input2.value));
})