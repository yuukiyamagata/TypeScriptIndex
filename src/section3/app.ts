
const button = document.querySelector("button")! as HTMLButtonElement;

const clickHandler = (message: string) => console.log("Clicked " + message)

if(button){
  button.addEventListener("click", clickHandler.bind(null, "You are welcome!"));
}