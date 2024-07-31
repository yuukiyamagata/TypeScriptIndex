let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName  = userInput;
// userInputがstring型であるということが保証されていないためエラーが出る

if(typeof userInput === "string"){
  userName = userInput;
}

function generateError(message: string, code: number):void {
  throw { message: message, errorCode: code };
}

const result = generateError("エラーが発生しました", 500);
console.log(result);