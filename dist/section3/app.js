"use strict";
let appId = "abc";
const button = document.querySelector("button");
const clickHandler = (message, age) => {
    console.log("Clicked " + message);
};
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You are welcome!", 30));
}
