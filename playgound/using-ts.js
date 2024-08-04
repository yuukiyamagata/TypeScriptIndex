"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1"); // このDOM要素は必ず取得できる。型キャスト
const input2 = document.getElementById("num2");
const add = (num1, num2) => num1 + num2;
button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
