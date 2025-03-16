// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anshu",
    "full name": "Anshu Verma",
    [mySym]: "mykey1",
    age: 20,
    location: "Ludhiana",
    email: "anshu@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


JsUser.email = "anshu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anshu@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

