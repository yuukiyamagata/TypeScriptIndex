var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // このDOM要素は必ず取得できる。型キャスト
var input2 = document.getElementById("num2");
var add = function (num1, num2) { return num1 + num2; };
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

