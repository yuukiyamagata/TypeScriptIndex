
let appId = "abc";
const button = document.querySelector("button")! as HTMLButtonElement;


const add = (n1: number, n2: number) => {
  if(n1 + n2 > 0){
    return n1 + n2;
  }

  return;
}

const clickHandler = (message: string) => {
  // let userName = "Max";
  console.log("Clicked " + message);
}

if(button){
  button.addEventListener("click", clickHandler.bind(null, "You are welcome!"));
}