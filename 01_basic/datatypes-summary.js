// Primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.



//Reference (Non-primitive)

// Arrays, Objects, Functions

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive), Heap(non-primitive)

let myYoutubeName = "hiteshdotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let UserOne = {
    email: "user@google.com",
    upi: "8273123438ybl"
}

let userTwo = UserOne

userTwo.email = "anshu@gmail.com"

console.log(UserOne.email);
console.log(userTwo.email);

