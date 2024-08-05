"use strict";
let appId = "abc";
const button = document.querySelector("button");
const add = (n1, n2) => {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
};
const clickHandler = (message) => {
    console.log("Clicked " + message);
};
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You are welcome!"));
}
