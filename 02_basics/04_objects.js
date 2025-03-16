// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anshu"
tinderUser.isLoggedIn = false

// console.log(tinderUser.isLoggedIn);

const regularUser = {
    email: "anshu@gg.com",
    fullname: {
        username: {
            firstname: "anshu",
            lastname: "verma"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);
