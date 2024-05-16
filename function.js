// syntax
// *function declaration
function add(num1, num2){
    return num1 + num2;
};

const result = add(5,7);
// console.log(result);


//  *function expression

const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const result2 = addNumbers(10,20)
// console.log(result2)

const addNumber3 = (num1, num2) => num1 + num2

const result3 = addNumber3(15,10)
// console.log(result3)


const multiply = function (num1, num2){
    return num1 * num2
}

// console.log(multiply(5,3))

// *this

let user = {
    age: 24,
    getAge : function(){
        console.log("Normal function", this.age)
    },
    getAgeDetails: ()=> {
        console.log("Arrow Function", this.age)
    }
}

// const result4 = user.getAge()
// const result5 = user.getAgeDetails()

// console.log(result5)

// *access before declaring
// we can access before declaring only function declaration we can't access function expression

const result6 = add(5,4)
console.log(result6)

function add(num1,num2) {
    return num1 + num2;
}



tryMultiply(5,3)
const tryMultiply = function (num1, num2){
    return num1 * num2
} // this will throw error


