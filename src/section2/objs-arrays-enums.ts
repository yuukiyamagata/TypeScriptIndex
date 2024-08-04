// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// }= {
//   name: "yota",
//   age: 30,
//   hobbies:["Sports", "Cooking"],
//   role: [2, "author"]
// }

// const ADMIN = 0;
// const READ_ONLY = 1
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "yota",
  age: 30,
  hobbies:["Sports", "Cooking"],
  role: Role.ADMIN,
}

/**
 * 以下のような定義を仮定する
 * Admin(管理者): 0
 * Read Only User(読み取り専用): 1
 * Author(作者): 2
 */


// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin"]

const number1 = 10;
let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby);
}

if(person.role === Role.ADMIN){
  console.log("管理者ユーザー");
}